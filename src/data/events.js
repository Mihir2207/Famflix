// ------------------------------------------------------------------
// Your archive lives here.
//
// To add your own content later:
//   1. Drop photos/videos into  public/media/
//   2. Set `thumbnail` and/or `video` to '/media/<file-name>'
//
// Events without a thumbnail get a colour-gradient placeholder.
// ------------------------------------------------------------------

export const categories = [
  { id: 'family', title: 'Family Get-Togethers' },
  { id: 'festivals', title: 'Festivals & Celebrations' },
  { id: 'society', title: 'Society Meetups' },
  { id: 'friends', title: 'Friends' },
  { id: 'trips', title: 'Trips & Vacations' },
  { id: 'milestones', title: 'Birthdays & Milestones' },
]

export const events = [
  // Family
  { id: 1, category: 'family', title: 'Sunday Lunch at Aaji’s', year: 2025, location: 'Pune', description: 'The whole family around one table — three generations, endless stories and way too much food.', thumbnail: null, video: null, featured: true },
  { id: 2, category: 'family', title: 'Cousins Reunion', year: 2024, location: 'Nashik', description: 'First time in ten years that every cousin made it under one roof.', thumbnail: null, video: null },
  { id: 3, category: 'family', title: 'New Home Griha Pravesh', year: 2023, location: 'Mumbai', description: 'Welcoming everyone into the new house with a small puja and a big dinner.', thumbnail: null, video: null },
  { id: 4, category: 'family', title: 'Grandparents’ 50th Anniversary', year: 2022, location: 'Pune', description: 'Fifty years together — speeches, old photographs and happy tears.', thumbnail: null, video: null },
  { id: 5, category: 'family', title: 'Monsoon Picnic', year: 2021, location: 'Lonavala', description: 'Rain, bhajiyas and a very muddy game of cricket.', thumbnail: null, video: null },

  { id: 6, category: 'family', title: 'Aaji’s 80th Birthday Lunch', year: 2026, location: 'Pune', description: 'Eighty candles, one very proud Aaji and a surprise video from the grandkids.', thumbnail: null, video: null },
  { id: 7, category: 'family', title: 'Lockdown Video Calls', year: 2020, location: 'Online', description: 'Sunday evening calls with every household on one screen — and someone always on mute.', thumbnail: null, video: null },
  { id: 8, category: 'family', title: 'Baby Shower (Dohale Jevan)', year: 2019, location: 'Thane', description: 'Green sarees, a flower swing and lots of blessings.', thumbnail: null, video: null },

  // Festivals
  { id: 10, category: 'festivals', title: 'Diwali 2025', year: 2025, location: 'Home', description: 'Rangoli, diyas, faral and fireworks on the terrace.', thumbnail: null, video: null },
  { id: 11, category: 'festivals', title: 'Ganesh Chaturthi', year: 2025, location: 'Home', description: 'Ten days of aartis, modaks and the emotional visarjan.', thumbnail: null, video: null },
  { id: 12, category: 'festivals', title: 'Holi Colours', year: 2024, location: 'Society Ground', description: 'Everyone ended up the same shade of pink.', thumbnail: null, video: null },
  { id: 13, category: 'festivals', title: 'Navratri Garba Nights', year: 2024, location: 'Community Hall', description: 'Nine nights of dandiya and dressing up.', thumbnail: null, video: null },
  { id: 14, category: 'festivals', title: 'Makar Sankranti Kites', year: 2023, location: 'Rooftop', description: 'Til-gul and a sky full of kites.', thumbnail: null, video: null },
  { id: 15, category: 'festivals', title: 'Christmas Potluck', year: 2023, location: 'Neighbours’', description: 'A cake competition that nobody officially won.', thumbnail: null, video: null },

  { id: 16, category: 'festivals', title: 'Gudi Padwa', year: 2026, location: 'Home', description: 'Raising the gudi, shrikhand-puri and the new year’s first family photo.', thumbnail: null, video: null },
  { id: 17, category: 'festivals', title: 'Diya-Only Diwali', year: 2020, location: 'Home', description: 'A quiet, cracker-free Diwali with home-made faral and a balcony full of diyas.', thumbnail: null, video: null },
  { id: 18, category: 'festivals', title: 'Raksha Bandhan', year: 2021, location: 'Nashik', description: 'Rakhis, gifts and the yearly sibling negotiation over chocolates.', thumbnail: null, video: null },
  { id: 19, category: 'festivals', title: 'Ganpati Mandal Decoration', year: 2019, location: 'Society Hall', description: 'Two weeks building an eco-friendly thermocol-free makhar.', thumbnail: null, video: null },

  // Society
  { id: 20, category: 'society', title: 'Annual Society Day', year: 2025, location: 'Clubhouse', description: 'Performances by the kids, prizes and a buffet.', thumbnail: null, video: null },
  { id: 21, category: 'society', title: 'Independence Day Flag Hoisting', year: 2025, location: 'Society Garden', description: 'Morning flag hoisting followed by chai and samosas.', thumbnail: null, video: null },
  { id: 22, category: 'society', title: 'Tree Plantation Drive', year: 2024, location: 'Society Compound', description: '100 saplings planted by residents of all ages.', thumbnail: null, video: null },
  { id: 23, category: 'society', title: 'Society Cricket League', year: 2023, location: 'Ground', description: 'Wing A vs Wing B — the rivalry continues.', thumbnail: null, video: null },

  { id: 24, category: 'society', title: 'Republic Day Marathon', year: 2026, location: 'Society Road', description: 'A 5 km fun run — the uncles walked, the kids sprinted.', thumbnail: null, video: null },
  { id: 25, category: 'society', title: 'Vaccination Camp Volunteers', year: 2021, location: 'Clubhouse', description: 'Residents helping run the society vaccination drive.', thumbnail: null, video: null },
  { id: 26, category: 'society', title: 'Society Talent Show', year: 2019, location: 'Clubhouse', description: 'Magic tricks, mimicry and a surprisingly good uncle band.', thumbnail: null, video: null },

  // Friends
  { id: 30, category: 'friends', title: 'College Batch Reunion', year: 2025, location: 'Bengaluru', description: 'Fifteen years later and the same inside jokes.', thumbnail: null, video: null },
  { id: 31, category: 'friends', title: 'Game Night', year: 2024, location: 'Home', description: 'Board games, pizza and one very competitive round of Uno.', thumbnail: null, video: null },
  { id: 32, category: 'friends', title: 'Beach Bonfire', year: 2023, location: 'Alibaug', description: 'Guitar, stars and marshmallows.', thumbnail: null, video: null },
  { id: 33, category: 'friends', title: 'School Friends Meetup', year: 2022, location: 'Pune', description: 'Back to the old canteen after twenty years.', thumbnail: null, video: null },

  { id: 34, category: 'friends', title: 'Monsoon Trek to Rajmachi', year: 2026, location: 'Rajmachi', description: 'Waterfalls, fog and a lot of slipping on the way down.', thumbnail: null, video: null },
  { id: 35, category: 'friends', title: 'Online Quiz Nights', year: 2020, location: 'Online', description: 'Weekly quiz battles that got far too competitive.', thumbnail: null, video: null },
  { id: 36, category: 'friends', title: 'Office Gang Farewell', year: 2021, location: 'Mumbai', description: 'Saying goodbye to the team that made Mondays bearable.', thumbnail: null, video: null },

  // Trips
  { id: 40, category: 'trips', title: 'Road Trip to Goa', year: 2025, location: 'Goa', description: 'Two cars, one playlist and a lot of stops for vada pav.', thumbnail: null, video: null },
  { id: 41, category: 'trips', title: 'Himalayan Getaway', year: 2024, location: 'Manali', description: 'Snow for the first time for the little ones.', thumbnail: null, video: null },
  { id: 42, category: 'trips', title: 'Kerala Backwaters', year: 2022, location: 'Alleppey', description: 'A houseboat, slow days and endless coconut water.', thumbnail: null, video: null },

  { id: 43, category: 'trips', title: 'Rajasthan Heritage Tour', year: 2026, location: 'Jaipur & Udaipur', description: 'Forts, palaces, dal-baati and a camel ride nobody will forget.', thumbnail: null, video: null },
  { id: 44, category: 'trips', title: 'Coorg Coffee Estate Stay', year: 2023, location: 'Coorg', description: 'Misty mornings and fresh filter coffee at the plantation.', thumbnail: null, video: null },
  { id: 45, category: 'trips', title: 'Mahabaleshwar Strawberry Trip', year: 2021, location: 'Mahabaleshwar', description: 'Strawberries with cream and a boat ride at Venna Lake.', thumbnail: null, video: null },
  { id: 46, category: 'trips', title: 'Singapore Family Holiday', year: 2019, location: 'Singapore', description: 'Universal Studios, the Night Safari and Gardens by the Bay.', thumbnail: null, video: null },

  // Milestones
  { id: 50, category: 'milestones', title: 'Aarav’s 1st Birthday', year: 2025, location: 'Home', description: 'Cake smash, balloons and a very sleepy birthday boy.', thumbnail: null, video: null },
  { id: 51, category: 'milestones', title: 'Graduation Day', year: 2024, location: 'University', description: 'Caps in the air — the whole family cheered.', thumbnail: null, video: null },
  { id: 52, category: 'milestones', title: 'Wedding Sangeet', year: 2023, location: 'Banquet Hall', description: 'Months of dance rehearsals for one unforgettable night.', thumbnail: null, video: null },
  { id: 53, category: 'milestones', title: 'Dad’s Retirement Party', year: 2022, location: 'Home', description: '35 years of work, celebrated with friends and family.', thumbnail: null, video: null },
  { id: 54, category: 'milestones', title: 'Riya’s First Day at School', year: 2026, location: 'School Gate', description: 'A new uniform, a big backpack and only a few tears (mostly Mum’s).', thumbnail: null, video: null },
  { id: 55, category: 'milestones', title: 'First Car Pooja', year: 2021, location: 'Temple', description: 'Coconut, garlands and the first drive around the block.', thumbnail: null, video: null },
  { id: 56, category: 'milestones', title: 'Engagement Ceremony', year: 2019, location: 'Pune', description: 'Rings exchanged, families united and a lot of photos.', thumbnail: null, video: null },
]
