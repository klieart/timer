class RegistrationsController < Devise::RegistrationsController
  after_action :setup_account, only: :create

  private

  def setup_account
    return unless resource.persisted?
    guest_user.timers.each do |timer|
      timer.user = resource
      timer.save
    end
  end
end
