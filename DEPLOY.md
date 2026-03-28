# SigmaGPT - Deployment Guide 🚀

## Free Deployment Stack
| Part | Platform | Cost |
|------|----------|------|
| Database | MongoDB Atlas | Free |
| Backend | Render.com | Free |
| Frontend | Vercel | Free |

---

## Step 1: GitHub pe Push Karo

1. GitHub pe nayi repository banao: `SigmaGPT`
2. Terminal mein yeh commands chalaao:

```bash
cd SigmaGPT-main
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TERA_USERNAME/SigmaGPT.git
git push -u origin main
```

---

## Step 2: MongoDB Atlas Setup (Database)

1. https://mongodb.com/atlas pe jaao → Free account banao
2. **"Build a Database"** → **M0 Free Tier** select karo
3. Username aur Password set karo (yaad rakhna!)
4. **"Network Access"** → **"Add IP Address"** → **"Allow Access from Anywhere"** (0.0.0.0/0)
5. **"Database"** → **"Connect"** → **"Drivers"** → Connection string copy karo

Connection string kuch aisi dikhegi:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/sigmagpt?retryWrites=true&w=majority
```

---

## Step 3: Render.com (Backend Deploy)

1. https://render.com pe jaao → GitHub se login karo
2. **"New +"** → **"Web Service"**
3. Apni GitHub repo connect karo
4. Settings:
   - **Name**: `sigmagpt-backend`
   - **Root Directory**: `Backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **"Environment Variables"** section mein add karo:
   - Key: `MONGODB_URI` → Value: MongoDB Atlas connection string
   - Key: `OPENAI_API_KEY` → Value: tera OpenAI API key
6. **"Create Web Service"** click karo
7. Deploy hone ke baad URL copy karo (e.g. `https://sigmagpt-backend.onrender.com`)

> ⚠️ Free tier par first request slow hogi (~30 sec) kyunki server "sleep" ho jaata hai

---

## Step 4: Vercel (Frontend Deploy)

1. https://vercel.com pe jaao → GitHub se login karo
2. **"New Project"** → GitHub repo import karo
3. Settings:
   - **Root Directory**: `Frontend`
   - **Framework Preset**: Vite (auto-detect hoga)
4. **"Environment Variables"** mein add karo:
   - Key: `VITE_BACKEND_URL`
   - Value: Render ka URL (Step 3 se, trailing slash ke bina)
   - Example: `https://sigmagpt-backend.onrender.com`
5. **"Deploy"** click karo!

---

## ✅ Done! 

Vercel tumhe ek URL dega jaise:
`https://sigma-gpt-xyz.vercel.app`

Yahi tera live SigmaGPT hai! 🎉

---

## 🔑 Environment Variables Summary

### Backend (Render mein add karo):
```
MONGODB_URI=mongodb+srv://...
OPENAI_API_KEY=sk-...
```

### Frontend (Vercel mein add karo):
```
VITE_BACKEND_URL=https://sigmagpt-backend.onrender.com
```
