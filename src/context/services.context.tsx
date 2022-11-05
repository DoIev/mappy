import { Context, createContext, useMemo } from "react";

import { EntitiesService } from "../services/entities/entities.service";
import {
  GeographyParser,
  IGeographyParser,
} from "../services/geography/geography.parser";
import { EntitiesParser } from "../services/entities/entities.parser";
import {
  GeographyService,
  IGeographyService,
} from "../services/geography/geography.service";

export interface IServicesContext {
  entitiesService: EntitiesService;
  geographyParser: IGeographyParser;
  entitiesParser: EntitiesParser;
  geographyService: IGeographyService;
}

export const ServicesContext: Context<IServicesContext> =
  createContext<IServicesContext>({
    entitiesService: {} as EntitiesService,
    geographyParser: {} as IGeographyParser,
    entitiesParser: {} as EntitiesParser,
    geographyService: {} as GeographyService,
  });

export const ServicesContextProvider = ({ children }: any) => {
  const entitiesService = useMemo(() => new EntitiesService(), []);

  const geographyParser = useMemo<IGeographyParser>(
    () => new GeographyParser(),
    []
  );

  const entitiesParser = useMemo(
    () => new EntitiesParser(geographyParser),
    [geographyParser]
  );

  const geographyService = useMemo(() => new GeographyService(), []);

  return (
    <ServicesContext.Provider
      value={{
        entitiesService,
        entitiesParser,
        geographyParser,
        geographyService,
      }}
      children={children}
    ></ServicesContext.Provider>
  );
};
