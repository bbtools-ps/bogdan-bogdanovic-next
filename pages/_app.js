import { createTheme, NextUIProvider } from "@nextui-org/react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/main.scss";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/svg+xml" href="./favicon.svg" />
      </Head>
      <Provider store={store}>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </NextThemesProvider>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
