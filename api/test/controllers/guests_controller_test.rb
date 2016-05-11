require 'test_helper'

class GuestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @guest = guests(:one)
  end

  test "should get index" do
    get guests_url
    assert_response :success
  end

  test "should create guest" do
    assert_difference('Guest.count') do
      post guests_url, params: { guest: { token: @guest.token } }
    end

    assert_response 201
  end

  test "should show guest" do
    get guest_url(@guest)
    assert_response :success
  end

  test "should update guest" do
    patch guest_url(@guest), params: { guest: { token: @guest.token } }
    assert_response 200
  end

  test "should destroy guest" do
    assert_difference('Guest.count', -1) do
      delete guest_url(@guest)
    end

    assert_response 204
  end
end
