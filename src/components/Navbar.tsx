export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 border-b backdrop-blur-md bg-white/60 dark:bg-black/60 z-50">
      <div className="text-lg font-semibold">Subit.dev</div>

      <div className="flex gap-8 text-sm">
        <span className="cursor-pointer hover:text-blue-500 transition">
          About
        </span>
        <span className="cursor-pointer hover:text-blue-500 transition">
          Projects
        </span>
        <span className="cursor-pointer hover:text-blue-500 transition">
          Contact
        </span>
      </div>
    </nav>
  );
}
