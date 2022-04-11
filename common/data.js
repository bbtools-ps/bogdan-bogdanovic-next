// Data
export const Data = {
  Author: {
    name: "Bogdan Bogdanovic",
    title: "Web developer / Multidisciplinary artist",
    info: `Skilled in web development using: HTML, CSS, Javascript, React.js, Vue.js, Node.js. Strong arts and design professional with an MSc in Graphic Engineering and Design from the Faculty of Technical Sciences in Novi Sad.`,
  },
  Projects: [
    {
      id: "p1",
      title: "FoodHeaven - Food Ordering App",
      urls: {
        main: "https://bogdan-bogdanovic.com/food-ordering-app/",
        source: "https://github.com/bbtools-ps/food-ordering-app",
      },
      imageSrc: "/images/food-heaven-700w.jpg",
      descriptionText: `Small web application for ordering food. Some of the features: add meal to the Cart (including amount), add/Remove meals from Cart, add additional item for each meal in the Cart.`,
      technologiesUsed: ["React.js", "CSS"],
      buttonTypes: {
        source: true,
        live: true,
        info: false,
      },
    },
  ],
};
