# ApplicationController.
class ApplicationController < MatildaCore::ApplicationController

  before_action :session_present_check

  def pokemon
    render_json_success(movies: [*1..10].map { get_random_pokemon })
  end

  private def get_random_pokemon
    {
      name: Faker::Games::Pokemon.name,
      location: Faker::Games::Pokemon.location,
      action: Faker::Games::Pokemon.move
    }
  end

end
