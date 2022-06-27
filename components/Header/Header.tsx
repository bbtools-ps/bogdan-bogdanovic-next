import { useTranslation } from "next-i18next";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <HeaderMenu />
      <div className="content-wrap">
        <h1>{t("home:AuthorName_Label")}</h1>
        <h2>{t("home:AuthorHeadline_Label")}</h2>
        <p>{t("home:AuthorAbout_Label")}</p>
      </div>
    </header>
  );
};

export default Header;
