import { IRecipe } from '../_domain/IRecipe';

export enum actionTypes {
  SET_SELECTED_RECIPE = '[Recipe] Set selected Recipe',
  SET_INDEX_VISIBILITY = '[Recipe] Set Index Visibility',
  SET_EDIT_MODE = '[Recipe] Set Edit Mode',
  DELETE_RECIPE = '[Recipe] Delete Recipe',
  CREATE_RECIPE = '[Recipe] Create Recipe',
  UPDATE_RECIPE = '[Recipe] Update Recipe',
  EDIT_RECIPE = '[Recipe] Edit Recipe',
}

export interface ISetIndexVisibilityAction {
  isIndexVisible: boolean;
  type: string;
}

export interface ISetEditModeAction {
  isEditMode: boolean;
  type: string;
}

export interface ICreateRecipeAction {
  recipe: IRecipe;
  type: string;
}

export interface IDeleteRecipeAction {
  recipe: IRecipe;
  type: string;
}

export interface ISetSelectedRecipeAction {
  recipeName: string;
  type: string;
}

export interface IUpdateRecipeAction {
  updatedRecipe: IRecipe;
  recipeName: string;
  type: string;
}

export const updateRecipeAction = (recipe: IRecipe, recipeName: string) => ({
  recipe,
  recipeName,
  type: actionTypes.UPDATE_RECIPE
});

export const setIndexVisibilityAction = (isIndexVisible: boolean) => ({
  isIndexVisible,
  type: actionTypes.SET_INDEX_VISIBILITY
});

export const setEditModeAction = (isEditMode: boolean) => ({
  isEditMode,
  type: actionTypes.SET_EDIT_MODE
});

export const createRecipeAction = () => ({
  type: actionTypes.CREATE_RECIPE
});

export const deleteRecipeAction = (recipe: IRecipe) => ({
  recipe,
  type: actionTypes.DELETE_RECIPE
});

export const setSelectedRecipeAction = (recipeName: string) => ({
  recipeName,
  type: actionTypes.SET_SELECTED_RECIPE
});

export type Action
  = ICreateRecipeAction
  | IDeleteRecipeAction
  | ISetEditModeAction
  | ISetIndexVisibilityAction
  | ISetSelectedRecipeAction;
