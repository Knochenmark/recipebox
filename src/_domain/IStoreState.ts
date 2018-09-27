import { IRecipe } from './IRecipe';

export interface IStoreState {
  isEditMode: boolean;
  isIndexVisible: boolean;
  recipes: IRecipe[];
  searchValue: string;
  selectedRecipe: IRecipe;
  selectedTab: string;
}
