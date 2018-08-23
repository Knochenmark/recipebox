import { IRecipe } from './IRecipe';

export interface IStoreState {
  recipes: IRecipe[];
  isVisible: boolean;
  selectedRecipe: IRecipe;
}
