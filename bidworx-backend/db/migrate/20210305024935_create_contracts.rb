class CreateContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :contracts do |t|
      t.string :status, default: "in progress"

      t.references :client
      t.references :freelancer
      t.references :project
      t.references :project_bid

      t.timestamps
    end
  end
end
