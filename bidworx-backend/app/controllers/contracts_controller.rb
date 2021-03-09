class ContractsController < ApplicationController
    def index
        @contracts = Contract.all
        render json: @contracts, :except => [:updated_at, :created_at]
        # render json: @contracts, :except => [:updated_at, :created_at], :include => {:client => {:only => [:name]}}
    end
end
