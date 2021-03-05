class Marketplace < ApplicationRecord
    has_many :clients
    has_many :freelancers
end
