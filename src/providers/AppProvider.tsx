import React, { useReducer } from 'react';

import { User, IWebtoon } from '../types';
import { getStorage, setStorage } from '../utils/Functions';

import createCtx from '../utils/createCtx';

interface Context {
  state: State;
  setUser: (user: User) => void;
  resetUser: () => void;
  callDefault: () => void;
  setFavorWebtoon: (webtoon: IWebtoon) => void;
  resetFavorWebtoon: () => void;
}
const [useCtx, Provider] = createCtx<Context>();

export enum ActionType {
  ResetUser = 'reset-user',
  SetUser = 'set-user',
  CallDefault = 'call-default',
  SetFavorWebtoon = 'set-favor-webtoon',
  ResetFavorWebtoon = 'reset-favor-webtoon',
}

export interface State {
  user: User;
  favorWebtoons: IWebtoon[];
}

const initialState: State = {
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
  favorWebtoons: JSON.parse(getStorage('data') || '[]') as IWebtoon[],
};

interface SetUserAction {
  type: ActionType.SetUser;
  payload: User;
}

interface ResetUserAction {
  type: ActionType.ResetUser;
}

interface SetFavorWebtoonAction {
  type: ActionType.SetFavorWebtoon;
  payload: IWebtoon;
}

interface ResetFavorWebtoonAction {
  type: ActionType.ResetFavorWebtoon;
}

interface GetStateAction {
  type: ActionType.CallDefault;
}

type Action =
  | GetStateAction
  | SetUserAction
  | ResetUserAction
  | SetFavorWebtoonAction
  | ResetFavorWebtoonAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const callDefault = (dispatch: React.Dispatch<GetStateAction>) => (): void => {
  dispatch({
    type: ActionType.CallDefault,
  });
};

const setUser = (dispatch: React.Dispatch<SetUserAction>) => (
  user: User,
): void => {
  dispatch({
    type: ActionType.SetUser,
    payload: user,
  });
};

const resetUser = (dispatch: React.Dispatch<ResetUserAction>) => (): void => {
  dispatch({
    type: ActionType.ResetUser,
  });
};

const setFavorWebtoon = (dispatch: React.Dispatch<SetFavorWebtoonAction>) => (
  webtoon: IWebtoon,
): void => {
  dispatch({
    type: ActionType.SetFavorWebtoon,
    payload: webtoon,
  });
};

const resetFavorWebtoon = (
  dispatch: React.Dispatch<ResetFavorWebtoonAction>,
) => (): void => {
  dispatch({
    type: ActionType.ResetFavorWebtoon,
  });
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ResetUser:
      return initialState;
    case ActionType.SetUser:
      return { ...state, user: action.payload };
    case ActionType.ResetFavorWebtoon:
      return { ...state, favorWebtoons: resetFavorWebtoons() };
    case ActionType.SetFavorWebtoon:
      return {
        ...state,
        favorWebtoons: toogleFavorWebtoons(state.favorWebtoons, action.payload),
      };
    default:
      return state;
  }
};

function resetFavorWebtoons(): IWebtoon[] {
  setStorage('data', '[]');
  return [];
}

function toogleFavorWebtoons(data: IWebtoon[], webtoon: IWebtoon) : IWebtoon[] {
  const distinctIndex = data.findIndex((toon) => toon.id === webtoon.id);
  const favorWebtoons =
    distinctIndex === -1
      ? data.concat(webtoon)
      : data.filter((toon) => toon.id !== webtoon.id);
  setStorage('data', JSON.stringify(favorWebtoons));
  return favorWebtoons;
}

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);
  const actions: Omit<Context, 'state'> = {
    setUser: setUser(dispatch),
    resetUser: resetUser(dispatch),
    callDefault: callDefault(dispatch),
    setFavorWebtoon: setFavorWebtoon(dispatch),
    resetFavorWebtoon: resetFavorWebtoon(dispatch),
  };

  return <Provider value={{ state, ...actions }}>{props.children}</Provider>;
}

export { useCtx as useAppContext, AppProvider };
