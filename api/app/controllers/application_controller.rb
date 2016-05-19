class ApplicationController < ActionController::API
  attr_reader :current_user

  protected
  # Called by controllers decorated with "before_action :authenticate!"
  # Returns current user if user from tooken is found
  def authenticate!
    user_id = get_user_id_from_token
    if user_id
      @current_user = User.find(user_id)
    else
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
    end
  rescue JWT::ExpiredSignature
    render json: { errors: ['Authentication Timeout'] }, status: 419
  rescue JWT::VerificationError, JWT::DecodeError
    render json: { errors: ['Not Authenticated'] }, status: :unauthorized
  end

  private

  # Validates if User ID is in the token header
  def get_user_id_from_token
    if request.headers['Authorization'].present?
      @token = request.headers['Authorization'].split(' ').last
      @payload ||= AuthToken.decode(@token)
      if @payload && @payload[:user_id]
        return @payload[:user_id]
      end
    end
    return nil
  end
end
