import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import tailwindCSS from "~/styles/app.css";
import mainCSS from "~/styles/main.css";
import Header from "./components/header/Header";
import Cursor from "./components/cursor/Cursor";
import { MutableRefObject, useRef } from "react";
import MenuStateProvider from "./providers/MenuStateProvider";
import HeaderMobile from "./components/header/HeaderMobile";

export const meta: MetaFunction = () => {
  return { title: "Saraf" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap",
    },
    { rel: "stylesheet", href: tailwindCSS },
    {
      rel: "stylesheet",
      href: mainCSS,
    },
  ];
};

export default function App() {
  const cursor_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const cursor_follower_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const menu_container_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const menu_button_ref = useRef<HTMLButtonElement>(
    null
  ) as MutableRefObject<HTMLButtonElement>;

  const logo_container_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const logo_ref = useRef<HTMLHeadingElement>(
    null
  ) as MutableRefObject<HTMLHeadingElement>;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MenuStateProvider>
          <Header
            menu_container_ref={menu_container_ref}
            menu_button_ref={menu_button_ref}
            logo_container_ref={logo_container_ref}
            logo_ref={logo_ref}
            cursor_ref={cursor_ref}
            cursor_follower_ref={cursor_follower_ref}
          />
          <HeaderMobile />
          <Outlet />
          <Cursor
            cursor_ref={cursor_ref}
            cursor_follower_ref={cursor_follower_ref}
          />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </MenuStateProvider>
      </body>
    </html>
  );
}
