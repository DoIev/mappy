import { Context, createContext, useMemo } from "react";
import { RouterService } from "../services/router/router.service";

import { APPLICATION_ROUTES_MAPPER } from "../consts/router.consts";

export interface IServicesContext {
  routerService: RouterService;
}

export const ServicesContext: Context<IServicesContext> =
  createContext<IServicesContext>({
    routerService: {} as RouterService,
  });

export const ServicesContextProvider = ({ children }: any) => {
  const routerService = useMemo(
    () => new RouterService(APPLICATION_ROUTES_MAPPER),
    [APPLICATION_ROUTES_MAPPER]
  );

  return (
    <ServicesContext.Provider
      value={{ routerService }}
      children={children}
    ></ServicesContext.Provider>
  );
};
