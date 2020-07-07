class CreateServices < ActiveRecord::Migration[5.0]
  def change
    create_table :services do |t|
      t.string :provider, null: false

      t.timestamps
    end
  end
end
