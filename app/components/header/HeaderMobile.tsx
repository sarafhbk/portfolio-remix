import useMenuState from "~/hooks/useMenuState";

export default function HeaderMobile() {
  const { openMenu, setOpenMenu } = useMenuState();

  return (
    <header className="flex items-center justify-between h-16 px-4 fixed top-0 w-full z-10000 bg-app-black md:hidden">
      <h1 className="text-2xl font-bold">Saraf.</h1>
      <button
        className="bg-white w-8 h-8 rounded-full menu-button md:w-12 md:h-12"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className="w-full h-full flex items-center justify-center">
          <span className="relative w-4 h-3">
            <span className="absolute w-full h-0.18 bg-black rounded-lg block"></span>
            <span className="absolute w-full h-0.18 bg-black rounded-lg top-1 block"></span>
          </span>
        </span>
      </button>
    </header>
  );
}
