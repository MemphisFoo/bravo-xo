# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding pronouns 🧍‍♀️🧍🧍‍♂️"
p1 = Pronoun.create(preference: "He/Him")
p2 = Pronoun.create(preference: "She/Her")
p3 = Pronoun.create(preference: "Them/They")

puts "complete!"

puts "seeding sexualities 👩‍❤️‍👨 👩‍❤️‍👩 👨‍❤️‍👨"
s1 = Sexuality.create(choose: "Straight")
s2 = Sexuality.create(choose: "Lesbian")
s3 = Sexuality.create(choose: "Gay")
s4 = Sexuality.create(choose: "Bisexual")
s5 = Sexuality.create(choose: "Trans")
s6 = Sexuality.create(choose: "Non-Binary")

puts "complete!"
puts "creating shows 📺"
t1 = Show.create(title: "Real Housewives of Atlanta", acronymn: "RHOA")
t2 = Show.create(title: "Real Housewives of Beverly Hills", acronymn: "RHOBH")
t3 = Show.create(title: "Real Housewives of New York", acronymn: "RHONY")
t4 = Show.create(title: "Real Housewives of Orange County", acronymn: "RHOOC")
t5 = Show.create(title: "Real Housewives of Salt Lake City", acronymn: "RHOSLC")
t6 = Show.create(title: "Vanderpump Rules", acronymn: "VPR")
t7 = Show.create(title: "Below Deck", acronymn: "BD")
t8 = Show.create(title: "Below Deck Mediterranean", acronymn: "BDM")
t9 = Show.create(title: "Summer House", acronymn: "SH")
t10 = Show.create(title: "Million Dollar Listing New York", acronymn: "MDLNY")
t11 = Show.create(title: "Million Dollar Listing Los Angeles", acronymn: "MDLLA")
puts "complete!"

puts "seeding users 🗑"
u1 = User.create(username: "HammerBaby9", email: "hb9@gmail.com", password: "HB9ine")
u2 = User.create(username: "MemphisFoo", email: "mf@gmail.com", password: "MF85")
u3 = User.create(username: "TayMay", email: "taylor@masecap.com", password: "MasCap1")
u4 = User.create(username: "GiveThemLala", email: "lala@vdpr.com", password: "0ce@N")
u5 = User.create(username: "RandyMcRandRand", email: "randall@oasis.com", password: "DB1000")
u6 = User.create(username: "IMayNeedToSeeTheBooty", email: "iamgarbage@maroon5.com", password: "Mrn5")
u7 = User.create(username: "DelegateDanica", email: "danica@va.gov", password: "VA4lv")
u8 = User.create(username: "Chazi-B", email: "chaz@gmail.com", password: "Igotub@be")
u9 = User.create(username: "LisaChoc", email: "lisa@gmail.com", password: "waterfall")
puts "Complete!"
puts "seeding profiles"
pf1 = Profile.create(first_name: "Graham", last_name: "Price",
                     bio: "Bravo Country, let's ride!", user_id: u1.id,
                     show_id: t1.id, sexuality_id: s1.id, pronoun_id: p1.id)
pf2 = Profile.create(first_name: "Christian", last_name: "Trublet",
                     bio: "It's not about the f**king pasta!", user_id: u2.id,
                     show_id: t2.id, sexuality_id: s1.id, pronoun_id: p1.id)
pf3 = Profile.create(first_name: "Asia", last_name: "Dillon",
                     bio: "Started from the bottom now we here", user_id: u3.id,
                     show_id: t3.id, sexuality_id: s6.id, pronoun_id: p3.id)
pf4 = Profile.create(first_name: "Lala", last_name: "Kent",
                     bio: "It's true what they say about how you lose your partner", user_id: u4.id,
                     show_id: t6.id, sexuality_id: s1.id, pronoun_id: p2.id)
pf5 = Profile.create(first_name: "Randall", last_name: "Emmet",
                     bio: "Fofty, please", user_id: u5.id,
                     show_id: t6.id, sexuality_id: s1.id, pronoun_id: p1.id)
pf6 = Profile.create(first_name: "Adam", last_name: "Levine",
                     bio: "By the time you read this, Behati has probably left me. DEAD serious. 🤷🏻‍♂️", user_id: u6.id,
                     show_id: t9.id, sexuality_id: s1.id, pronoun_id: p1.id)
pf7 = Profile.create(first_name: "Danica", last_name: "Roem",
                     bio: "First out transgender person to be elected to the Virgina general assembly.", user_id: u7.id,
                     show_id: t8.id, sexuality_id: s5.id, pronoun_id: p2.id)
pf8 = Profile.create(first_name: "Chaz", last_name: "Bono",
                     bio: "🎶Do you believe in love after...🎶 You know what, never mind.", user_id: u8.id,
                     show_id: t8.id, sexuality_id: s5.id, pronoun_id: p1.id)
pf9 = Profile.create(first_name: "Lisa", last_name: "Trublet",
                     bio: "I'm only here because my husband made this app 🙄 I'll block you.", user_id: u9.id,
                     show_id: t2.id, sexuality_id: s1.id, pronoun_id: p2.id)

puts "Complete!"
# UserSexuality.create(user_id: u1.id, user_sexuality: s1.id.id)
# UserSexuality.create(user_id: u2.id, sexuality_id: s1.id)
# UserSexuality.create(user_id: u3.id, sexuality_id: s6.id)
# UserSexuality.create(user_id: u4.id, sexuality_id: s4.id)
# UserSexuality.create(user_id: u5.id, sexuality_id: s1.id)
# UserSexuality.create(user_id: u6.id, sexuality_id: s1.id)
# UserSexuality.create(user_id: u7.id, sexuality_id: s5.id)
# UserSexuality.create(user_id: u8.id, sexuality_id: s5.id)
# UserSexuality.create(user_id: u9.id, sexuality_id: s4.id)
puts "✨It's all happening✨"
