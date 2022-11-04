import { Context, createContext, useMemo } from "react";
import { RouterService } from "../services/router/router.service";

import { APPLICATION_ROUTES_MAPPER } from "../consts/router.consts";
import { EntitiesService } from "../services/entities/entities.service";
import {
  GeographyParser,
  IGeographyParser,
} from "../services/entities/geography.parser";
import { EntitiesParser } from "../services/entities/entities.parser";

export interface IServicesContext {
  routerService: RouterService;
  entitiesService: EntitiesService;
  geographyParser: IGeographyParser;
  entitiesParser: EntitiesParser;
}

export const ServicesContext: Context<IServicesContext> =
  createContext<IServicesContext>({
    routerService: {} as RouterService,
    entitiesService: {} as EntitiesService,
    geographyParser: {} as IGeographyParser,
    entitiesParser: {} as EntitiesParser,
  });

export const ServicesContextProvider = ({ children }: any) => {
  const routerService = useMemo(
    () => new RouterService(APPLICATION_ROUTES_MAPPER),
    [APPLICATION_ROUTES_MAPPER]
  );

  const entitiesService = useMemo(() => new EntitiesService(), []);

  const geographyParser = useMemo<IGeographyParser>(
    () => new GeographyParser(),
    []
  );

  const entitiesParser = useMemo(
    () => new EntitiesParser(geographyParser),
    [geographyParser]
  );

  return (
    <ServicesContext.Provider
      value={{
        routerService,
        entitiesService,
        entitiesParser,
        geographyParser,
      }}
      children={children}
    ></ServicesContext.Provider>
  );
};
