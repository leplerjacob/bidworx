Rails.application.routes.draw do
  resources :contracts
  resources :project_bids
  resources :projects
  post '/projects', to: 'projects#create'

  resources :marketplaces
  resources :freelancers
  
  resources :clients
  get '/:id/contracts', to: 'clients#my_contracts'
  get '/:id/my_projects', to: 'clients#my_projects'

  get '/login/:username', to: 'sessions#login'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
