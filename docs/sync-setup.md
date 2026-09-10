# Sync setup

There are two ways the table's devices share one set of data. Use whichever fits the moment;
the site picks automatically.

## A. Game night on your own Wi-Fi (no internet needed)

1. On the laptop that will host, open Terminal in the `stonetop-site` folder and run
   `node server.js` — or double-click `run-server.command` in Finder. (Needs Node.js, the LTS
   download from https://nodejs.org, installed once.)
2. It prints addresses like `http://192.168.1.23:8732`. Everyone on the same Wi-Fi opens one of
   them; on Macs and iPhones the `http://<your-mac-name>.local:8732` form also works.
3. The status pill on every device should read **synced · this network**. Every change is saved
   to `data/store.json` on the host laptop and pushed live to the others.
4. Keep that Terminal window open while you play. Ctrl+C stops it. The first time, macOS may ask
   whether to allow incoming connections for Node — allow it.

Tips: if the address changes between sessions, that's your router handing out a new IP — the
`.local` name avoids that. The host's browser seeds the server with whatever it already had, so
the first person to open the site should be the DM's laptop.

## B. Away from the table (Netlify + Firebase)


This makes all notes, recaps, and people **shared live across every device** — the DM's
laptop, players' phones, everyone. Until you do this, the site still works fine, but
each browser keeps its own private copy (you'll see a grey "this device only" dot in
the bottom-right corner of the page).

Total time: ~10 minutes. Cost: $0 (Firebase's free "Spark" plan is far more than a
home game will ever use).

## 1. Create a Firebase project

1. Go to <https://console.firebase.google.com> and sign in with any Google account.
2. Click **Create a project** (or "Add project").
3. Name it anything (e.g. `stonetop`). You can **turn OFF Google Analytics** when asked
   — not needed.
4. Wait for it to finish, then click **Continue**.

## 2. Create the Realtime Database

1. In the left sidebar: **Build → Realtime Database**.
2. Click **Create Database**. Pick the default location (United States is fine).
3. When asked about security rules, pick either option — we'll replace them next.
4. Open the **Rules** tab and replace the contents with:

```json
{
  "rules": {
    "campaigns": {
      "$campaign": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

5. Click **Publish**.

> **Security note (honest version):** these rules mean anyone who discovers your
> database URL could read/write the campaign notes. For a home game storing fictional
> village gossip, that's a fine trade-off for zero-login simplicity — the URL is
> effectively a shared secret. Don't put anything real/private in it. If you ever want
> proper locking-down, that's a later upgrade (Firebase anonymous auth).

## 3. Get your config object

1. Click the **gear icon → Project settings** (top of the left sidebar).
2. Scroll to **Your apps**, click the **`</>` (Web)** icon to register a web app.
3. Name it anything (e.g. `stonetop-site`). **Don't** tick Firebase Hosting. Click
   **Register app**.
4. It shows a code snippet containing `const firebaseConfig = { ... }`. Copy just the
   `{ ... }` object part.

## 4. Paste it into the site

1. Open `index.html` and find the **SHARED SYNC CONFIG** block near the top of the
   `<script>` section (search for `FIREBASE_CONFIG`).
2. Replace `var FIREBASE_CONFIG = null;` with your object:

```js
var FIREBASE_CONFIG = {
  apiKey: "AIza....",
  authDomain: "stonetop-xxxxx.firebaseapp.com",
  databaseURL: "https://stonetop-xxxxx-default-rtdb.firebaseio.com",
  projectId: "stonetop-xxxxx",
  storageBucket: "stonetop-xxxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
```

> **Important:** make sure the object includes a **`databaseURL`** line. If the console
> snippet didn't include one, copy the URL shown at the top of the Realtime Database
> page (it looks like `https://<project>-default-rtdb.firebaseio.com`) and add it.

3. Save, and deploy to Netlify (or just refresh locally to test).

## 5. Check it works

- The dot in the bottom-right of the page should go **amber ("connecting…")** then
  **green ("synced")**.
- Open the site on two devices (or two browsers), edit a building's notes on one —
  the other should update within a second or two.
- If the dot is **red**, open the browser console (F12) for the error; the usual
  culprits are a missing `databaseURL` or unpublished rules.

## How it behaves (for the curious)

- Data lives at `campaigns/stonetop/store` in the database (`CAMPAIGN_ID` in
  `index.html` controls the `stonetop` part — change it to run a second campaign on
  the same database).
- Every edit auto-saves locally **and** pushes to Firebase; other devices receive it
  live and refresh any open (non-editing) panel.
- Conflicts are resolved **per building, last write wins** (a `_t` timestamp on each
  building's record).
- `localStorage` still works as the offline cache, so the site loads instantly and
  works offline; it reconciles when the connection returns.
- If Firebase is unreachable, the dot shows red and edits keep saving locally.


## If the status pill says "sync blocked · database rules"

The database is refusing reads and writes. This is what happened on 2026-09-10: Firebase's
default "test mode" rules stop working 30 days after a database is created, and from then on
every device runs alone ("offline · saved here") and nothing reaches the others — seasons set on
one screen never show on another, and the map only tints where the change was made.

Fix (about a minute, needs the Firebase project owner):

1. Open https://console.firebase.google.com → the **stone-7ed10** project → **Realtime
   Database** → the **Rules** tab.
2. Replace the rules with:
   ```json
   {
     "rules": {
       "campaigns": {
         ".read": true,
         ".write": true
       }
     }
   }
   ```
3. Press **Publish**. Reload the site on each device; the pill should turn green ("synced").

Quick check from a terminal:
```bash
curl -s "https://stone-7ed10-default-rtdb.firebaseio.com/campaigns/stonetop/store.json?shallow=true"
```
"Permission denied" means the rules are still closed; a JSON object of keys means sync is back.

These rules keep the URL-as-shared-secret model described above. If you would rather lock it
down, the upgrade path is Firebase anonymous auth plus `".read": "auth != null"`.
