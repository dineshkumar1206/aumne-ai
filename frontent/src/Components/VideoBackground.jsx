



export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/bg-video.mp4" type="video/mp4" />
      </video>

      {/* optional overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
