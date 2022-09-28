Rails.application.routes.draw do
  resources :messages
  resources :chatrooms
  resources :shows
  resources :profiles
  resources :pronouns
  resources :block_users
  resources :sexualities
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

#Users/Profiles
get '/users', to: "users#index"

#Search
get "/users/:id", to: "users#search"

#Pronouns
get '/pronouns', to: "choose_pronouns#index"

#Profile

get'/profiles', to: "users#show"
# get '/profiles', to: "profiles#index"
get '/profiles/:id/edit', to: "profiles#update"
end
