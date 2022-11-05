import { Context, createContext, ReactElement, useState } from "react";
import { AddContainer } from "../components/add-container/add.container";
import { EntitiesContainer } from "../components/entities/entities.container";
import { MapContainer } from "../components/map/map.container";

export enum ApplicationMode {
  View,
  Add,
}

export interface IApplicationContext {
  currentMode: ApplicationMode;
  switchMode: (mode: ApplicationMode) => void;
  renderContentByMode: () => HTMLElement | ReactElement;
}

export const ApplicationContext: Context<IApplicationContext> =
  createContext<IApplicationContext>({
    currentMode: ApplicationMode.View,
    switchMode: () => {},
    renderContentByMode: () => <></>,
  });

export const ApplicationContextProvider = ({ children }: any) => {
  const [currentMode, setCurrentMode] = useState<ApplicationMode>(
    ApplicationMode.View
  );

  const switchMode = (mode: ApplicationMode) => {
    setCurrentMode(mode);
  };

  const renderContentByMode = () => {
    switch (currentMode) {
      case ApplicationMode.Add:
        return (
          <>
            <MapContainer />
            <AddContainer />;
          </>
        );
      case ApplicationMode.View:
        return (
          <>
            <MapContainer />
            <EntitiesContainer />;
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        currentMode,
        switchMode,
        renderContentByMode,
      }}
      children={children}
    ></ApplicationContext.Provider>
  );
};
