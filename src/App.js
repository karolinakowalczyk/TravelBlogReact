import "./App.css";
import Layout from "./pages/Layout/Layout.jsx";
import MainRoute from "./router/MainRoute.jsx";
import UserContext from "./userContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Layout />
        <MainRoute />
      </div>
    </UserContext.Provider>
  );
};

export default App;
