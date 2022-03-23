import MealCard from "./MealCard";
const MealData = [
  {
    id: "d-1",
    name: "Chicken finger",
    description: "Crispy and tasty",
    price: 22.99,
  },
  {
    id: "d-2",
    name: "BBQ rib",
    description: "Smoked with special taste",
    price: 16.5,
  },
  {
    id: "d-3",
    name: "Barbecue Burger",
    description:
      "A burger can be seasoned a hundred ways to Sunday, but it means nothing without a solid foundation. For a juicy, flavorful burger, skip the extra-lean ground beef patty blends and use ground beef with a higher fat content.",
    price: 12.99,
  },
  {
    id: "d-4",
    name: "Parsely soup",
    description: "Healthy and green",
    price: 18.99,
  },
  {
    id: "d-5",
    name: "Seasoned lobster tails",
    description:
      "This lobster tail recipe is a decadent dinner made with large lobster tails smothered with a buttery garlic herb sauce then broiled under high heat making these lobster tails tender and juicy. ",
    price: 13.99,
  },
  {
    id: "d-6",
    name: "Parsely soup",
    description: "Healthy and green",
    price: 9.99,
  },
];

const Meals = () => {
  const mealList = MealData.map((element) => (
    // <li key={element.id}>{element.name}</li>
    <MealCard
      key={element.id}
      name={element.name}
      description={element.description}
      price={element.price}
      id={element.id}
    />
  ));

  return (
    <section>
      <ul style={{ paddingLeft: 0 }}>{mealList}</ul>
    </section>
  );
};

export default Meals;
