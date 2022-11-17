import { useState, useContext } from "react"
import FoodContext from "../context/FoodContext";

const uesSend = () => {
  const [loading, setLoading] = useState(false);
  const ctx = useContext(FoodContext)


  const sendData = async (data) => {
    setLoading(true);

    await fetch('https://food-order-app-f2051-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    setLoading(false);
    ctx.orderSet();
  }

  return {sendData, loading}
}


export default uesSend