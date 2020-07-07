class CreateSocialProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :social_profiles do |t|
      t.string :uid, null: false
      t.string :name
      t.string :nickname
      t.string :email
      t.string :image_url
      t.string :description
      t.string :url
      t.string :raw_info
      t.string :credentials, null: false
      t.string :access_token, null: false
      t.string :access_secret, null: false
      t.references :user, foreign_key: true, null: false
      t.references :service, foreign_key: true, null: false

      t.timestamps
    end
  end
end

