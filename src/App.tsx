import { FC, useContext } from "react";
import { Navbar } from "./components/navbar/navbar.component";
import { MappyContext, IMappyContext } from "./context/mappy.context";

const App: FC = () => {
  const { renderContentByMode } = useContext<IMappyContext>(MappyContext);

  const content = renderContentByMode();

  return (
    <>
      <Navbar />
      {content}
    </>
  );
};

export default App;
