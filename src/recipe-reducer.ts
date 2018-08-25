import { exampleRecipes } from './_config/exampleRecipes';
import { IStoreState } from './_domain/IStoreState';
import {
  Action,
  actionTypes,
  ICreateRecipeAction,
  IIndexAction,
  ISetSelectedRecipeAction
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
      const { recipeName } = action as ISetSelectedRecipeAction;
      return {
        ...state,
        selectedRecipe: state.recipes.find(recipe => recipe.name === recipeName)
      }
    default:
      return { ...state };
  }
}

export const getRecipes = (state: IStoreState) => state && state.recipes;
export const getSelectedRecipe = (state: IStoreState) => state && state.selectedRecipe;

export default recipes
