# ApplicationController.
class ApplicationController < MatildaCore::ApplicationController

  before_action :session_present_check

  # Refresha il token dell'utente.
  def refresh_token
    render_json_success(token: create_auth_session(@session.user_session_uuid, @session.user_uuid), user: @session.user.serialize_authentication)
  end

  # Genera un codice portfolio per l'utente.
  def refresh_portfolio_code
    portfolio_code = 'howdoyouturnthison'
    portfolio_code = Faker::Lorem.word while MatildaCore::User.find_by(portfolio_code: portfolio_code)
    @session.user.update(portfolio_code: portfolio_code)
    render_json_success(portfolio_code: portfolio_code)
  end

  # Ritorna la lista delle carte del singolo utente.
  def get_cards
    render_json_success(cards: Card.where(user_uuid: @session.user_uuid))
  end

  # Esegue il passaggio di una carta ad un altro utente.
  def move_card
    card = Card.find_by(user_uuid: @session.user_uuid, id: params[:card_id])
    unless card
      json_errors(json_error('Card not valid'))
      render_json_fail
      return
    end

    user = MatildaCore::User.find_by(portfolio_code: params[:portfolio_code])
    unless user
      json_errors(json_error('Portfolio code not valid'))
      render_json_fail
      return
    end

    card.update(user_uuid: user.uuid)
    render_json_success({})
  end

  # Esegue il passaggio di tante carte ad un altro utente.
  def move_cards
    # TODO
  end

  # ENDPOINT DEMO

  def pokemon
    render_json_success(movies: [*1..10].map { get_random_pokemon })
  end

  private
  
  def get_random_pokemon
    {
      name: Faker::Games::Pokemon.name,
      location: Faker::Games::Pokemon.location,
      action: Faker::Games::Pokemon.move
    }
  end

  def create_auth_session(session_uuid, user_uuid)
    auth_session = session_create(session_uuid, user_uuid)
    auth_session
  end

end
