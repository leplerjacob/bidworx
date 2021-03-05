class Client < ApplicationRecord
    has_many :projects
    has_many :freelancers, through: :projects
end
