import { Context, createContext, ReactElement, useState } from "react";
import { AddContainer } from "../components/add-container/add.container";
import { EntitiesContainer } from "../components/entities/entities.container";

export enum ApplicationMode {
  Main,
  Add,
}

export interface IApplicationContext {
  currentMode: ApplicationMode;
  switchMode: (mode: ApplicationMode) => void;
  renderContentByMode: () => HTMLElement | ReactElement;
}

export const ApplicationContext: Context<IApplicationContext> =
  createContext<IApplicationContext>({
    currentMode: ApplicationMode.Main,
    switchMode: () => {},
    renderContentByMode: () => <></>,
  });

export const ApplicationContextProvider = ({ children }: any) => {
  const [currentMode, setCurrentMode] = useState<ApplicationMode>(
    ApplicationMode.Main
  );

  const switchMode = (mode: ApplicationMode) => {
    setCurrentMode(mode);
  };

  const renderContentByMode = () => {
    switch (currentMode) {
      case ApplicationMode.Add:
        return <AddContainer />;
      case ApplicationMode.Main:
        return <EntitiesContainer />;
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
