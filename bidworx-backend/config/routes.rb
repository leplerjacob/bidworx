Rails.application.routes.draw do
  resources :project_bids
  resources :projects
  resources :marketplaces
  resources :freelancers
  resources :clients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
