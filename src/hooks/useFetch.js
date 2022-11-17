import { useState, useEffect, useContext } from "react";
import FoodContext from "../context/FoodContext";

const useFetch = () => {
  const ctx = useContext(FoodContext);
  const [loading, setLoading] = useState(true);

  const transformData = (data) => {
    const newData = [];
    for (const key in data) {
      newData.push({
        id: data[key].id,
        name: data[key].name,
        price: data[key].price,
        calory: data[key].calories,
        image: data[key].image,
      });
    }

    return newData;
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await fetch(
        "https://food-order-app-f2051-default-rtdb.firebaseio.com/meals.json"
      )
        .then((data) => data.json())
        .then((data) => ctx.food.push(...transformData(data)));

      setLoading(false);
    };
    getData();
  }, []);

  return { loading };
};

export default useFetch;

