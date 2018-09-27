import { IRecipe } from './IRecipe';

export interface IStoreState {
  isEditMode: boolean;
  recipes: IRecipe[];
  isIndexVisible: boolean;
  searchValue: string;
  selectedRecipe: IRecipe;
}
