import { Trans, useTranslation } from "next-i18next";
import EmailLink from "../../UI/EmailLink/EmailLink";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <HeaderMenu />
      <div className="content-wrap">
        <h1>{t("home:AuthorName_Label")}</h1>
        <h2>{t("home:AuthorHeadline_Label")}</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>
          <Trans
            i18nKey={t("home:AuthorAbout_Label")}
            components={{
              link1: <EmailLink email="bogdi.mail@gmail.com"></EmailLink>
            }}
          />
        </p>
      </div>
    </header>
  );
};

export default Header;
