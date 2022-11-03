import { FC, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { IServicesContext, ServicesContext } from "../context/services.context";

export const Router: FC = () => {
  const { routerService } = useContext<IServicesContext>(ServicesContext);

  const [routesToComponentsMapper, setRoutesToComponentsMapper] = useState<
    Record<string, any>
  >({});

  useEffect(() => {
    const updatedRoutesMapper = routerService.getAllRoutesWithComponents();
    setRoutesToComponentsMapper(updatedRoutesMapper);
  }, [routerService]);

  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routesToComponentsMapper).map((entry, index) => {
          const Element = entry[1];
          return <Route key={index} path={entry[0]} element={<Element />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
