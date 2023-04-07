import { useTheme } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: isDark ? "hsla(210, 50%, 15%, 0.8)" : "hsla(210, 5%, 100%, 0.82)"
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
