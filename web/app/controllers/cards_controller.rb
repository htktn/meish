class CardsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_card, only: [:show, :update, :destroy]

  # {
  #   informations: [
  #     {content: '08047338027', type: 'phone_number'}, 
  #     {content: 'koki827tt@gmail.com  ', type: 'phone_number'},
  #     {content: '川口市川口', type: 'address'},
  #   ],
  #   "role": "ホゲホゲ大学大学院一年",
  #   "name": "津村光輝",
  #   "kana": "つむらこうき",
  #   "user_id": 12
  #   "access_token": "sdadsfadjlacscgjadlsk"
  # }

  def index
    cards = current_user.cards.map do |card| 
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

  def create
    card = Card.new(card_params)
    card.user = current_user
    return render status: 404, json: { status: 404, message: 'Failed to create' } if !card.save
    current_user.update(default_card_id: card.id) if current_user.cards.count == 0 

    card_informations = information_params.map{|info| CardInformation.new(info)}

    CardInformation.transaction do
      card_informations.each do |card_info|
        card_info.card_id = card.id
        card_info.save
      end
    end

    render :json => card.to_json
  end

  def update
    return render status: 404, json: { status: 404, message: 'Record not found' } if @card.blank?

    if @card.update_attributes(card_params)
      render json: @card.to_json
    else
      render status: 404, json: { status: 404, message: 'Failed to update' } 
    end
  end

  def destroy
    return render status: 404, json: { status: 404, message: 'Record not found' } if @card.blank?

    begin
      @card.destroy
      render json: @card.to_json
    rescue => e
      render status: 404, json: { status: 404, message: e.message } 
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :role, :kana, :access_token, :user_id, :theme_id, informations: [:content, :type_id])
  end

  def information_params
    params.permit(informations: [
      :content,
      :type_id
    ])
    .require(:informations)
  end

  def set_card
    @card = Card.find_by(id: params[:id], user_id: current_user.id)
  end
end
