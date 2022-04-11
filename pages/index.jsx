import { Data } from "../common/data";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const HomePage = () => {
  return (
    <div className="wrapper">
      <Header
        title={Data.Author.name}
        subtitle={Data.Author.title}
        description={Data.Author.info}
      />
      <MainContent featuredProjects={Data.Projects} />
      <Footer />
    </div>
  );
};

export default HomePage;
