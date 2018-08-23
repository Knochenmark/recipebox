import { IRecipe } from '../_domain/IRecipe';

export enum actionTypes {
  SET_INDEX_VISIBILITY = '[Recipe] Set Index Visibility',
  CREATE_RECIPE = '[Recipe] Create Recipe',
  DELETE_RECIPE = '[Recipe] Delete Recipe',
  SAVE_RECIPE = '[Recipe] Save Recipe',
  SET_SELECTED_RECIPE = '[Recipe] Set selected Recipe'
}

export interface IIndexAction {
  isVisible: boolean;
  type: string;
}

export interface ICreateRecipeAction {
  recipe: IRecipe;
  type: string;
}

export interface ISetSelectedRecipeAction {
  recipeName: string;
  type: string;
}

export const setIndexVisibilityAction = (isVisible: boolean) => ({
  isVisible,
  type: actionTypes.SET_INDEX_VISIBILITY
});

export const createRecipeAction = (recipe: IRecipe) => ({
  recipe,
  type: actionTypes.CREATE_RECIPE
});

export const setSelectedRecipeAction = (recipeName: string) => ({
  recipeName,
  type: actionTypes
});

export type Action = IIndexAction
  | ICreateRecipeAction
  | ISetSelectedRecipeAction;
