import { FC } from "react";
import { Navbar } from "./components/navbar/navbar.component";
import { Router } from "./generic/router.component";

const App: FC = () => {
  return (
    <>
      <Router />
      <Navbar />;
    </>
  );
};

export default App;
