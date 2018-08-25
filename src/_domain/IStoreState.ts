import { IRecipe } from './IRecipe';

export interface IStoreState {
  isEditMode: boolean;
  recipes: IRecipe[];
  isIndexVisible: boolean;
  selectedRecipe: IRecipe;
}
