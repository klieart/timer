class Guest < ActiveRecord::Base
  has_many :timers, :as => :user2timer
end
