const NeonBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Neon gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      
      {/* Floating cartoon icons */}
      <div className="absolute top-20 left-10 text-primary/10 text-4xl animate-float">⭐</div>
      <div className="absolute top-40 right-20 text-secondary/10 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>▲</div>
      <div className="absolute bottom-32 left-1/3 text-accent/10 text-5xl animate-float" style={{ animationDelay: '1s' }}>⚡</div>
      <div className="absolute top-1/2 right-1/4 text-primary/10 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>★</div>
      <div className="absolute bottom-1/4 right-10 text-secondary/10 text-4xl animate-float" style={{ animationDelay: '2s' }}>◆</div>
      <div className="absolute top-1/3 left-1/4 text-accent/10 text-3xl animate-float" style={{ animationDelay: '2.5s' }}>●</div>
    </div>
  );
};

export default NeonBackground;
