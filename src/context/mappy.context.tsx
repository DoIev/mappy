import { Context, createContext, ReactElement, useState } from "react";
import { AddContainer } from "../components/add-container/add.container";
import { EntitiesContainer } from "../components/entities/entities.container";
import { MapContainer } from "../components/map/map.container";

export enum MappyMode {
  View,
  Add,
}

export interface IMappyContext {
  currentMode: MappyMode;
  switchMode: (mode: MappyMode) => void;
  renderContentByMode: () => HTMLElement | ReactElement;
}

export const MappyContext: Context<IMappyContext> =
  createContext<IMappyContext>({
    currentMode: MappyMode.View,
    switchMode: () => {},
    renderContentByMode: () => <></>,
  });

export const MappyContextProvider = ({ children }: any) => {
  const [currentMode, setCurrentMode] = useState<MappyMode>(MappyMode.View);

  const switchMode = (mode: MappyMode) => {
    setCurrentMode(mode);
  };

  const renderContentByMode = () => {
    switch (currentMode) {
      case MappyMode.Add:
        return (
          <>
            <MapContainer />
            <AddContainer />;
          </>
        );
      case MappyMode.View:
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
    <MappyContext.Provider
      value={{
        currentMode,
        switchMode,
        renderContentByMode,
      }}
      children={children}
    ></MappyContext.Provider>
  );
};
