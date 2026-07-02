# Al-Bashra Modern Enterprises — Website

Yeh ek React + Vite + Tailwind CSS project hai.

## Local mein chalane ke liye

```bash
npm install
npm run dev
```

Browser mein `http://localhost:5173` khulega.

## Free mein online deploy karne ke liye

### Option 1: Vercel (recommended)
1. Is poore folder ko GitHub par ek naye repository mein push karo
2. https://vercel.com par jao aur GitHub se sign in karo
3. "Add New Project" → apna repo select karo
4. Vercel khud detect kar lega ki yeh Vite project hai (Build Command: `npm run build`, Output: `dist`)
5. "Deploy" dabao — 1-2 minute mein live link mil jayega (jaise `yourproject.vercel.app`)

### Option 2: Netlify Drop (bina GitHub ke)
```bash
npm install
npm run build
```
Isse `dist` folder banega. Us folder ko seedha https://app.netlify.com/drop par drag-and-drop kar do — turant live link mil jayega.

## Apna domain add karna
Vercel ya Netlify ke project settings mein "Domains" section mein jaake apna khareeda hua domain (e.g. albashramodern.com) add kar sakte ho — dono free mein connect kar dete hain, sirf DNS records update karne honge jo unki site par step-by-step diye hote hain.

## Project structure
```
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx      ← main website code (sections: Home, About, Services, Projects, Why Us, Contact)
```

## Note
- Contact section aur footer add kiye gaye hain (nav mein #contact link tha lekin section missing tha)
- Saari images abhi Unsplash se stock photos hain — apni company ki asli photos se replace karna recommended hai (`src/App.jsx` mein `PROJECTS` array aur About/Hero section ke `img src` dhundo)
- Phone/email placeholder hai jo mobile menu mein tha: +968 9977 9216 / irshadkk0786@gmail.com — confirm kar lena ye sahi hai
