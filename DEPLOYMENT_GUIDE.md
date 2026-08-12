# 🚀 Deploy to Vercel - Complete Guide

## Phase 1: Set Up MongoDB Atlas (Database)

### Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas
2. Click "Try Free" or sign up
3. Create account with your email

### Step 2: Create a Free Cluster
1. Click "Create a Database"
2. Choose **M0 Cluster (Free Forever)**
3. Select region closest to you
4. Click "Create Cluster"
5. Wait for cluster to initialize (2-3 minutes)

### Step 3: Create Database User
1. Go to "Database Access" (left menu)
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Set username: `portfolio`
5. Set strong password (copy it!)
6. Click "Add User"

### Step 4: Allow IP Access
1. Go to "Network Access" (left menu)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Clusters" (left menu)
2. Click "Connect"
3. Choose "Connect your application"
4. Select **Node.js** driver
5. Copy the connection string
6. Replace `<password>` with your password
7. Replace `myFirstDatabase` with `portfolio`

**Your MongoDB URI should look like:**
```
mongodb+srv://portfolio:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## Phase 2: Update Project for Production

### Step 1: Update .env.local

Ensure your `.env.local` has:
```env
MONGODB_URI=mongodb+srv://portfolio:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_change_this_in_production
NEXT_PUBLIC_API_URL=https://your-vercel-domain.vercel.app/api
NODE_ENV=production
```

### Step 2: Verify package.json

Make sure `package.json` has these scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Step 3: Test Locally with Production Database

```bash
npm run build
npm start
# Visit http://localhost:3000
```

---

## Phase 3: Deploy to Vercel

### Step 1: Connect GitHub to Vercel
1. Go to: https://vercel.com/new
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Select repository: `prajwalkarki20/prajwalkarki`

### Step 2: Configure Project
1. **Project Name**: Keep as is or change
2. **Framework**: Should auto-detect Next.js
3. Click "Configure Project"

### Step 3: Add Environment Variables
1. Look for "Environment Variables" section
2. Add these variables:

**Variable 1:**
- Name: `MONGODB_URI`
- Value: `mongodb+srv://portfolio:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

**Variable 2:**
- Name: `JWT_SECRET`
- Value: `your_super_secret_key_change_this_in_production`

**Variable 3:**
- Name: `NEXT_PUBLIC_API_URL`
- Value: `https://your-app.vercel.app/api` (update after deployment)

### Step 4: Deploy
1. Click "Deploy"
2. Wait 3-5 minutes for deployment
3. You'll see a success message with your live URL

---

## ✅ Post-Deployment Steps

### Step 1: Verify Deployment
1. Visit your Vercel URL
2. Test the portfolio homepage
3. Test contact form submission
4. Check if messages appear in database

### Step 2: Access Admin Dashboard
- URL: `https://your-app.vercel.app/admin`
- Manage projects, skills, and messages

### Step 3: Update NEXT_PUBLIC_API_URL
1. Get your actual Vercel domain from dashboard
2. Update in Vercel Environment Variables:
   - `NEXT_PUBLIC_API_URL=https://your-actual-domain.vercel.app/api`
3. Redeploy (if needed)

### Step 4: Set Up Auto-Deployments
- Vercel automatically deploys on GitHub push
- Every commit to `main` = automatic deployment
- Production URL updates instantly

---

## 🎯 Your Live Project

After deployment:
```
Portfolio URL: https://your-app.vercel.app
Admin Panel: https://your-app.vercel.app/admin
Repository: https://github.com/prajwalkarki20/prajwalkarki
```

---

## 🔒 Security Tips

1. ✅ Use strong passwords for MongoDB
2. ✅ Use strong JWT_SECRET
3. ✅ Add authentication for admin panel (optional)
4. ✅ Enable HTTPS (Vercel does this automatically)
5. ✅ Never commit `.env.local` to GitHub

---

## 🆘 Troubleshooting

### Build Fails with Module Errors
```bash
# Delete and reinstall dependencies
rm -r node_modules package-lock.json
npm install
npm run build
```

### MongoDB Connection Error
- Verify connection string is correct
- Check IP whitelist includes 0.0.0.0/0
- Verify username and password

### API Endpoints Return 404
- Check environment variables are set in Vercel
- Verify NEXT_PUBLIC_API_URL is correct
- Redeploy after changing env vars

### Contact Form Not Saving
- Check MongoDB connection
- Verify database user has access
- Check browser console for errors

---

## 📚 Next Steps

1. ✅ Set up MongoDB Atlas (5 minutes)
2. ✅ Update environment variables (2 minutes)
3. ✅ Deploy to Vercel (5 minutes)
4. ✅ Test all features (5 minutes)
5. ✅ Share live portfolio with others!

---

## 💡 Additional Features

After deployment, you can:
- ✅ Add custom domain
- ✅ Enable Analytics
- ✅ Set up automatic backups
- ✅ Add team members
- ✅ Configure rollbacks
- ✅ Monitor performance

---

**Your portfolio will be live on the internet! 🌐**
