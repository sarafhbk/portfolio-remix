export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 fixed top-0 w-full bg-app-black md:px-8 md:h-24 xl:bg-transparent">
      <p className="text-xl font-bold md:text-3xl">Saraf.</p>
      <button className="bg-white w-8 h-8 rounded-full md:w-12 md:h-12"></button>
    </header>
  );
}
