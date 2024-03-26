# Telegram Mini App Boilerplate

This template provides a minimal setup to start developing Telegram Mini App.

## Stack
- React
- Typescript
- Vite
- Tailwind
- Firebase
- Zustand

## How to start

Clone this repository to your local machine:  
`git clone https://github.com/StasPonomaryov/tg-mini-app-boilderpale.git`

Install dependencies:  
`pnpm i`  

Edit `vite.config.ts` for `outDir` (path to build) and `base` (path to run).

Create `.env.local`, `.env.staging`, `.env.production` files for local development\staging\production and place there some variables and put Firebase credentials there:
```
VITE_APP_FAVICON_EMOJI="👑"
VITE_APP_TITLE="Telegram Mini App Boilderplate [local]"
VITE_APP_HOME_FOLDER="/web-app"
VITE_APP_FIREBASE_API_KEY=""
VITE_APP_FIREBASE_AUTH_DOMAIN=""
VITE_APP_FIREBASE_DATABASE_URL=""
VITE_APP_FIREBASE_PROJECT_ID=""
VITE_APP_FIREBASE_STORAGE_BUCKET=""
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=""
VITE_APP_FIREBASE_APP_ID=""
NODE_ENV=<development|production>
```

## How to run

Run local:    
`pnpm run dev` 

## How to build

Build staging:  
`pnpm build:stage`

Build production:  
`pnpm build`

## How to deploy

⚠️ IMPORTANT. Every your deployment will remove ALL files on Firebase hosting. Therefore, if you have multiple applications placed in subdirectories like `public/tg-mini-app`, `public/tg-mini-app-2` you'll lose all of them and only current application will be available.

⚠️ You must have `firebase-tools` installed on your machine globally

1) If your Firebase hosting contsins ONLY one (this) application:  

Create `.firebaserc` file and put there info about your projects:
```
{
  "projects": {
    "prod": "tg-mini-app",
    "dev": "tg-mini-app-dev",
    "default": "tg-mini-app-dev"
  }
}
```

Create `firebase.json` file and put there info about your projects' hosting:
```
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "/tg-mini-app/**",
        "destination": "/tg-mini-app/index.html"
      }
    ]
  }
}
```

Deploy to Firebase hosting (staging project)
`firebase deploy --only hosting -P dev`

Deploy to Firebase hosting (production project)
`firebase deploy --only hosting -P prod`

2) If you have multiple applications on your Firebase hosting:

In your `vite.config.ts` pleace full path to your project hosting in `outDir`. E.g. `../../projects/newproject/public/`

Add to file `firebase.json` in your project this data to `hosting.rewrites` array:  

```
{
  "source": "/tg-mini-app/**",
  "destination": "/tg-mini-app/index.html"
}
```

Build your application and check if it built in proper folder of your project.

From your project run hosting deployment:  
`firebase deploy --only hosting -P <project_name>`