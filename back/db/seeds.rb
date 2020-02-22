# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
unless Service.exists?
  Service.create!(
    [
      {provider: 'twitter'},
      {provider: 'facebook'}
    ]
  )
end

unless Type.exists?
  Type.create!(
    [
      {name: 'email'},
      {name: 'phone_number'},
      {name: 'address'}
    ]
  )
end

unless Theme.exists?
  Theme.create!(
    [
      {
        name: 'デフォルト'
      },
      {
        name: 'しろにじ'
      },
      {
        name: 'くろ'
      },
      {
        name: 'あお'
      },
      {
        name: 'きいろ'
      },
      {
        name: 'あか'
      },
      {
        name: 'みどり'
      },
      {
        name: 'みずツートン'
      },
      {
        name: 'しずく'
      },
      {
        name: 'ビビット黒'
      },
      {
        name: 'ビビット'
      },
      {
        name: 'パソコン'
      },
      {
        name: 'いぬ'
      },
      {
        name: 'ねこ'
      },
      {
        name: 'あおぞら'
      },
      {
        name: 'こうもり'
      },
      {
        name: 'スプラッシュ'
      },
      {
        name: 'よるのほし'
      },
      {
        name: 'うみべ'
      },
      {
        name: 'タブ'
      },
      {
        name: '宝石'
      }
    ]
  )
end
