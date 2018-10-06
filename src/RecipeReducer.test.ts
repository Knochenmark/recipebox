import { exampleRecipeList } from './_config/exampleRecipeList';
import { IRecipe } from './_domain/IRecipe';
import { IStoreState } from './_domain/IStoreState';
import { TabBarItem } from './_domain/TabBarItem';
import * as RecipeActions from './actions/RecipeActions';
import RecipeReducer, { initialState } from './RecipeReducer';
<<<<<<< HEAD
=======
import { LocalStorageWrapper } from './_domain/LocalStorageWrapper';
>>>>>>> 4c8d117763686cb2c661b739d4e1b520b325e129

describe('Should test Recipes reducer', () => {
  test('test if set selected tab action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      selectedTab: TabBarItem.BOOKMARKS
    };
    const setSelectedTabAction: RecipeActions.ISetSelectedTabAction = {
      selectedTab: TabBarItem.BOOKMARKS,
      type: RecipeActions.actionTypes.SET_SELECTED_TAB
    };
    const actualResult = RecipeReducer(undefined, setSelectedTabAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set search value action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      searchValue: 'tomato soup'
    };
    const setSearchValueAction: RecipeActions.ISearchValueAction = {
      searchValue: 'tomato soup',
      type: RecipeActions.actionTypes.SET_SEARCH_VALUE
    };
    const actualResult = RecipeReducer(undefined, setSearchValueAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set index visibility action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      isIndexVisible: false
    };
    const setIndexVisibilityAction: RecipeActions.ISetIndexVisibilityAction = {
      isIndexVisible: false,
      type: RecipeActions.actionTypes.SET_INDEX_VISIBILITY
    };
    const actualResult = RecipeReducer(undefined, setIndexVisibilityAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if set edit mode action works correctly', () => {
    const expectedResult: IStoreState = {
      ...initialState,
      isEditMode: true
    };
    const setEditModeAction: RecipeActions.ISetEditModeAction = {
      isEditMode: true,
      type: RecipeActions.actionTypes.SET_EDIT_MODE
    };
    const actualResult = RecipeReducer(undefined, setEditModeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if delete recipe action works correctly', () => {
    const expectedResult = {
      /* Type not specified here as the reducer needs to be fixed to return IStoreState type */
      ...initialState,
      isIndexVisible: true,
      recipes: exampleRecipeList.slice(0, 1),
      selectedRecipe: undefined
    };
    const deleteRecipeAction: RecipeActions.IDeleteRecipeAction = {
      recipe: exampleRecipeList[1],
      type: RecipeActions.actionTypes.DELETE_RECIPE
    };
    const actualResult = RecipeReducer(undefined, deleteRecipeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if edit recipe action works correctly', () => {
    const expectedResult: IStoreState = { ...initialState };
    expectedResult.recipes[0].name = 'updated name';
    const editRecipeAction: RecipeActions.IUpdateRecipeAction = {
      recipe: initialState.recipes[0],
      recipeName: 'updated name',
      type: RecipeActions.actionTypes.UPDATE_RECIPE
    };
    const actualResult = RecipeReducer(undefined, editRecipeAction);

    expect(actualResult).toEqual(expectedResult);
  });

  test('test if save recipe action works correctly', () => {
    const newRecipe: IRecipe = {
      ...exampleRecipeList[0],
      name: 'Some new recipe'
    };
    const expectedResult: IStoreState = {
      ...initialState,
      isEditMode: false,
      recipes: [...initialState.recipes, newRecipe],
      selectedRecipe: newRecipe
    };
    const saveRecipeAction: RecipeActions.ISaveRecipeAction = {
      recipe: newRecipe,
      type: RecipeActions.actionTypes.SAVE_RECIPE
    };
    const actualResult = RecipeReducer(undefined, saveRecipeAction);

    expect(actualResult).toEqual(expectedResult);
  });
});
