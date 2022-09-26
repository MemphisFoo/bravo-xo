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
t1 = Show.create(title: "Real Housewives of Atlanta")
t2 = Show.create(title: "Real Housewives of Beverly Hills")
t3 = Show.create(title: "Real Housewives of New York")
t4 = Show.create(title: "Real Housewives of Orange County")
t5 = Show.create(title: "Real Housewives of Salt Lake City")
t6 = Show.create(title: "Vanderpump Rules")
t7 = Show.create(title: "Below Deck")
t8 = Show.create(title: "Below Deck Mediterranean")
t9 = Show.create(title: "Summer House")
t10 = Show.create(title: "Southern Charm")
t11 = Show.create(title: "Married To Medicine")
puts "complete!"

puts "seeding users 🗑"
u1=User.create([{username:"HammerBaby9", email:"hb9@gmail.com", password:"HB9ine"}])
u2=User.create([{username:"MemphisFoo", email:"mf@gmail.com", password:"MF85"}])
u3=User.create([{username:"TayMay", email:"taylor@masecap.com", password:"MasCap1"}])
u4=User.create([{username:"GiveThemLala", email:"lala@vdpr.com", password:"0ce@N"}])
u5=User.create([{username:"RandyMcRandRand", email: "randall@oasis.com", password:"DB1000"}])
u6=User.create([{username:"IMayNeedToSeeTheBooty", email:"iamgarbage@maroon5.com", password:"Mrn5"}])
u7=User.create([{username:"DelegateDanica", email:"danica@va.gov", password:"VA4lv"}])
u8=User.create([{username:"Chazi-B", email:"chaz@gmail.com", password:"Igotub@be"}])
u9=User.create([{username:"LisaChoc", email: "lisa@gmail.com", password:"waterfall"}]);
puts "Complete!"
puts "seeding profiles"
pf1=Profile.create([{first_name: "Graham", last_name: "Price", profile_photo: "https://thumbs.dreamstime.com/b/child-hammer-12360121.jpg", 
    bio: "Bravo Country, let's ride!", show_id: t1.id, sexuality_id:s1.id, pronoun_id:p1.id}])
pf2=Profile.create([{first_name: "Christian", last_name: "Trublet", profile_photo: "http://www.jermainerogers.com/wp-content/uploads/11_foomotor2.jpg", 
    bio: "It's not about the f**king pasta!", show_id: t2.id,sexuality_id: s1.id, pronoun_id: p1.id}])
pf3=Profile.create([{first_name: "Asia", last_name: "Dillon", profile_photo: "https://i.guim.co.uk/img/media/8cd88a8e30dcf4c4d2a2fb9ad7e4b5fe5fec33b7/0_0_4388_2633/master/4388.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=227ba9f78f03518307b0409e635f92db", 
    bio: "Started from the bottom now we here", show_id: t3.id,sexuality_id: s6.id, pronoun_id: p3.id  }])
pf4=Profile.create([{first_name: "Lala", last_name: "Kent", profile_photo: "https://www.the-sun.com/wp-content/uploads/sites/6/2022/03/unnamed-1-12.jpg", 
    bio: "It's true what they say about how you lose your partner", show_id: t6.id, sexuality_id: s1.id, pronoun_id: p2.id}])
pf5=Profile.create([{first_name: "Randall", last_name: "Emmet", profile_photo: "https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/KB_COMP_Emmett-Randall-1.jpg", 
    bio: "Fofty, please", show_id: t6.id, sexuality_id: s1.id, pronoun_id: p1.id}])
pf6=Profile.create([{first_name: "Adam", last_name: "Levine", profile_photo: "https://pbs.twimg.com/media/EF-H0FhU8AIlnV7.jpg", 
    bio: "By the time you read this, Behati has probably left me. DEAD serious. 🤷🏻‍♂️", show_id: t9.id, 
    sexuality_id: s1.id, pronoun_id: p1.id,}])
pf7=Profile.create([{first_name: "Danica", last_name: "Roem", profile_photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/2017.07.26_Protest_Trans_Military_Ban%2C_White_House%2C_Washington_DC_USA_7684_%2836056856301%29_%28cropped%29.jpg/220px-2017.07.26_Protest_Trans_Military_Ban%2C_White_House%2C_Washington_DC_USA_7684_%2836056856301%29_%28cropped%29.jpg", 
    bio: "First out transgender person to be elected to the Virgina general assembly.", show_id: t8.id, sexuality_id: s5.id, pronoun_id: p2.id}])
pf8=Profile.create([{first_name: "Chaz", last_name: "Bono", profile_photo: "https://m.media-amazon.com/images/M/MV5BMDY4YzliNzUtNjVmZC00YmJmLTgwYzEtYjAxOGZiNTJjNjc3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg", 
    bio: "🎶Do you believe in love after...🎶 You know what, never mind.", show_id: t8.id, sexuality_id: s5.id, pronoun_id: p1.id}])
pf9=Profile.create([{first_name: "Lisa", last_name: "Trublet", profile_photo: "https://i.pinimg.com/280x280_RS/8a/aa/c3/8aaac31289c00ab555501014642a976d.jpg", 
    bio: "I'm only here because my husband made this app 🙄 I'll block you.", show_id: t2.id, sexuality_id: s1.id, pronoun_id: p2.id}])

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