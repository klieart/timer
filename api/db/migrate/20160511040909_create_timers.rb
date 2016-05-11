class CreateTimers < ActiveRecord::Migration[5.0]
  def change
    create_table :timers do |t|
      t.references :timerable, polymorphic: true
      t.string :name
      t.integer :timer

      t.timestamps
    end
  end
end
