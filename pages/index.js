import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { Author } from "../common/data";

const HomePage = () => {
  return (
    <div className="wrapper">
      <Header
        title={Author.name}
        subtitle={Author.title}
        description={Author.info}
      />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
