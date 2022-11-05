import { FC, useContext } from "react";
import { MapContainer } from "./components/map/map.container";
import { Navbar } from "./components/navbar/navbar.component";
import {
  ApplicationContext,
  IApplicationContext,
} from "./context/application.context";

const App: FC = () => {
  const { renderContentByMode } =
    useContext<IApplicationContext>(ApplicationContext);

  const content = renderContentByMode();

  return (
    <>
      <Navbar />
      {content}
      <MapContainer />
    </>
  );
};

export default App;
