class CreateTimers < ActiveRecord::Migration
  def change
    create_table :timers do |t|
      t.references :user2timer, polymorphic: true, index: true
      t.string :name
      t.integer :timer

      t.timestamps null: false
    end
  end
end
