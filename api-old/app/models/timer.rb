class Timer < ActiveRecord::Base
  belongs_to :user2timer, polymorphic: true
end
