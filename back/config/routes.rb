Rails.application.routes.draw do
  devise_for :user, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    sessions: 'users/sessions'
  }
end
