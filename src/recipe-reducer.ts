import { exampleRecipes } from './_config/exampleRecipes';
import { IStoreState } from './_domain/IStoreState';
import {
  Action,
  actionTypes,
  ICreateRecipeAction,
  IIndexAction
} from './actions/recipe-actions';

const initialState: IStoreState = {
  isVisible: true,
  recipes: exampleRecipes,
  selectedRecipe: {
    "name": "Tomato soup"
  }
}

const recipes = (state: IStoreState = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_INDEX_VISIBILITY:
      const setIndexVisibilityAction = action as IIndexAction;
      return {
        ...state,
        isVisible: setIndexVisibilityAction.isVisible
      };
    case actionTypes.CREATE_RECIPE:
      const createRecipeAction = action as ICreateRecipeAction;
      return {
        ...state,
        recipes: [createRecipeAction.recipe, ...state.recipes]
      }
    case actionTypes.SET_SELECTED_RECIPE:
      // const { recipeName } = <ISetSelectedRecipeAction>action;
      return {
        ...state,
      }
    default:
      return { ...state };
  }
}

export const getRecipes = (state: IStoreState) => state && state.recipes;

export default recipes
