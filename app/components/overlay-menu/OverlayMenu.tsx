import { useEffect, useRef } from "react";
import useMenuState from "../../hooks/useMenuState";
import gsap from "gsap";

const MENU = ["Home", "About", "Contact"];

function OverlayMenu() {
  const overlay_ref = useRef<HTMLDivElement>(null);
  const nav_ref = useRef<HTMLDivElement>(null);

  const open_overlay_timeline = useRef<gsap.core.Timeline>(
    gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
      },
    })
  );
  open_overlay_timeline?.current?.to(overlay_ref?.current, {
    height: "100%",
  });
  open_overlay_timeline?.current?.to(nav_ref?.current, {
    opacity: 1,
  });

  const { openMenu } = useMenuState();

  useEffect(() => {
    if (openMenu === true) {
      open_overlay_timeline?.current?.restart();
    }
    if (openMenu === false) {
      open_overlay_timeline?.current?.reverse();
    }
  }, [openMenu]);

  return (
    <div
      ref={overlay_ref}
      className="fixed top-0 left-0 w-full h-0 bg-black origin-top flex flex-col items-center justify-center"
    >
      <nav ref={nav_ref} className="h-1/3 opacity-0">
        <ul className="h-full w-full flex flex-col items-center justify-between">
          {MENU?.map((menu_item: string) => {
            return (
              <li key={menu_item} className="gsap-text-reveal">
                <a className="text-center text-2xl font-semibold md:text-4xl">
                  {menu_item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default OverlayMenu;
