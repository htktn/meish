class OtherCardsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_card, only: [:show]

  def index
    cards = current_user.other_cards.map do |card| 
      {
        id: card.id,
        name: card.name,
        role: card.role, 
        kana: card.kana, 
        theme_id: card.theme_id,
        informations: card.card_informations.map do |card_info| 
          {
            id: card_info.id,
            content: card_info.content, 
            type: card_info.type
          }
        end
      }
    end

    render :json => cards.to_json
  end

  def show
    return render status: 404, json: { status: 404, message: 'Record not found' } if @card.blank?
    
    card = {
      id: @card.id,
      name: @card.name,
      role: @card.role, 
      kana: @card.kana, 
      theme_id: @card.theme_id,
      informations: @card.card_informations.map do |card_info| 
        {
          id: card_info.id,
          content: card_info.content, 
          type: card_info.type
        }
      end
    }

    render :json => card.to_json
  end

  private

  def set_card
    @card = Card.find_by(id: params[:id], user_id: current_user.id)
  end
end
