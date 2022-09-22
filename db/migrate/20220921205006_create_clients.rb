class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.integer :age
      t.string :date_of_birth
      t.string :address
      t.string :phone
      t.string :email
      t.string :medical_history

      t.timestamps
    end
  end
end
