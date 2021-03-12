class ContractsController < ApplicationController
    def index
        @contracts = Contract.all
        render json: @contracts, :except => [:updated_at, :created_at]
        # render json: @contracts, :except => [:updated_at, :created_at], :include => {:client => {:only => [:name]}}
    end

    def create
        contract = Contract.create(project_bid_id: params["bid_id"],freelancer_id: params["freelancer_id"], project_id: params["project_id"],client_id: params["client_id"])
        byebug
        
    end
end
