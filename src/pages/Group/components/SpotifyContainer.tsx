export function SpotifyContainer() {
  return (
    <div className="spotify-container">
      <iframe
        src="https://open.spotify.com/embed/artist/6YVMFz59CuY7ngCxTxjpxE?utm_source=generator"
        width="75%"
        className="m-auto "
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
