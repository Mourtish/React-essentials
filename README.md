# My React & Next.js Learning Journey 🚀

Welcome to my React-essentials repository! This is where I'm documenting my learning journey as I explore **React** and **Next.js**. I've built two projects here that showcase what I've learned and practiced.

---

## 📚 What I Learned

### React Fundamentals (my-app folder)
I started with the basics of React using **Vite** for a fast development setup:
- Understanding **components** and how they work
- Working with **props** to pass data between components
- Building responsive UIs with CSS
- Using **ESLint** to write clean code
- Hot reload development - seeing changes instantly without refreshing

### Next.js & Full-Stack Development (nextjs/my-app folder)
Then I leveled up to **Next.js** where I learned more advanced concepts:
- **File-based routing** - folders automatically create routes
- **Server Components vs Client Components** - understanding when to use each
- **Server Actions** - handling form submissions on the server side
- **API data fetching** - getting data from external APIs
- **Image optimization** - using Next.js Image component
- **Styling with Tailwind CSS** - utility-first CSS for faster development
- **Building full-page applications** with navigation

---

## 🎨 Project 1: React + Vite (`my-app/`)

This was my first project where I learned React basics.

**What I used:**
- React 19.2.4
- Vite (fast build tool)
- CSS for styling
- ESLint for code quality

**How to run it:**
```bash
cd my-app
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) to see it!

---

## 🚀 Project 2: Next.js App (`nextjs/my-app/`)

This is my main learning project where I built a complete ski resort website called **Snowtooth Mountain**.

### 🛠️ Tech I Used:
- **Next.js 16.2.7** - The React framework
- **React 19.2.4** - UI library
- **TypeScript** - To catch mistakes in my code
- **Tailwind CSS** - Making it look great
- **Server Actions** - Handling forms securely

### 🏔️ Pages I Built:

#### **1. Home Page** (`/`)
- A welcome page for Snowtooth Mountain
- Responsive design with Tailwind CSS
- Navigation header to browse the site

#### **2. Mountain Page** (`/mountain`)
- Displays lift status information
- Simple page showing what I learned about routing

#### **3. Hotels Page** (`/hotels`)
I really enjoyed building this one! Here's what I did:
- Fetches real hotel data from an API
- Shows hotel name and capacity
- Displays hotel images with optimization
- Created a reusable `HotelBlock` component
- Learned how to organize components properly

#### **4. Contact Page** (`/contact`)
This was challenging but rewarding! I learned:
- How to handle form submissions with **Server Actions**
- The difference between `"use client"` (client component) and `"use server"` (server action)
- Form validation and data handling
- Users can submit their email and message

#### **5. Navigation Header** 
- Built a header that appears on every page
- Links to Home, Mountain, Hotels, and Contact
- Styled with Tailwind CSS

### 💡 Key Concepts I Learned:

**1. File-Based Routing**
```
app/
├── page.tsx          → Home page (/)
├── Mountain/
│   └── page.js       → /mountain
├── Hotels/
│   └── page.js       → /hotels
└── Contact/
    └── page.js       → /contact
```
Just create a folder with `page.js` and it becomes a route!

**2. Server Actions (Contact Form)**
I struggled with this at first, but learned:
- `"use server"` must be at the **top of the file**
- Page component needs `"use client"` for client-side interactivity
- Server action file handles the backend logic
- Form data is processed on the server securely

**3. Component Organization**
- Learned to create separate component files
- Keep components reusable (like HotelBlock)
- Import and use components in pages

**4. Data Fetching**
- Used `async/await` to fetch data from the Snowtooth API
- Display dynamic content on pages
- Error handling for API calls

### 🚀 How to Run It:
```bash
cd nextjs/my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and explore!

### 📁 Folder Structure I Created:
```
nextjs/my-app/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Header & layout (appears on all pages)
│   ├── globals.css           # Global styles
│   ├── Mountain/
│   │   └── page.js           # Lift info page
│   ├── Hotels/
│   │   ├── page.js           # Hotels list
│   │   └── HotelBlock.js     # Hotel card component
│   └── Contact/
│       ├── page.js           # Contact form (client-side)
│       └── actions.js        # Form handling (server-side)
└── [config files...]
```

---

## 🎓 Challenges & Solutions

### Challenge 1: className vs class
**Problem:** Kept writing `class` in JSX
**Solution:** Learned that React uses `className` because `class` is reserved in JavaScript
**Learning:** Details matter in programming!

### Challenge 2: Server Actions Not Working
**Problem:** "Invalid Server Actions request" error
**Solution:** Learned that:
- `"use server"` must be at file level, not inside functions
- Page needs `"use client"` when using forms with server actions
- Server action should be in a separate file
**Learning:** Understanding where code runs (client vs server) is crucial

### Challenge 3: Duplicate Components
**Problem:** Had component defined in two places
**Solution:** Created separate `HotelBlock.js` file and imported it
**Learning:** Code organization prevents confusion

---

## 🎯 What I Built & Learned

| Topic | What I Did | Where |
|-------|-----------|-------|
| React Basics | Built a React app with Vite | `my-app/` |
| File-based Routing | Created multiple pages | `nextjs/my-app/` |
| Components | Built reusable HotelBlock component | `nextjs/my-app/Hotels/` |
| Server Actions | Built contact form with server processing | `nextjs/my-app/Contact/` |
| API Integration | Fetched hotel data from external API | `nextjs/my-app/Hotels/` |
| Styling | Used Tailwind CSS throughout | Both projects |
| Navigation | Created header with links | `nextjs/my-app/layout.tsx` |
| TypeScript | Used type safety in Next.js | `nextjs/my-app/` |

---

## 📚 Resources That Helped Me

- [React Official Docs](https://react.dev) - Great for fundamentals
- [Next.js Learn Course](https://nextjs.org/learn) - Step-by-step Next.js guide
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - CSS made easy
- Lots of Googling and debugging! 😅

---

## 🚀 Next Steps for My Learning

- [ ] Add more features to the Hotels page (filtering, sorting)
- [ ] Create an API route instead of using external API
- [ ] Add user authentication
- [ ] Deploy to Vercel (it's free for Next.js!)
- [ ] Add database to store contact form submissions
- [ ] Learn about middleware in Next.js
- [ ] Explore different styling approaches

---

## 💭 My Takeaways

1. **Start Simple** - I started with basic React and Vite before jumping to Next.js
2. **Read Error Messages** - They actually help understand what's wrong
3. **Practice Matters** - Building small projects teaches more than reading docs
4. **Component Reusability** - Thinking about reusable components makes code cleaner
5. **Ask Questions** - Understanding WHY something works > just making it work

---

## 🎉 Thanks for Checking Out My Work!

This repository shows my learning progress. Feel free to explore, and if you have suggestions, I'm always open to feedback!

**Happy coding! 🚀**