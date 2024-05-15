interface SpotifyContainerProps {
  spotifyUrl: string;
}

export function SpotifyContainer({ spotifyUrl }: SpotifyContainerProps) {
  return (
    <div className="spotify-container">
      <iframe
        src={spotifyUrl}
        width="75%"
        className="m-auto"
        height="352"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
