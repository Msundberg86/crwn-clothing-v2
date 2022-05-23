import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navigation-bar/NavBar-component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/signin/SingIn-component";

const Shop = () => {
  return <h1>I'm the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
