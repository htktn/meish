class ApplicationController < ActionController::API
  include ActionController::Cookies

  alias_method :devise_current_user, :current_user
  def current_user
    User.where.not(access_token: nil).find_by(access_token: cookies["access_token"])
  end
end
