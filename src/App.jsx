import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Card from "./Components/Cards";
import data from "./data";
import "./App.css";

function App() {
  const Cards = data.map((item) => {
    return <Card id={item.id} {...item} />;
  });
  return (
    <div className="container mx-auto max-w-screen-md mb-12">
      <Header />
      <div className="bg-white">{Cards}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(<App />);

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}
