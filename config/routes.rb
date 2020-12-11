Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  mount MatildaCore::Engine => '/'
  post 'refresh-token', to: 'application#refresh_token', as: 'refresh_token'
  post 'refresh-portfolio-code', to: 'application#refresh_portfolio_code', as: 'refresh_portfolio_code'
  get 'get-cards', to: 'application#get_cards', as: 'get_cards'
  post 'move-card', to: 'application#move_card', as: 'move_card'
  get 'pokemon', to: 'application#pokemon', as: 'pokemon'
end
