import { exampleRecipeList } from './_config/exampleRecipeList';
import { IRecipe } from './_domain/IRecipe';
import { IStoreState } from './_domain/IStoreState';
import { LocalStorageWrapper } from './_domain/LocalStorageWrapper';
import {
  Action,
  actionTypes,
  IDeleteRecipeAction,
  ISetBookmarkAction,
  ISetEditModeAction,
  ISetIndexVisibilityAction,
  ISetSelectedRecipeAction,
  IUpdateRecipeAction
} from './actions/RecipeActions';

const LocalStorage = new LocalStorageWrapper();
const storageRecipeList = LocalStorage.getItem('recipes');
const initialRecipeList = storageRecipeList ? storageRecipeList : exampleRecipeList;
if (!storageRecipeList || storageRecipeList.length === 0) {
  LocalStorage.setItem('recipes', exampleRecipeList);
}

const initialState: IStoreState = {
  isEditMode: false,
  isIndexVisible: true,
  recipes: initialRecipeList,
  selectedRecipe: initialRecipeList[0]
}

const recipes = (state: IStoreState = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_INDEX_VISIBILITY:
      const setIndexVisibilityAction = action as ISetIndexVisibilityAction;
      return {
        ...state,
        isEditMode: false,
        isIndexVisible: setIndexVisibilityAction.isIndexVisible
      };
    case actionTypes.SET_EDIT_MODE:
      const { isEditMode } = action as ISetEditModeAction;
      return {
        ...state,
        isEditMode,
      };
    case actionTypes.CREATE_RECIPE:
      return {
        ...state,
        isEditMode: true,
        isIndexVisible: false,
        selectedRecipe: null,
      };
    case actionTypes.DELETE_RECIPE: {
      const deleteRecipeAction = action as IDeleteRecipeAction;
      const index = state.recipes.findIndex(recipe =>
        recipe.name === deleteRecipeAction.recipe.name);
      const newRecipeList = [...state.recipes];
      newRecipeList.splice(index, 1);
      LocalStorage.setItem('recipes', newRecipeList);
      return {
        ...state,
        isIndexVisible: true,
        recipes: newRecipeList,
        selectedRecipe: null,
      };
    }
    case actionTypes.SET_SELECTED_RECIPE: {
      const { recipeName } = action as ISetSelectedRecipeAction;
      return {
        ...state,
        selectedRecipe: state.recipes.find(recipe => recipe.name === recipeName)
      };
    }
    case actionTypes.UPDATE_RECIPE: {
      const { recipe, recipeName } = action as IUpdateRecipeAction;
      const index = state.recipes.findIndex(r => r.name === recipeName);
      const newRecipeList = [...state.recipes];
      newRecipeList.splice(index, 1); // TODO spread into new object before splice and removal?
      newRecipeList.push(recipe);
      LocalStorage.setItem('recipes', newRecipeList);
      return {
        ...state,
        recipes: newRecipeList
      };
    }
    case actionTypes.SET_BOOKMARK: {
      const { recipeName, isBookmarked } = action as ISetBookmarkAction;
      const bookmarkedRecipe = state.recipes.find(recipe =>
        recipe.name === recipeName);
      if (bookmarkedRecipe) {
        bookmarkedRecipe.isBookmarked = isBookmarked;
      }
      LocalStorage.setItem('recipes', [...state.recipes]);
      return {
        ...state,
        recipes: [...state.recipes]
      }
    }
    default:
      return { ...state };
  }
}

export const getRecipes = (state: IStoreState): IRecipe[] => state && state.recipes;
export const getSelectedRecipe = (state: IStoreState): IRecipe => state && state.selectedRecipe;
export const getEditMode = (state: IStoreState): boolean => state && state.isEditMode;
export const getIndexVisibility = (state: IStoreState): boolean => state && state.isIndexVisible;

export default recipes