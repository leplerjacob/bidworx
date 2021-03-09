class ProjectBid < ApplicationRecord
    belongs_to :freelancer
    belongs_to :project
    has_one :contract
    
end
