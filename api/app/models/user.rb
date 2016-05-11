class User < ApplicationRecord
  has_many :timers, :as => :timerable
end
