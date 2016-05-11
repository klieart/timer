class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  #This looks for a Guest record based on a guest token. This token is created when the method is called for the first time and stored in the session.
  def guest_user
    Guest.where(token: guest_token).first_or_create
  end

  private
  def guest_token
    session[:guest_token] ||= SecureRandom.uuid
  end
end
