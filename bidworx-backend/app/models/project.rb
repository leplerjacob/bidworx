class Project < ApplicationRecord
    belongs_to :client
    belongs_to :freelancer
end
