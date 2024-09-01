import Footer from "./sections/footer";
import Header from "./sections/header";
import Body from "./sections/body";
import { ThemeProvider } from "../context/themetoggle";
import Loading from "./components/ui/loading";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <ThemeProvider>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center gap-10 px-7 py-14 dark:bg-darkTheme-backgroundColor">
          <>
            <Header />
            <Body />
            <Footer />
          </>
        </div>
      )}
    </ThemeProvider>
  );
}
