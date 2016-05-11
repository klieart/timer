class Guest < ApplicationRecord
  has_many :timers, :as => :timerable
end
