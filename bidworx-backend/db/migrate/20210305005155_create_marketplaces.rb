class CreateMarketplaces < ActiveRecord::Migration[6.1]
  def change
    create_table :marketplaces do |t|

      t.timestamps
    end
  end
end
