# 🎵 How to Add Spotify Songs

## ⚠️ Important Note About Spotify

Spotify links **cannot be played directly** in a website due to copyright protection. You have **3 options**:

---

## Option 1: Use MP3 Files (RECOMMENDED) ✅

### Step 1: Download Songs as MP3
1. Use a service like:
   - **YouTube to MP3** converter
   - **Spotify Downloader** (search online)
   - Or buy the songs from iTunes/Amazon

### Step 2: Add MP3 Files to Your Project
1. Create a folder called `music` in your project:
   ```
   elli/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── music/
       ├── song1.mp3
       ├── song2.mp3
       └── song3.mp3
   ```

### Step 3: Update the Playlist in script.js
Find this section (around line 112):
```javascript
const playlist = [
    {
        title: "Song Name Here",
        artist: "Artist Name Here",
        src: "music/song1.mp3"  // ← Your MP3 file path
    },
    {
        title: "Another Song",
        artist: "Another Artist",
        src: "music/song2.mp3"
    },
    {
        title: "Third Song",
        artist: "Third Artist",
        src: "music/song3.mp3"
    }
];
```

### Step 4: Test
- Open `index.html` in your browser
- Music should autoplay after 2 seconds!

---

## Option 2: Use Spotify Embed (NO AUTOPLAY) ⚠️

Spotify embeds **cannot autoplay** due to Spotify's policies.

### How to Add Spotify Embed:
1. Go to Spotify
2. Right-click a song → Share → Copy Embed Code
3. Replace the music player section in `index.html`

**Example:**
```html
<iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
</iframe>
```

**Downside:** User must click play manually.

---

## Option 3: Use YouTube Links (Alternative)

### Step 1: Find Songs on YouTube
1. Search for the song on YouTube
2. Copy the video URL

### Step 2: Use YouTube Audio Extractor
You can use services that extract audio from YouTube videos.

### Step 3: Follow Option 1 steps above

---

## 🎵 Current Playlist Setup

Your playlist is in `script.js` at **line 112**:

```javascript
const playlist = [
    {
        title: "Song 1",           // ← Change this
        artist: "Artist 1",        // ← Change this
        src: "music/song1.mp3"     // ← Your file path
    },
    // Add more songs...
];
```

---

## ✅ Autoplay is Already Set Up!

The music will **automatically start playing** 2 seconds after the page loads!

### How it Works:
```javascript
setTimeout(() => {
    audio.play().then(() => {
        isPlaying = true;
        playBtn.textContent = '⏸';
        document.querySelector('.vinyl-record').classList.add('playing');
    }).catch(err => {
        console.log('Autoplay prevented. User must click play.');
    });
}, 2000); // Waits 2 seconds
```

**Note:** Some browsers block autoplay. If it doesn't work, the user just needs to click the play button once.

---

## 📝 Quick Example

Let's say you want to add these songs:
1. "Perfect" by Ed Sheeran
2. "Lover" by Taylor Swift
3. "All of Me" by John Legend

### Step-by-Step:
1. Download the 3 songs as MP3 files
2. Rename them:
   - `perfect.mp3`
   - `lover.mp3`
   - `all-of-me.mp3`
3. Put them in a `music` folder
4. Update `script.js`:

```javascript
const playlist = [
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        src: "music/perfect.mp3"
    },
    {
        title: "Lover",
        artist: "Taylor Swift",
        src: "music/lover.mp3"
    },
    {
        title: "All of Me",
        artist: "John Legend",
        src: "music/all-of-me.mp3"
    }
];
```

5. Save and refresh the page!

---

## 🎁 What You Get:

✅ **Autoplay** - Music starts automatically
✅ **Full Control** - Play, pause, next, previous
✅ **Volume Control** - Adjustable volume slider
✅ **Progress Bar** - See song progress
✅ **Playlist** - All songs listed
✅ **Auto-Next** - Automatically plays next song
✅ **Album Art** - Shows "ELLI" design

---

## ⚠️ Browser Autoplay Policy

**Modern browsers block autoplay** until user interacts with the page.

### Solutions:
1. **Best:** User clicks anywhere on the page first
2. **Alternative:** Add a "Start" button that plays music
3. **Workaround:** Music starts after 2 seconds (already implemented)

Most browsers will allow autoplay after the page loader finishes (user sees the page).

---

## 🆘 Troubleshooting

### Music doesn't play?
- Check file paths are correct
- Make sure MP3 files are in the right folder
- Open browser console (F12) to see errors

### Autoplay blocked?
- Click anywhere on the page
- Or click the play button manually

### Songs not showing in playlist?
- Check the playlist array in `script.js`
- Make sure each song has `title`, `artist`, and `src`

---

## 💡 Pro Tips

1. **Use high-quality MP3s** (320kbps recommended)
2. **Keep file sizes reasonable** (3-5MB per song)
3. **Test in different browsers** (Chrome, Firefox, Safari)
4. **Add more songs** - Just copy the song object format
5. **Organize files** - Keep all music in one folder

---

**Ready to add your songs! Just follow Option 1 for the best experience! 🎵💕**
