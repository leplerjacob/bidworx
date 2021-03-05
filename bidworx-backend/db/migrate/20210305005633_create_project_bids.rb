class CreateProjectBids < ActiveRecord::Migration[6.1]
  def change
    create_table :project_bids do |t|

      t.float :price
      t.datetime :drop_date

      t.references :freelancers
      t.references :projects

      t.timestamps
    end
  end
end
