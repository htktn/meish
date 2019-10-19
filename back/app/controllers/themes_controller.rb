class ThemesController < ApplicationController

  def index
    themes = Theme.all
    render :json => themes.to_json
  end
end
