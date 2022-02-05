import { MutableRefObject, useEffect } from "react";
import gsap, { Power4 } from "gsap";

function Cursor({
  cursor_ref,
  cursor_follower_ref,
}: {
  cursor_ref: MutableRefObject<HTMLDivElement>;
  cursor_follower_ref: MutableRefObject<HTMLDivElement>;
}) {
  useEffect(() => {
    window.addEventListener("mousemove", (event: MouseEvent) => {
      gsap.to(cursor_ref?.current, {
        duration: 0.3,
        x: event?.clientX,
        y: event?.clientY,
        ease: Power4.easeOut,
      });
      gsap.to(cursor_follower_ref?.current, {
        duration: 0.7,
        x: event?.clientX,
        y: event?.clientY,
        ease: Power4.easeOut,
      });
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, [cursor_follower_ref, cursor_ref]);

  return (
    <div className="custom-cursor-container">
      <div
        className="fixed bg-white rounded-full w-3 h-3 -left-3 -top-3 scale-100 z-10000"
        ref={cursor_ref}
      />
      <div
        className="fixed border border-white h-12 w-12 -left-8 -top-8 rounded-full select-none pointer-events-none scale-100 z-10000"
        ref={cursor_follower_ref}
      />
    </div>
  );
}

export default Cursor;
