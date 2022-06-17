import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navigation-bar/NavBar-component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/signin/Authentication-component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
