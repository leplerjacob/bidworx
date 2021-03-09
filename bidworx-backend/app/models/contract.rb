class Contract < ApplicationRecord
    belongs_to :client
    belongs_to :freelancer
    belongs_to :project
    belongs_to :project_bid

    def created_at
        self[:created_at].to_date
    end
end
