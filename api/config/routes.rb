Rails.application.routes.draw do
  post 'register' => 'auth#register'
  post 'login' => 'auth#login'
  scope module: 'api' do
    namespace :v1 do
      resources :guests
      resources :users
      resources :timers
    end
  end

   match '*path', via: [:options], to:  lambda {|_| [204, {'Content-Type' => 'text/plain'}, []]}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
