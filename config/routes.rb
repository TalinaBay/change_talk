Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/groupworkshops", to: "group_workshops#index"
  get "/groupworkshops/:id/:part", to: "group_workshops#show", as: "group"
end
