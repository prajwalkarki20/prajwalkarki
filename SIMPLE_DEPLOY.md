# 🌐 Deploy Your Portfolio to Web - Easy Guide

## What's Needed?

You have 3 things to set up:
1. **MongoDB Atlas** - Database (FREE)
2. **Vercel** - Hosting (FREE)
3. **GitHub** - Already done! ✅

---

## ⏱️ 20-Minute Setup

### **Part 1: MongoDB Atlas Database (5 minutes)**

#### Step 1: Create Account
```
1. Open: https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with email
4. Create password
5. Verify email
```

#### Step 2: Create Database
```
1. Click "Create a Cluster"
2. Select "M0 Cluster" (Free Forever)
3. Choose your region (pick closest to you)
4. Click "Create Cluster"
5. Wait 2 minutes for it to initialize...
```

#### Step 3: Create User
```
1. Click "Database Access" (left menu)
2. Click "Add New Database User"
3. Set Username: portfolio
4. Set Password: (create something strong, like: P@ssw0rd123!)
5. Click "Add User"
6. SAVE THIS PASSWORD!
```

#### Step 4: Allow All IPs
```
1. Click "Network Access" (left menu)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere"
4. Click "Confirm"
```

#### Step 5: Get Connection String
```
1. Click "Clusters" (left menu)
2. Click "Connect" button
3. Click "Connect your application"
4. Select "Node.js"
5. Copy the connection string
```

**Your string will look like:**
```
mongodb+srv://portfolio:PASSWORD@cluster0.xxxxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

**Edit it to be:**
```
mongodb+srv://portfolio:PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

Replace `PASSWORD` with your actual password from Step 3.

---

### **Part 2: Deploy to Vercel (10 minutes)**

#### Step 1: Open Vercel
```
1. Open: https://vercel.com/new
2. Click "Continue with GitHub"
3. Authorize Vercel
```

#### Step 2: Select Your Project
```
1. Find: prajwalkarki20/prajwalkarki
2. Click to select it
3. Click "Import"
```

#### Step 3: Add Environment Variables
```
In the "Environment Variables" section, add these 3:

Variable 1:
Name: MONGODB_URI
Value: mongodb+srv://portfolio:PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
(Replace PASSWORD with your password from MongoDB)

Variable 2:
Name: JWT_SECRET
Value: mysupersecretkey123456789

Variable 3:
Name: NEXT_PUBLIC_API_URL
Value: https://prajwalkarki.vercel.app/api
(You'll get the actual domain in next step)
```

#### Step 4: Deploy!
```
1. Click "Deploy"
2. Wait 3-5 minutes...
3. See the success message! 🎉
```

#### Step 5: Get Your Live URL
```
1. Vercel will show you: https://[something].vercel.app
2. Copy this URL
3. Go back to Vercel Settings → Environment Variables
4. Update NEXT_PUBLIC_API_URL to: https://[your-url].vercel.app/api
5. Click "Redeploy" or wait for auto-redeploy
```

---

### **Part 3: Test Your Website (5 minutes)**

#### Test 1: Homepage Works?
```
1. Open your URL: https://[your-url].vercel.app
2. See your portfolio? ✅
3. Scroll around, click buttons ✅
```

#### Test 2: Contact Form Works?
```
1. Scroll to "Get In Touch"
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test
   - Message: This is a test
3. Click "Send Message"
4. See success message? ✅
```

#### Test 3: Admin Panel?
```
1. Open: https://[your-url].vercel.app/admin/messages
2. See your test message? ✅
3. If yes, database is working! ✅
```

---

## 🎉 You're Live!

Your portfolio is now on the internet!

### Share Your URL:
```
https://[your-url].vercel.app
```

### Tell People About:
- Portfolio: https://[your-url].vercel.app
- GitHub: https://github.com/prajwalkarki20/prajwalkarki
- Admin: https://[your-url].vercel.app/admin

---

## 🆘 If Something Goes Wrong

### Problem: MongoDB Connection Error
```
Solution:
1. Check your password is correct in MONGODB_URI
2. Make sure you have 0.0.0.0/0 in MongoDB Network Access
3. Wait 5 minutes (sometimes takes time to activate)
```

### Problem: Build Failed
```
Solution:
1. Go to Vercel → Deployments
2. Click on failed deployment
3. Look at logs to see error
4. Common: Wrong environment variable name (check spelling!)
```

### Problem: API Returns 404
```
Solution:
1. Check environment variables in Vercel Settings
2. Make sure NEXT_PUBLIC_API_URL is correct
3. Redeploy after changing env vars
```

### Problem: Contact Form Not Saving
```
Solution:
1. Open browser console (F12)
2. Look for red errors
3. Check MongoDB Atlas - is cluster running?
4. Verify database user and password
```

---

## 📞 Support Links

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs/deployment
- **MongoDB Help**: https://www.mongodb.com/docs/
- **GitHub**: https://github.com/prajwalkarki20/prajwalkarki

---

## ✨ Optional: Custom Domain

To use your own domain (example.com):

```
1. Buy domain from: GoDaddy, Namecheap, etc.
2. Go to Vercel → Project Settings
3. Click "Domains"
4. Add your domain
5. Follow DNS setup instructions
```

---

## 📊 Your Deployment Status

```
✅ Code on GitHub
✅ Ready for Vercel
⏳ MongoDB Atlas - Set up now
⏳ Vercel - Deploy now
⏳ Live on web - Coming soon!
```

---

## 🚀 Next Steps (In Order)

1. **NOW**: Set up MongoDB Atlas (see Part 1)
2. **THEN**: Deploy to Vercel (see Part 2)
3. **TEST**: Visit your live URL
4. **CELEBRATE**: You're live on the internet! 🎉

---

**It's that simple! You've got this! 💪**
