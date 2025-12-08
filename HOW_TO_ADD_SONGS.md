# 🎵 How to Add Your Own Songs to the Music Player

## Quick Guide

### Step 1: Prepare Your Music Files
1. **Supported formats**: MP3, WAV, OGG
2. **Recommended**: MP3 format for best compatibility
3. Place your music files in the `elli` folder (same folder as index.html)

### Step 2: Update the Playlist

Open `script.js` and find the playlist array (around line 90):

```javascript
const playlist = [
    {
        title: "Our Song",
        artist: "For Elli",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Forever Love",
        artist: "Romantic Melody",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Beautiful Moments",
        artist: "Sweet Memories",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];
```

### Step 3: Replace with Your Songs

**Example with local files:**

```javascript
const playlist = [
    {
        title: "Our First Dance",
        artist: "Ed Sheeran",
        src: "perfect.mp3"  // File in same folder
    },
    {
        title: "A Thousand Years",
        artist: "Christina Perri",
        src: "a-thousand-years.mp3"
    },
    {
        title: "All of Me",
        artist: "John Legend",
        src: "all-of-me.mp3"
    },
    {
        title: "Thinking Out Loud",
        artist: "Ed Sheeran",
        src: "thinking-out-loud.mp3"
    }
];
```

**Example with online URLs:**

```javascript
const playlist = [
    {
        title: "Romantic Song",
        artist: "Artist Name",
        src: "https://example.com/song1.mp3"
    },
    {
        title: "Love Song",
        artist: "Artist Name",
        src: "https://example.com/song2.mp3"
    }
];
```

## 📁 File Structure Example

```
elli/
├── index.html
├── styles.css
├── script.js
├── perfect.mp3              ← Your song files here
├── a-thousand-years.mp3
├── all-of-me.mp3
└── thinking-out-loud.mp3
```

## 🎨 Customization Tips

### Change Track Info Display
The `title` and `artist` fields will appear in:
- The player header (currently playing)
- The playlist items
- Make them romantic and personal!

### Add More Songs
Simply add more objects to the playlist array:

```javascript
const playlist = [
    // ... existing songs ...
    {
        title: "Your Song Title",
        artist: "Artist Name",
        src: "filename.mp3"
    },
    {
        title: "Another Song",
        artist: "Another Artist",
        src: "another-song.mp3"
    }
    // Add as many as you want!
];
```

## 💡 Pro Tips

1. **Song Order**: Songs will play in the order you list them
2. **Auto-play**: The first song in the playlist loads automatically
3. **Loop**: When the last song ends, it automatically goes back to the first
4. **File Names**: Use simple names without spaces (use hyphens or underscores)
   - ✅ Good: `our-song.mp3`, `love_song.mp3`
   - ❌ Avoid: `our song.mp3`, `song (1).mp3`

## 🎵 Recommended Romantic Songs

Here are some popular romantic songs you might want to add:

- "Perfect" - Ed Sheeran
- "A Thousand Years" - Christina Perri
- "All of Me" - John Legend
- "Thinking Out Loud" - Ed Sheeran
- "Make You Feel My Love" - Adele
- "Marry You" - Bruno Mars
- "Lucky" - Jason Mraz
- "Everything" - Michael Bublé
- "At Last" - Etta James
- "Can't Help Falling in Love" - Elvis Presley

## 🔧 Troubleshooting

### Song won't play?
- Check the file path is correct
- Make sure the file is in the right folder
- Verify the file format (MP3 is most reliable)
- Check browser console for errors (F12)

### Song name too long?
- The player will automatically handle long names
- But shorter names look better in the UI

### Want to change the default volume?
In `script.js`, find this line (around line 223):
```javascript
audio.volume = 0.7;  // Change to 0.0 (mute) to 1.0 (max)
```

## 🎁 Special Touch

Consider creating a playlist that tells your story:
1. Song from when you first met
2. Song from your first date
3. Song that reminds you of her
4. Song for special moments
5. Song for the future together

---

**Enjoy creating the perfect playlist for Elli! 💕**
