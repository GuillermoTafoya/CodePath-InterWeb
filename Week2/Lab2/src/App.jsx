import Clicker from "./components/clicker.jsx";
import Card from "./components/card";
import './App.css'

export default function App() {
  return (
    <div className="App center">
      <h1>Samosa Selector</h1>
      <Clicker />
      <div className="display-flex">
        <Card
          title = "Double Stuffed 👯‍♂️"
          clicks = "2x per click"
          numberPizzas = "10 pizzas"/>
        <Card
          title = "Party Pack 🎉"
          clicks = "5x per click"
          numberPizzas = "100 pizzas"/>
        <Card
          title = "Full Feast 🧑‍🍳"
          clicks = "10x per click"
          numberPizzas = "1000 pizzas"/>
      </div>
    </div>
  )
}
