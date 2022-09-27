Rails.application.routes.draw do
  resources :clients, only: [ :index, :show, :create, :update, :destroy ]
  resources :case_managers, only: [ :show ]
  resources :appointments, only: [ :index, :show, :create, :update, :destroy ]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  get '/files', to: 'files#show'

  post '/signup', to: 'case_managers#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # get '/clients', to: 'clients#show'

  # get '/authorized_user', to: 'case_managers#show'


  post '/clients', to: 'clients#create'
  get '/', to: 'case_managers#show'
  patch '/update', to: 'clients#update', as: 'updateclient' #update
  # get 'maps', to: 'maps#from_api'
  # Defines the root path route ("/")
  # root "articles#index"
end
