import { Trans, useTranslation } from "next-i18next";
import EmailLink from "../UI/EmailLink/EmailLink";
import classes from "./Introduction.module.scss";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className={`content-wrap ${classes.container}`}>
      <h1>{t("home:AuthorName_Label")}</h1>
      <h2>{t("home:AuthorHeadline_Label")}</h2>
      <p>
        <Trans
          i18nKey={t("home:AuthorAbout_Label")}
          components={{
            link1: <EmailLink email="bogdi.mail@gmail.com"></EmailLink>
          }}
        />
      </p>
    </div>
  );
};

export default Introduction;
