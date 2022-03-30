import "../styles/globals.scss";
import type { AppProps } from "next/app";
import English from "../content/compiled-locales/en.json";
import Spanish from "../content/compiled-locales/es.json";
// import German from "../content/compiled-locales/de.json";
// import French from "../content/compiled-locales/fr.json";
// import Hindi from "../content/compiled-locales/hi.json";
// import Italian from "../content/compiled-locales/it.json";
// import Turkish from "../content/compiled-locales/tr.json";
// import Portuguese from "../content/compiled-locales/pt.json";
// import Romanian from "../content/compiled-locales/ro.json";
// import Slovak from "../content/compiled-locales/sk.json";
// import Chinese from "../content/compiled-locales/zh.json";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "en":
        return English;
      case "es":
        return Spanish;
      // case "de":
      //   return German
      // case "fr":
      //   return French
      // case "hi":
      //   return Hindi
      // case "it":
      //   return Italian;
      // case "tr":
      //   return Turkish
      // case "pt":
      //   return Portuguese;
      // case "ro":
      //   return Romanian
      // case "sk":
      //   return Slovak
      // case "zh":
      //   return Chinese;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <ThemeProvider attribute="class">
      <IntlProvider
        locale={shortLocale}
        messages={messages}
        onError={() => null}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
