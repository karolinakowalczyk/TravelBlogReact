import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import MainRoute from "./router/MainRoute.jsx";
import UserContext from "./userContext";
import { useState } from "react";
import HttpsRedirect from "react-https-redirect";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <HttpsRedirect>
      <UserContext.Provider value={[user, setUser]}>
        <div id="body-content">
          <Layout />
          <div id="site-body">
            <MainRoute />
          </div>
        </div>
        <Footer />
      </UserContext.Provider>
    </HttpsRedirect>
  );
};

export default App;
