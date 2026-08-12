# 📋 Deployment Checklist - Vercel + MongoDB Atlas

## ✅ Quick Deploy in 3 Steps

### **STEP 1: Set Up MongoDB Atlas (10 minutes)**

```
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up (free account)
3. Create M0 Cluster (free forever)
4. Create database user:
   - Username: portfolio
   - Password: (create strong password)
5. Allow IP: 0.0.0.0/0
6. Get connection string:
   mongodb+srv://portfolio:PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
7. Copy this string - you'll need it next!
```

### **STEP 2: Deploy to Vercel (5 minutes)**

```
1. Go to: https://vercel.com/new
2. Click "Continue with GitHub"
3. Authorize & select: prajwalkarki20/prajwalkarki
4. Click "Deploy"
5. Wait for deployment to complete ⏳
```

### **STEP 3: Add Environment Variables (3 minutes)**

After deployment completes:

```
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add 3 variables:

   MONGODB_URI
   Value: mongodb+srv://portfolio:PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority

   JWT_SECRET
   Value: any_random_string_here

   NEXT_PUBLIC_API_URL
   Value: https://[your-vercel-domain].vercel.app/api

5. Click "Save"
6. Go to Deployments
7. Redeploy the latest commit
```

**That's it! Your app is now LIVE! 🎉**

---

## 📊 Deployment Checklist

### Pre-Deployment
- [ ] Code pushed to GitHub
- [ ] .gitignore includes .env.local (✅ Already set)
- [ ] package.json has build scripts (✅ Already set)
- [ ] No console errors locally

### MongoDB Setup
- [ ] MongoDB Atlas account created
- [ ] Cluster created (M0 Free)
- [ ] Database user created
- [ ] IP whitelist configured (0.0.0.0/0)
- [ ] Connection string copied

### Vercel Deployment
- [ ] Vercel account created
- [ ] GitHub connected
- [ ] Repository imported
- [ ] Environment variables added
- [ ] Build successful
- [ ] Preview URL working

### Post-Deployment
- [ ] Visit live URL
- [ ] Test homepage loads
- [ ] Test contact form
- [ ] Test admin dashboard
- [ ] Check browser console for errors
- [ ] Database operations working

---

## 🌐 Your Live URLs

After deployment, you'll have:

```
Portfolio:  https://[your-project].vercel.app
Admin:      https://[your-project].vercel.app/admin
API:        https://[your-project].vercel.app/api
GitHub:     https://github.com/prajwalkarki20/prajwalkarki
```

---

## 🚨 Important Notes

### ⚠️ Before Deploying:
1. **DO NOT commit `.env.local`** - Already ignored by .gitignore ✅
2. **Use strong JWT_SECRET** - Not a real secret from repo
3. **Use MongoDB Atlas** - Not local MongoDB (won't work on Vercel)
4. **IP Whitelist**: Set to 0.0.0.0/0 in MongoDB Atlas

### ⚠️ After Deploying:
1. Database updates might take 24 hours to sync
2. Vercel auto-redeploys on every GitHub push
3. Errors? Check Vercel → Deployments → Logs
4. Performance? Check Vercel → Analytics

---

## 🆘 Common Issues & Solutions

### ❌ "Build Failed"
```
Solution: Check build logs in Vercel
Usually: Missing dependencies or syntax errors
Try: npm install && npm run build locally first
```

### ❌ "MongoDB Connection Error"
```
Solution: Check MONGODB_URI in Vercel env vars
Verify: Username/password/cluster name correct
Check: IP whitelist includes 0.0.0.0/0 in MongoDB Atlas
```

### ❌ "Contact Form Not Saving"
```
Solution: Check MONGODB_URI and database name
Verify: Database exists in MongoDB Atlas
Try: Test API endpoints in browser console
```

### ❌ "Admin Dashboard Empty"
```
Solution: Add sample data via form first
Try: Submit contact form to test database connection
Check: Browser console for API errors
```

---

## 📈 After Going Live

1. **Monitor Performance**: Check Vercel Analytics
2. **Track Errors**: Set up error logging
3. **Update DNS**: Add custom domain if desired
4. **Backup Data**: MongoDB Atlas has automatic backups
5. **Scale Up**: When needed, upgrade to paid plan

---

## 🎓 Learning Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- MongoDB Atlas: https://docs.atlas.mongodb.com
- GitHub Pages: https://pages.github.com

---

## 📞 Need Help?

- **Vercel Support**: https://vercel.com/support
- **MongoDB Support**: https://docs.mongodb.com/support
- **Next.js Community**: https://github.com/vercel/next.js/discussions

---

## ✨ Quick Reference

```bash
# Local Testing
npm install
npm run dev
# Visit: http://localhost:3000

# Production Build
npm run build
npm start

# Check Logs
git log --oneline
git status

# Update GitHub
git add .
git commit -m "Your message"
git push origin main
```

---

**Your portfolio is ready for the world! 🚀**

Good luck with your deployment!
