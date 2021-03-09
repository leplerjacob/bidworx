class ClientsController < ApplicationController
    def index
        @clients = Client.all
        render json: @clients
    end

    def show
        @client = Client.find(params[:id])
        render json: @client
    end

    def my_contracts
        @contracts = Client.find(params[:id]).contracts
        render json: @contracts, :except => [:updated_at], :include => [client: {only: :name}, freelancer: {only: [:name, :skills]}, project: {only: [:title, :description, :duration]}, project_bid: {only: :price}]
    end

    def create
        @client = Client.create(client_params)
        puts @client
        Marketplace.first.clients << @client
        if @client.valid? && @client.errors.empty?
            render json: {type: "success", message: "Account successfully created"}
        else
            errors = {type: "failure", message: []}
            @client.errors.each do |error|
                errors[:message] << {"#{error.attribute}".to_sym => error.full_message}
            end
            render json: errors
        end
    end


    private
        def client_params
            params.require(:client).permit(:name, :username);
        end

end
# params.require(:artist).permit(:name)