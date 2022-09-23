Rails.application.routes.draw do
  resources :clients
  resources :case_managers
  resources :appointments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  get '/files', to: 'files#show'
  get 'maps', to: 'maps#from_api'
  # Defines the root path route ("/")
  # root "articles#index"
end
