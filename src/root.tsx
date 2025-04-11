import { component$, createContextId, useContextProvider, useStore } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { isDev } from "@builder.io/qwik";

import "./global.css";
import 'swiper/css/bundle';
import "./styles/index.scss";


export interface SidebarType {
  isShow: boolean;
}

export const SidebarContext = createContextId<SidebarType>("docs.sidebar");


export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  const sidebarState = useStore<SidebarType>({
    isShow: false,
  });

  useContextProvider(SidebarContext, sidebarState);

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en" aos-easing="ease" aos-duration="1000">
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
