class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|

      t.string :title
      t.text :skills
      t.text :description
      t.string :duration

      t.references :freelancers
      t.references :clients

      t.timestamps
    end
  end
end
