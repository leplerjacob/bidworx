class SessionsController < ApplicationController
  def login
    is_client = Client.find_by(username: params[:username])
    if is_client
      render json: {type: 'success', message: [login: 'Login successful'] , user_id: is_client.id.to_s}
    else !is_client
      is_freelancer = Freelancer.find_by(username: params[:username])
      if is_freelancer
        render json: {type: 'success', message: [login: 'Login successful'], user_id: is_freelancer.id.to_s}
      else
        render json: {type: "failure", message: [ username: "username/password incorrect"]}, status: :unauthorized
      end
    end
  end
end
