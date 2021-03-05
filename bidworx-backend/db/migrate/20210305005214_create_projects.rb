class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|

      t.string :title
      t.text :skills
      t.text :description
      t.string :duration

      t.references :client

      t.timestamps
    end
  end
end
