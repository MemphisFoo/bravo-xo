Rails.application.routes.draw do
  resources :profile_photos
  resources :messages
  resources :conversations do
    resources :messages
  end
  resources :shows, only: [:show] do
    resources :users
    resources :profiles
  end
  resources :profiles
  resources :pronouns
  resources :block_users
  resources :sexualities
  resources :users
  # mount ActionCable.server => '/cable'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "fallback#index",
               constraints: ->(req) { !req.xhr? && req.format.html? }
  #Signup
  post "/signup", to: "users#create"

  #Logged in
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  #Logged out
  delete "/logout", to: "sessions#destroy"

  #Users
  get "/users", to: "users#index"

  #Search
  get "/users/:id", to: "users#search"

  #Pronouns
  get "/pronouns", to: "pronouns#index"

  #Profiles
  get "/profiles/:id", to: "users#show"
  get "/profiles", to: "profiles#index"
  get "/profiles/:id/user", to: "profiles#show_user"
  # get "/profiles/create", to: "profiles#create"
  get "/profiles/:id/edit", to: "profiles#update"
  patch "/update_profile_pic", to: "profiles#update_profile_pic"
  #$Shows
  get "/shows", to: "shows#index"
  get "/shows/:id/users", to: "users#index"
  get "/shows/:id/profiles", to: "profiles#index"
  get "/shows/:id", to: "shows#show"
end
