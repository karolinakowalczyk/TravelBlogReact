import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import MainRoute from "./router/MainRoute.jsx";
import UserContext from "./userContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div id="body-content">
        <Layout />
        <div id="site-body">
          <MainRoute />
        </div>
      </div>
      <Footer />
    </UserContext.Provider>
  );
};

export default App;
