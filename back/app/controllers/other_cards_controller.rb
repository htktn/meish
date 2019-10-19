class OtherCardsController < ApplicationController
  before_action :authenticate_user!

  def index
    cards = current_user.other_cards
    render :json => cards.to_json
  end

  def show
    card = current_user.other_cards.find_by(id: params[:id])
    render :json => card.to_json
  end
end
