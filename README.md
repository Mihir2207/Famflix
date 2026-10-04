# FamFlix — Family Archive

A Netflix-style React UI for family events, festivals, society meetups, friends and trips.

## Run
    npm install
    npm run dev

## Add your own content
1. Put photos/videos in `public/media/`
2. Edit `src/data/events.js`, e.g.
       thumbnail: '/media/diwali-2025.jpg',
       video: '/media/diwali-2025.mp4',
3. Add or rename rows in the `categories` list in the same file.
   Set `featured: true` on the event you want in the big banner.
