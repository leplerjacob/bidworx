class CreateFreelancers < ActiveRecord::Migration[6.1]
  def change
    create_table :freelancers do |t|
      t.string :name
      t.string :username
      t.text :skills

      t.references :marketplace

      t.timestamps
    end
  end
end
