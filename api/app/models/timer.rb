class Timer < ApplicationRecord
  belongs_to :timerable, polymorphic: true
end
