class FreelancersController < ApplicationController
    # include, only, except
    
    def index
        @freelancers = Freelancer.all
        render json: @freelancers, :except => [:updated_at, :created_at]
    end

    def show
        @freelancer = Freelancer.find(params[:id])
        render json: @freelancer
    end

    # Make a post request action to update status of project
end
