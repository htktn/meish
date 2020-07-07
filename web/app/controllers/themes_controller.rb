class ThemesController < ApplicationController
  before_action :authenticate_user!

  def index
    themes = Theme.all
    render :json => themes.to_json
  end
end
