require 'test_helper'

class TimersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @timer = timers(:one)
  end

  test "should get index" do
    get timers_url
    assert_response :success
  end

  test "should create timer" do
    assert_difference('Timer.count') do
      post timers_url, params: { timer: { name: @timer.name, timer: @timer.timer, timerable_id: @timer.timerable_id, timerable_type: @timer.timerable_type } }
    end

    assert_response 201
  end

  test "should show timer" do
    get timer_url(@timer)
    assert_response :success
  end

  test "should update timer" do
    patch timer_url(@timer), params: { timer: { name: @timer.name, timer: @timer.timer, timerable_id: @timer.timerable_id, timerable_type: @timer.timerable_type } }
    assert_response 200
  end

  test "should destroy timer" do
    assert_difference('Timer.count', -1) do
      delete timer_url(@timer)
    end

    assert_response 204
  end
end
