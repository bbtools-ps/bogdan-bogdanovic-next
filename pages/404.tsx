import { Container, Text } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"]))
    }
  };
}

const NotFoundPage = () => {
  return (
    <Container
      css={{
        textAlign: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div>
        <Text h1>404 - Page Not Found.</Text>
        <Link href="/">Go Back Home</Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
