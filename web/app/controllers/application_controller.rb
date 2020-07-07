class ApplicationController < ActionController::API
  include ActionController::Cookies

  alias_method :devise_current_user, :current_user

  def current_user
    User.where.not(access_token: nil).find_by(id: cookies['user_id'], access_token: cookies["access_token"])
  end

  def authenticate_user!
    return render status: 401, json: { status: 401, message: 'Unauthorized' } unless current_user
  end
end
