class AuthController < ApplicationController

  # Equivalent to user#create
  def register
    begin
      user = User.new(auth_params)
      if user.save
        render json: { token: AuthToken.encode({ user_id: user.id }) }
      else
        render json: { errors: user.errors }, status: :unauthorized
      end
    rescue ActiveRecord::RecordNotUnique
      render json: { errors: exception }, status: :unauthorized
    end
  end

  # Equivalent to user#index
  def login
    user = User.find_by(email: auth_params[:email])
    if user && user.authenticate(auth_params[:password])
      render json: { token: AuthToken.encode({ user_id: user.id }) }
    else
      render json: { errors: ['Invalid username or password'] }, status: :unauthorized
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def auth_params
      params.permit(:name, :email, :password)
    end
end
