export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">

      {/* VIDEO (MORE VISIBLE) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover brightness-105 contrast-105 saturate-110"
      >
        <source src="/video/bg-video.mp4" type="video/mp4" />
      </video>

      {/* SOFT BLUE OVERLAY (LIGHT) */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-[#001a33]/50 via-[#003b6f]/35 to-[#001a33]/50" />

      {/* LIGHT BLUE TINT */}
      <div className="absolute inset-0 bg-[#0D7EB6]/15 mix-blend-overlay" />

    </div>
  );
}
