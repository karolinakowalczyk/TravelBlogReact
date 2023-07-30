import React, { lazy, Suspense } from "react";
import "./App.css";
import UserContext from "./userContext";
import { useState } from "react";
import HttpsRedirect from "react-https-redirect";

const Layout = lazy(() => import("./router/MainRoute.jsx"));
const MainRoute = lazy(() => import("./pages/Layout/Layout.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <HttpsRedirect>
      <UserContext.Provider value={[user, setUser]}>
        <Suspense fallback={<div>Loading...</div>}>
          <div id="body-content">
            <Layout />
            <div id="site-body">
              <MainRoute />
            </div>
          </div>
          <Footer />
        </Suspense>
      </UserContext.Provider>
    </HttpsRedirect>
  );
};

export default App;
