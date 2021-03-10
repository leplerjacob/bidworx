class Project < ApplicationRecord
    belongs_to :client
    has_many :project_bids

    def created_at
        self[:created_at].to_date
    end

    def updated_at
        self[:updated_at].to_date
    end
end
