class TypesController < ApplicationController
  before_action :authenticate_user!

  def index
    types = Type.all
    render :json => types.to_json
  end
end
