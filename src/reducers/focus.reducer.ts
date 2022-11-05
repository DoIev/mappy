export enum ActionType {
  FOCUS_ENTITY,
}

export interface Action {
  type: ActionType;
  payload: any;
}

export const focusReducer = (state: any, action: Action): any => ({
  ...state,
  focusedEntityId: action.payload.entityId,
  focusInitiator: action.payload.focusInitiator,
});
