# 🚀 Quick Start Guide

## Step-by-Step Setup

### 1. Install MongoDB

**Windows Users:**
- Download MongoDB Community Edition from: https://www.mongodb.com/try/download/community
- Follow the installer
- MongoDB will start automatically as a service

**Mac Users:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux Users:**
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

**Verify MongoDB is running:**
```bash
mongo
# or
mongosh
```

### 2. Install Dependencies

```bash
cd d:\Studies\Portfolio
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will start at:
- **Portfolio**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

### 4. First Time Setup

1. Open http://localhost:3000 in your browser
2. Fill out the contact form to test database connectivity
3. Check the browser console for any errors
4. Open http://localhost:3000/admin to manage content

### 5. Add Sample Content

Visit the admin panel to add:
- Projects (with GitHub links and demo URLs)
- Skills (grouped by category)
- View submitted contact messages

## 🔗 MongoDB Connection Strings

### Local MongoDB
```
mongodb://localhost:27017/portfolio
```

### MongoDB Atlas (Cloud)
```
mongodb+srv://username:password@cluster-name.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Docker MongoDB
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 📊 Database Visualization

### Using MongoDB Compass
1. Download MongoDB Compass: https://www.mongodb.com/products/compass
2. Connect to: `mongodb://localhost:27017`
3. View your portfolio database

### Using Atlas UI
1. Log into MongoDB Atlas
2. Click on "Browse Collections"
3. View your data in the UI

## 🐛 Common Issues

### Issue: MongoDB Connection Error
```
Solution: Make sure MongoDB service is running
Windows: Check Services app for MongoDB
Mac: brew services list
Linux: sudo systemctl status mongodb
```

### Issue: Port 3000 Already in Use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue: Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📱 Testing the Application

### Test Contact Form
1. Go to http://localhost:3000#contact
2. Fill out the form
3. Click "Send Message"
4. Visit http://localhost:3000/admin/messages to see it

### Test Projects
1. Visit http://localhost:3000/admin/projects
2. Click "Add Project"
3. Fill out and submit
4. See it on http://localhost:3000#projects

### Test Skills
1. Visit http://localhost:3000/admin/skills
2. Click "Add Skill Group"
3. Fill out and submit
4. See it on http://localhost:3000#skills

## 🎨 Customization Tips

### Change Portfolio Name
Edit `components/Navbar.tsx` and `components/Hero.tsx`

### Change Colors
Edit `tailwind.config.ts`

### Change Social Links
Edit `components/Hero.tsx` and `components/Footer.tsx`

### Add More Sections
Create new components in `components/` and import in `app/page.tsx`

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel
```

### Deploy to Railway
1. Push code to GitHub
2. Go to https://railway.app
3. Connect GitHub repository
4. Add MongoDB add-on
5. Deploy

### Deploy to Render
1. Connect GitHub account
2. Create new Web Service
3. Select your repository
4. Add MongoDB URI environment variable
5. Deploy

## 📚 Learning Resources

- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev
- MongoDB Docs: https://docs.mongodb.com
- Tailwind CSS: https://tailwindcss.com/docs

## 💡 Next Steps

1. **Add Authentication**: Implement secure admin login
2. **Add Email**: Send email notifications on form submission
3. **Add Analytics**: Track portfolio visitors
4. **Add Blog**: Create a blog section
5. **Add Testimonials**: Add client testimonials
6. **Optimize Performance**: Add caching and CDN

---

**Happy coding! 🎉**
