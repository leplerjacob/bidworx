class Client < ApplicationRecord
    has_many :projects
    has_many :contracts
    belongs_to :marketplace
    has_many :freelancers, through: :contracts
end
