export enum ActionType {
  LOADED_ENTITIES,
  LOADING_ENTITIES,
}

export interface Action {
  type: ActionType;
  payload?: any;
}

export const entitiesReducer = (state: any, action: Action): any => {
  switch (action.type) {
    case ActionType.LOADED_ENTITIES:
      return { ...state, entities: action.payload, isLoadingEntities: false };
    case ActionType.LOADING_ENTITIES:
      return { ...state, isLoadingEntities: true };
    default:
      return state;
  }
};
