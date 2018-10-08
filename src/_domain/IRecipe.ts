import { Difficulty } from './Difficulty';

export interface IRecipe {
  name: string;
  imageUrl: string;
  isBookmarked: boolean;
  preparationTime: number;
  cookingTime: number;
  difficulty: Difficulty;
  ingredients: string[];
}
