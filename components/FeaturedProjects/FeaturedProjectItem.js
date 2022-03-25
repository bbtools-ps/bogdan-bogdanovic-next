import Image from "next/image";
import ExternalLink from "../ExternalLink";

const FeaturedProjectItem = () => {
  return (
    <section className="project-item">
      <h3>
        <ExternalLink url="https://bogdan-bogdanovic.com/food-ordering-app/" text="FoodHeaven - Food Ordering App" />
      </h3>
      <Image src="/images/food-heaven-700w.jpg" alt="FoodHeaven - Food Ordering App" layout="responsive" width={700} height={548} />
      <div className="project-description">
        <p>
          Small web application for ordering food. Some of the features: add meal to the Cart (including amount), add/Remove meals from
          Cart, add additional item for each meal in the Cart.
        </p>
        <p>Technologies used:</p>
        <ul>
          <li>React.js</li>
          <li>CSS</li>
        </ul>
        <a href="https://github.com/bbtools-ps/food-ordering-app" target="_blank" className="btn" rel="noreferrer">
          <i className="fas fa-code"></i> Source
        </a>
        <a href="https://bogdan-bogdanovic.com/food-ordering-app/" target="_blank" className="btn" rel="noreferrer">
          <i className="fas fa-eye"></i> Live
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjectItem;
