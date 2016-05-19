class User < ApplicationRecord
  has_many :timers, :as => :timerable
  
  has_secure_password

  validates :email, :password_digest, presence: true
  validates :email, uniqueness: { case_sensitive: false }

  validates :password, length: { minimum: 5 }

  # ToDo: Roles for registered users:
  # def is_standard?
  #   self.id_role == 1
  # end
  #
  # def is_admin?
  #   self.id_role == 2
  # end

end
