Rails.application.routes.draw do
  resources :pronouns
  resources :messages
  resources :participants
  resources :conversations
  resources :block_users
  resources :grades
  resources :user_photos
  resources :sexualities
  resources :interested_in_sexualities
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path', to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
#Signup
  post '/signup', to: 'users#create'

#Logged in
get '/me', to: "users#show"
post "/login", to: "sessions#create"

#Logged out
delete "/logout", to: "sessions#destroy"

#Users
get '/users', to: "users#index"
end
