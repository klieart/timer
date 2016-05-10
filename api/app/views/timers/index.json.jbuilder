json.array!(@timers) do |timer|
  json.extract! timer, :id, :user2timer_id, :user2timer_type, :name, :timer
  json.url timer_url(timer, format: :json)
end
