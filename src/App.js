import "./App.css";
import Layout from "./pages/Layout/Layout.jsx";
import MainRoute from "./router/MainRoute.jsx";

const App = () => {
  return (
    <div>
      <Layout />
      <MainRoute />
    </div>
  );
};

export default App;
