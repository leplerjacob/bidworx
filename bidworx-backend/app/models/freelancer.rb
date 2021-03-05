class Freelancer < ApplicationRecord
    has_many :projects
    has_many :clients, through: :projects
    has_many :project_bids
    
end
