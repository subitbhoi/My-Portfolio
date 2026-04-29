export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black z-0" />

      {/* Glow Layer (NOW ABOVE GRADIENT) */}
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl z-10" />

      {/* Grid Layer (TOP MOST but LIGHT) */}
      <div className="absolute inset-0 z-20 opacity-30 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
    </div>
  );
}
