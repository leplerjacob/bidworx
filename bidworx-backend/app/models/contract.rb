class Contract < ApplicationRecord
    belongs_to :client
    belongs_to :freelancer
    belongs_to :project
    belongs_to :project_bid
end
