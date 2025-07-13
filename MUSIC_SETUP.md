# Music Player Setup

To enable the music player functionality, you need to add an audio file to the public folder.

## Steps:

1. **Add your audio file** to the `public` folder
2. **Name it** `music.mp3` (or update the src in the components)
3. **Supported formats**: MP3, WAV, OGG, M4A

## File location:
```
public/music.mp3
```

## Alternative formats:
If you prefer a different format, update the src in both files:
- `components/Sidebar.tsx` (line with `src="/music.mp3"`)
- `components/MobileMenu.tsx` (line with `src="/music.mp3"`)

## Current behavior:
- The music player will show but won't play until you add an audio file
- No errors will be displayed to users
- The player will gracefully handle missing audio files

## Example audio sources:
- Royalty-free music from sites like Free Music Archive
- Your own music files
- Creative Commons licensed music 