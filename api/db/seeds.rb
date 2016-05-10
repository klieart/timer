# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Seeds.rb gets run when you run a rake task called db:seed
# rake db:seed # will run this script once...
# rake db:reset # will run rake db:drop db:create db:migrate db:seed

# We're creating default user accounts

# Guest Master Account
User.create(id: 0, email: "none@none.com", password: "password", password_confirmation: "password")
