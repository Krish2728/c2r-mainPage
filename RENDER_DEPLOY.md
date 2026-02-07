# Deploy Connect2Roots main page on Render

Frontend repo: [Krish2728/c2r-mainPage](https://github.com/Krish2728/c2r-mainPage)

## Option A: Blueprint

1. Go to [Render Dashboard](https://dashboard.render.com) → **New +** → **Blueprint**.
2. Connect GitHub and select **Krish2728/c2r-mainPage**.
3. Render creates a **Static Site** named `c2r-mainpage`.
4. In the service → **Environment**:
   - **VITE_API_URL** = your backend URL, e.g. `https://c2r-admin-backend.onrender.com` (no trailing slash).
   - **VITE_MENTOR_PLATFORM_URL** = (optional) mentor app URL if you deploy it.
5. **Save** and deploy. The site will be at e.g. `https://c2r-mainpage.onrender.com`.
6. In your **backend** service env, set **CORS_ORIGIN** to this URL so the API accepts requests from the frontend.

**Note:** Vite embeds `VITE_*` vars at **build time**. If you change env vars later, trigger a new deploy (e.g. **Manual Deploy**).

---

## Option B: Manual static site

1. **New +** → **Static Site**. Connect repo **Krish2728/c2r-mainPage**.
2. **Build command:** `npm install && npm run build`  
   **Publish directory:** `dist`
3. **Environment**: Add `VITE_API_URL` = `https://your-backend.onrender.com`.
4. Deploy. Then set **CORS_ORIGIN** on the backend to this site’s URL.

---

## Order of deployment

1. Deploy **backend** first ([c2r-mainPage-backend](https://github.com/Krish2728/c2r-mainPage-backend)) so you have a backend URL.
2. Deploy **frontend** (this repo) with `VITE_API_URL` = backend URL.
3. In the backend’s Environment, set **CORS_ORIGIN** = frontend URL (e.g. `https://c2r-mainpage.onrender.com`).
