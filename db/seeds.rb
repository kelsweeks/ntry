CaseManager.destroy_all
Appointment.destroy_all
Client.destroy_all


puts "🦸‍♀️ Seeding Case Managers..."
cm1 = CaseManager.create(name: "Kelsey Weeks", email: "kelsey@gmail.com", password: "123")
cm2 = CaseManager.create(name: "Emily Neill", email: "emily@gmail.com", password: "123")
cm3 = CaseManager.create(name: "Joshua Glenn", email: "joshua@gmail.com", password: "123")


puts "🦸‍♀️ Seeding Clients..."
c1 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: + , Heart Failure and Diabetes")
c2 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: - , Heart Attack 6 months ago - appointment in November.")
c3 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: + , Pulmocare added to patient resources")
c4 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: + , drug abuse in past- housed at Alethia House currently")
c5 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: - , no call no show last 3 appointments")
c6 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: - , needs transport voucher renewed for appointment")
c7 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: - , Gas voucher available if required")
c8 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: - , no call no show last 3 appointments")
c9 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: - , currently experiencing housing insecurity")
c10 = Client.create(name: Faker::Name.name, age: rand(18..81), date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), address: Faker::Address.full_address, phone: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, medical_history: "Status: - , need information on next of kin for records")


puts "🦸‍♀️ Seeding Appointments..."
Appointment.create([
    { date: Faker::Date.forward(days: 50), description: "agenda for appointment", case_manager_id:cm1.id, client_id:c1.id},
    { date: Faker::Date.forward(days: 50), description: "agenda for appointment", case_manager_id:cm2.id, client_id:c2.id},
    { date: Faker::Date.forward(days: 50), description: "agenda for appointment", case_manager_id:cm3.id, client_id:c3.id},
    { date: Faker::Date.forward(days: 50), description: "agenda for appointment", case_manager_id:cm1.id, client_id:c4.id},
    { date: Faker::Date.forward(days: 50), description: "agenda for appointment", case_manager_id:cm2.id, client_id:c5.id},
])

puts "🦸‍♀️ Done seeding!"
    

# Client.create([
#   { name: "Kamala Khan", super_name: "Ms. Marvel" },
#   { name: "Doreen Green", super_name: "Squirrel Girl" },
#   { name: "Gwen Stacy", super_name: "Spider-Gwen" },
#   { name: "Janet Van Dyne", super_name: "The Wasp" },
#   { name: "Wanda Maximoff", super_name: "Scarlet Witch" },
#   { name: "Carol Danvers", super_name: "Captain Marvel" },
#   { name: "Jean Grey", super_name: "Dark Phoenix" },
#   { name: "Ororo Munroe", super_name: "Storm" },
#   { name: "Kitty Pryde", super_name: "Shadowcat" },
#   { name: "Elektra Natchios", super_name: "Elektra" }
# ])

# 10.times do |i|
#     Client.create(
#         name: Faker::Name.name,
#         age: rand(18..81)
#         date_of_birth: Faker::Date.forward(days: 50),
#         address: Faker::Address.full_address,
#         phone: Faker::PhoneNumber.cell_phone,
#         email: Faker::Internet.email,
#         medical_history: "Status: + , History: Heart Failure and Diabetes"
#     )
# end