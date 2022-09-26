Rails.application.routes.draw do
  resources :clients, [:index, :show, :create, :update, :destroy]
  resources :case_managers, only: [:upate]
  resources :appointments, only: [:index, :show, :create, :delete]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  get '/files', to: 'files#show'
  get '/login', to: 'sessions#create'
  post '/clients', to: 'clients#create'
  patch '/update', to: 'clients#update', as: 'updateclient' #update
  # get 'maps', to: 'maps#from_api'
  # Defines the root path route ("/")
  # root "articles#index"
end
