class CreateContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :contracts do |t|

      t.references :client
      t.references :freelancer
      t.references :project

      t.timestamps
    end
  end
end
