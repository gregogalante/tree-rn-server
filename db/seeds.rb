# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

25.times do |index|
  user_uuid = SecureRandom.uuid
  MatildaCore::User.create(
    uuid: user_uuid,
    username: "utente_#{index + 1}",
    name: 'Utente',
    surname: "Numero #{index + 1}",
    password: BCrypt::Password.create('Password1!')
  )

  MatildaCore::UserEmail.create(
    user_uuid: user_uuid,
    primary: true,
    confirmed: true,
    email: "utente_#{index + 1}@mail.com"
  )

  25.times do
    games = ['pokemon', 'supermario', 'minecraft']
    names = [Faker::Games::Pokemon.name, Faker::Games::SuperMario.character, Faker::Games::Minecraft.mob]
    i = [0, 1, 2].sample
    Card.create(
      name: names[i],
      game: games[i],
      description: Faker::Lorem.paragraphs,
      user_uuid: user_uuid
    )
  end
end
