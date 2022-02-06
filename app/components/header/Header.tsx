import { MouseEvent, MutableRefObject, useEffect, useRef } from "react";
import gsap, { Power2 } from "gsap";
import useMenuState from "~/hooks/useMenuState";

export default function Header({
  menu_container_ref,
  menu_button_ref,
  logo_container_ref,
  logo_ref,
  cursor_ref,
  cursor_follower_ref,
}: {
  menu_container_ref: MutableRefObject<HTMLDivElement>;
  menu_button_ref: MutableRefObject<HTMLButtonElement>;
  logo_container_ref: MutableRefObject<HTMLDivElement>;
  logo_ref: MutableRefObject<HTMLHeadingElement>;
  cursor_ref: MutableRefObject<HTMLDivElement>;
  cursor_follower_ref: MutableRefObject<HTMLDivElement>;
}) {
  const { openMenu, setOpenMenu } = useMenuState();

  const header_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    gsap.to(".menu-button span.bg-black:nth-child(1)", {
      duration: 0.3,
      top: openMenu ? "50%" : 0,
      translateY: openMenu ? "-50%" : 0,
      rotate: openMenu ? "45deg" : 0,
      ease: Power2.easeInOut,
    });
    gsap.to(".menu-button span.bg-black:nth-child(2)", {
      duration: 0.3,
      top: openMenu ? "50%" : "0.5rem",
      translateY: openMenu ? "-50%" : 0,
      rotate: openMenu ? "-45deg" : 0,
      ease: Power2.easeInOut,
    });
  }, [openMenu]);

  function menuContainerMouseEnter() {
    gsap.to(menu_button_ref?.current, {
      duration: 0.3,
      scale: 1.3,
      ease: Power2.easeOut,
    });
    gsap.to([cursor_ref?.current, cursor_follower_ref?.current], {
      duration: 0.3,
      opacity: 0,
    });
  }

  function menuContainerMouseMove(event: MouseEvent) {
    let relX = event?.pageX - menu_container_ref?.current?.offsetLeft;
    let relY =
      (header_ref?.current?.offsetHeight as number) -
      menu_container_ref?.current?.offsetTop;

    gsap.to(menu_button_ref?.current, {
      duration: 0.3,
      x:
        ((relX - menu_container_ref?.current?.clientWidth / 2) /
          menu_container_ref?.current?.clientWidth) *
        80,
      y:
        ((relY - menu_container_ref?.current?.clientHeight / 2) /
          menu_container_ref?.current?.clientHeight) *
        80,
      ease: Power2.easeOut,
    });
  }

  function menuContainerMouseLeave() {
    gsap.to(menu_button_ref?.current, {
      duration: 0.3,
      scale: 1,
      x: 0,
      y: 0,
      ease: Power2.easeOut,
    });
    gsap.to([cursor_ref?.current, cursor_follower_ref?.current], {
      duration: 0.3,
      opacity: 1,
    });
  }

  function logoContainerMouseEnter() {
    gsap.to(logo_ref?.current, {
      duration: 0.3,
      scale: 1.3,
      ease: Power2.easeOut,
    });
    gsap.to([cursor_ref?.current, cursor_follower_ref?.current], {
      duration: 0.3,
      opacity: 0,
    });
  }

  function logoContainerMouseMove(event: MouseEvent) {
    let relX = event?.pageX - logo_container_ref?.current?.offsetLeft;
    let relY =
      (header_ref?.current?.offsetHeight as number) -
      menu_container_ref?.current?.offsetTop;

    gsap.to(logo_ref?.current, {
      duration: 0.3,
      x:
        ((relX - logo_container_ref?.current?.clientWidth / 2) /
          logo_container_ref?.current?.clientWidth) *
        80,
      y:
        ((relY - logo_container_ref?.current?.clientHeight / 2) /
          logo_container_ref?.current?.clientHeight) *
        80,
      ease: Power2.easeOut,
    });
  }

  function logoContainerMouseLeave() {
    gsap.to(logo_ref?.current, {
      duration: 0.3,
      scale: 1,
      x: 0,
      y: 0,
      ease: Power2.easeOut,
    });
    gsap.to([cursor_ref?.current, cursor_follower_ref?.current], {
      duration: 0.3,
      opacity: 1,
    });
  }

  return (
    <header
      ref={header_ref}
      className="items-center justify-between h-24 px-8 fixed top-0 w-full z-10000 bg-app-black hidden md:flex xl:bg-transparent"
    >
      <div
        ref={logo_container_ref}
        className="flex items-center justify-center h-full pl-8 pr-12 -ml-8"
        onMouseLeave={logoContainerMouseLeave}
        onMouseMove={logoContainerMouseMove}
        onMouseEnter={logoContainerMouseEnter}
      >
        <h1 ref={logo_ref} className="text-4xl font-bold">
          Saraf.
        </h1>
      </div>
      <div
        ref={menu_container_ref}
        className="flex items-center justify-center h-full pr-8 pl-12 -mr-8"
        onMouseLeave={menuContainerMouseLeave}
        onMouseMove={menuContainerMouseMove}
        onMouseEnter={menuContainerMouseEnter}
      >
        <button
          ref={menu_button_ref}
          className="bg-white w-12 h-12 rounded-full menu-button"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="w-full h-full flex items-center justify-center">
            <span className="relative w-5 h-3">
              <span className="absolute w-full h-0.18 bg-black rounded-lg block"></span>
              <span className="absolute w-full h-0.18 bg-black rounded-lg top-1 block"></span>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
