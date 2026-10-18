// ------------------------------------------------------------------
// Your archive lives here.
//
// To add your own content later:
//   1. Drop photos/videos into  public/media/
//   2. Set `thumbnail` and/or `video` to '/media/<file-name>'
//
// Events without a thumbnail get a colour-gradient placeholder.
//
// The current photos/videos are freely-licensed placeholders from
// Wikimedia Commons — see public/media/CREDITS.html for attribution.
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
  { id: 1, category: 'family', title: 'Sunday Lunch at Aaji’s', year: 2025, location: 'Pune', description: 'The whole family around one table — three generations, endless stories and way too much food.', thumbnail: '/media/event-1.jpg', video: '/media/event-1.mp4', featured: true },
  { id: 2, category: 'family', title: 'Cousins Reunion', year: 2024, location: 'Nashik', description: 'First time in ten years that every cousin made it under one roof.', thumbnail: '/media/event-2.jpg', video: '/media/event-2.mp4' },
  { id: 3, category: 'family', title: 'New Home Griha Pravesh', year: 2023, location: 'Mumbai', description: 'Welcoming everyone into the new house with a small puja and a big dinner.', thumbnail: '/media/event-3.jpg', video: '/media/event-3.mp4' },
  { id: 4, category: 'family', title: 'Grandparents’ 50th Anniversary', year: 2022, location: 'Pune', description: 'Fifty years together — speeches, old photographs and happy tears.', thumbnail: '/media/event-4.jpg', video: '/media/event-4.mp4' },
  { id: 5, category: 'family', title: 'Monsoon Picnic', year: 2021, location: 'Lonavala', description: 'Rain, bhajiyas and a very muddy game of cricket.', thumbnail: '/media/event-5.jpg', video: '/media/event-5.mp4' },

  { id: 6, category: 'family', title: 'Aaji’s 80th Birthday Lunch', year: 2026, location: 'Pune', description: 'Eighty candles, one very proud Aaji and a surprise video from the grandkids.', thumbnail: '/media/event-6.jpg', video: '/media/event-6.mp4' },
  { id: 7, category: 'family', title: 'Lockdown Video Calls', year: 2020, location: 'Online', description: 'Sunday evening calls with every household on one screen — and someone always on mute.', thumbnail: '/media/event-7.jpg', video: '/media/event-7.mp4' },
  { id: 8, category: 'family', title: 'Baby Shower (Dohale Jevan)', year: 2019, location: 'Thane', description: 'Green sarees, a flower swing and lots of blessings.', thumbnail: '/media/event-8.jpg', video: '/media/event-8.mp4' },

  // Festivals
  { id: 10, category: 'festivals', title: 'Diwali 2025', year: 2025, location: 'Home', description: 'Rangoli, diyas, faral and fireworks on the terrace.', thumbnail: '/media/event-10.jpg', video: '/media/event-10.mp4' },
  { id: 11, category: 'festivals', title: 'Ganesh Chaturthi', year: 2025, location: 'Home', description: 'Ten days of aartis, modaks and the emotional visarjan.', thumbnail: '/media/event-11.jpg', video: '/media/event-11.mp4' },
  { id: 12, category: 'festivals', title: 'Holi Colours', year: 2024, location: 'Society Ground', description: 'Everyone ended up the same shade of pink.', thumbnail: '/media/event-12.jpg', video: '/media/event-12.mp4' },
  { id: 13, category: 'festivals', title: 'Navratri Garba Nights', year: 2024, location: 'Community Hall', description: 'Nine nights of dandiya and dressing up.', thumbnail: '/media/event-13.jpg', video: '/media/event-13.mp4' },
  { id: 14, category: 'festivals', title: 'Makar Sankranti Kites', year: 2023, location: 'Rooftop', description: 'Til-gul and a sky full of kites.', thumbnail: '/media/event-14.jpg', video: '/media/event-14.mp4' },
  { id: 15, category: 'festivals', title: 'Christmas Potluck', year: 2023, location: 'Neighbours’', description: 'A cake competition that nobody officially won.', thumbnail: '/media/event-15.jpg', video: '/media/event-15.mp4' },

  { id: 16, category: 'festivals', title: 'Gudi Padwa', year: 2026, location: 'Home', description: 'Raising the gudi, shrikhand-puri and the new year’s first family photo.', thumbnail: '/media/event-16.jpg', video: '/media/event-16.mp4' },
  { id: 17, category: 'festivals', title: 'Diya-Only Diwali', year: 2020, location: 'Home', description: 'A quiet, cracker-free Diwali with home-made faral and a balcony full of diyas.', thumbnail: '/media/event-17.jpg', video: '/media/event-17.mp4' },
  { id: 18, category: 'festivals', title: 'Raksha Bandhan', year: 2021, location: 'Nashik', description: 'Rakhis, gifts and the yearly sibling negotiation over chocolates.', thumbnail: '/media/event-18.jpg', video: '/media/event-18.mp4' },
  { id: 19, category: 'festivals', title: 'Ganpati Mandal Decoration', year: 2019, location: 'Society Hall', description: 'Two weeks building an eco-friendly thermocol-free makhar.', thumbnail: '/media/event-19.jpg', video: '/media/event-19.mp4' },

  // Society
  { id: 20, category: 'society', title: 'Annual Society Day', year: 2025, location: 'Clubhouse', description: 'Performances by the kids, prizes and a buffet.', thumbnail: '/media/event-20.jpg', video: '/media/event-20.mp4' },
  { id: 21, category: 'society', title: 'Independence Day Flag Hoisting', year: 2025, location: 'Society Garden', description: 'Morning flag hoisting followed by chai and samosas.', thumbnail: '/media/event-21.jpg', video: '/media/event-21.mp4' },
  { id: 22, category: 'society', title: 'Tree Plantation Drive', year: 2024, location: 'Society Compound', description: '100 saplings planted by residents of all ages.', thumbnail: '/media/event-22.jpg', video: '/media/event-22.mp4' },
  { id: 23, category: 'society', title: 'Society Cricket League', year: 2023, location: 'Ground', description: 'Wing A vs Wing B — the rivalry continues.', thumbnail: '/media/event-23.jpg', video: '/media/event-23.mp4' },

  { id: 24, category: 'society', title: 'Republic Day Marathon', year: 2026, location: 'Society Road', description: 'A 5 km fun run — the uncles walked, the kids sprinted.', thumbnail: '/media/event-24.jpg', video: '/media/event-24.mp4' },
  { id: 25, category: 'society', title: 'Vaccination Camp Volunteers', year: 2021, location: 'Clubhouse', description: 'Residents helping run the society vaccination drive.', thumbnail: '/media/event-25.jpg', video: '/media/event-25.mp4' },
  { id: 26, category: 'society', title: 'Society Talent Show', year: 2019, location: 'Clubhouse', description: 'Magic tricks, mimicry and a surprisingly good uncle band.', thumbnail: '/media/event-26.jpg', video: '/media/event-26.mp4' },

  // Friends
  { id: 30, category: 'friends', title: 'College Batch Reunion', year: 2025, location: 'Bengaluru', description: 'Fifteen years later and the same inside jokes.', thumbnail: '/media/event-30.jpg', video: '/media/event-30.mp4' },
  { id: 31, category: 'friends', title: 'Game Night', year: 2024, location: 'Home', description: 'Board games, pizza and one very competitive round of Uno.', thumbnail: '/media/event-31.jpg', video: '/media/event-31.mp4' },
  { id: 32, category: 'friends', title: 'Beach Bonfire', year: 2023, location: 'Alibaug', description: 'Guitar, stars and marshmallows.', thumbnail: '/media/event-32.jpg', video: '/media/event-32.mp4' },
  { id: 33, category: 'friends', title: 'School Friends Meetup', year: 2022, location: 'Pune', description: 'Back to the old canteen after twenty years.', thumbnail: '/media/event-33.jpg', video: '/media/event-33.mp4' },

  { id: 34, category: 'friends', title: 'Monsoon Trek to Rajmachi', year: 2026, location: 'Rajmachi', description: 'Waterfalls, fog and a lot of slipping on the way down.', thumbnail: '/media/event-34.jpg', video: '/media/event-34.mp4' },
  { id: 35, category: 'friends', title: 'Online Quiz Nights', year: 2020, location: 'Online', description: 'Weekly quiz battles that got far too competitive.', thumbnail: '/media/event-35.jpg', video: '/media/event-35.mp4' },
  { id: 36, category: 'friends', title: 'Office Gang Farewell', year: 2021, location: 'Mumbai', description: 'Saying goodbye to the team that made Mondays bearable.', thumbnail: '/media/event-36.jpg', video: '/media/event-36.mp4' },

  // Trips
  { id: 40, category: 'trips', title: 'Road Trip to Goa', year: 2025, location: 'Goa', description: 'Two cars, one playlist and a lot of stops for vada pav.', thumbnail: '/media/event-40.jpg', video: '/media/event-40.mp4' },
  { id: 41, category: 'trips', title: 'Himalayan Getaway', year: 2024, location: 'Manali', description: 'Snow for the first time for the little ones.', thumbnail: '/media/event-41.jpg', video: '/media/event-41.mp4' },
  { id: 42, category: 'trips', title: 'Kerala Backwaters', year: 2022, location: 'Alleppey', description: 'A houseboat, slow days and endless coconut water.', thumbnail: '/media/event-42.jpg', video: '/media/event-42.mp4' },

  { id: 43, category: 'trips', title: 'Rajasthan Heritage Tour', year: 2026, location: 'Jaipur & Udaipur', description: 'Forts, palaces, dal-baati and a camel ride nobody will forget.', thumbnail: '/media/event-43.jpg', video: '/media/event-43.mp4' },
  { id: 44, category: 'trips', title: 'Coorg Coffee Estate Stay', year: 2023, location: 'Coorg', description: 'Misty mornings and fresh filter coffee at the plantation.', thumbnail: '/media/event-44.jpg', video: '/media/event-44.mp4' },
  { id: 45, category: 'trips', title: 'Mahabaleshwar Strawberry Trip', year: 2021, location: 'Mahabaleshwar', description: 'Strawberries with cream and a boat ride at Venna Lake.', thumbnail: '/media/event-45.jpg', video: '/media/event-45.mp4' },
  { id: 46, category: 'trips', title: 'Singapore Family Holiday', year: 2019, location: 'Singapore', description: 'Universal Studios, the Night Safari and Gardens by the Bay.', thumbnail: '/media/event-46.jpg', video: '/media/event-46.mp4' },

  // Milestones
  { id: 50, category: 'milestones', title: 'Aarav’s 1st Birthday', year: 2025, location: 'Home', description: 'Cake smash, balloons and a very sleepy birthday boy.', thumbnail: '/media/event-50.jpg', video: '/media/event-50.mp4' },
  { id: 51, category: 'milestones', title: 'Graduation Day', year: 2024, location: 'University', description: 'Caps in the air — the whole family cheered.', thumbnail: '/media/event-51.jpg', video: '/media/event-51.mp4' },
  { id: 52, category: 'milestones', title: 'Wedding Sangeet', year: 2023, location: 'Banquet Hall', description: 'Months of dance rehearsals for one unforgettable night.', thumbnail: '/media/event-52.jpg', video: '/media/event-52.mp4' },
  { id: 53, category: 'milestones', title: 'Dad’s Retirement Party', year: 2022, location: 'Home', description: '35 years of work, celebrated with friends and family.', thumbnail: '/media/event-53.jpg', video: '/media/event-53.mp4' },
  { id: 54, category: 'milestones', title: 'Riya’s First Day at School', year: 2026, location: 'School Gate', description: 'A new uniform, a big backpack and only a few tears (mostly Mum’s).', thumbnail: '/media/event-54.jpg', video: '/media/event-54.mp4' },
  { id: 55, category: 'milestones', title: 'First Car Pooja', year: 2021, location: 'Temple', description: 'Coconut, garlands and the first drive around the block.', thumbnail: '/media/event-55.jpg', video: '/media/event-55.mp4' },
  { id: 56, category: 'milestones', title: 'Engagement Ceremony', year: 2019, location: 'Pune', description: 'Rings exchanged, families united and a lot of photos.', thumbnail: '/media/event-56.jpg', video: '/media/event-56.mp4' },
]
