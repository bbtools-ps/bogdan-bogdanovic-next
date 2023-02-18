import { Link } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import HeaderMenu from "./HeaderMenu";

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
              link1: (
                <Link
                  href="mailto:bogdi.mail@gmail.com"
                  target="_top"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </p>
      </div>
    </header>
  );
};

export default Header;
