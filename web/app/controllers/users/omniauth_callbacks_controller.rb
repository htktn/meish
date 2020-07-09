class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  include ActionController::Cookies

  ENDPOINTS = YAML.load(ERB.new(IO.read("#{Rails.root}/config/endpoint.yml")).result)[Rails.env].symbolize_keys!

  def twitter; basic_action; end

  private

  def basic_action
    @omniauth = request.env['omniauth.auth']
    if @omniauth.present?
      @profile = SocialProfile.where(uid: @omniauth['uid']).find{|sp| sp.provider == @omniauth.provider}

      unless @profile
        service = Service.find_by(provider: @omniauth.provider)
        @profile = SocialProfile.new(uid: @omniauth['uid'], service_id: service.id)
        @profile.user = current_user || User.create!
        @profile.set_values(@omniauth)
        @profile.save!
      end

      cookies['user_id'] = @profile.user.id
      cookies['access_token'] = @profile.user.access_token

      if current_user
        raise "user is not identical" if current_user != @profile.user
      else
        sign_in(:user, @profile.user)
      end
    end
    redirect_to ENDPOINTS[:front]['auth_callback_url']['twitter']
  end
end
