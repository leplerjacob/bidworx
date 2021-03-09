class Freelancer < ApplicationRecord
    has_many :contracts
    has_many :project_bids
    belongs_to :marketplace
    has_many :clients, through: :contracts
    
    # def updateStatus
    # end
end
