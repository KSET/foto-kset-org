Rails.application.routes.draw do
  devise_for :users
  root to: 'landing#index'
  resources :applications, only: [:create]

  namespace :admin do
    root to: 'seasons#index'
    resources :applications, except: [:index]
    resources :seasons
    resources :users
  end
end
