Rails.application.routes.draw do
  resources :clients, only: [ :index, :show, :create, :update, :destroy ]
  resources :case_managers, only: [ :index, :show, :update]
  resources :appointments, only: [ :index, :show, :create, :update, :destroy ]
  resource :files, only: [ :index, :create ]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  get '/files', to: 'files#index'

  
  get '/authorized_case_manager', to: 'case_managers#show'
  post '/signup', to: 'case_managers#create'
  post '/login', to: 'sessions#create'
  post '/clients', to: 'clients#create'
  delete '/logout', to: 'sessions#destroy'
  # patch '/update', to: 'clients#update', as: 'updateclient' #update
  
  # get 'dashboard', to: 'case_managers#show'
  # get '/', to: 'case_managers#show'

  # get '/clients', to: 'clients#show'


  # delete '/u', to: "users#destroy"
  # get 'maps', to: 'maps#from_api'
  # Defines the root path route ("/")
  # root "articles#index"
end
