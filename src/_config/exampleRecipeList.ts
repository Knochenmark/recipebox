import { Difficulty } from '../_domain/Difficulty';
import { IRecipe } from '../_domain/IRecipe';

export const exampleRecipeList: IRecipe[] = [
  {
    cookingTime: 60,
    difficulty: Difficulty.BEGINNER,
    imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ingredients: [
      '1kg Tomatoes',
      '2 Onions',
      'Oliveoil',
      '750ml stock'
    ],
    isBookmarked: false,
    name: "Tomato soup",
    preparationTime: 30,
  }, {
    cookingTime: 45,
    difficulty: Difficulty.ADVANCED,
    imageUrl: 'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ingredients: [
      '1 Pepper',
      '1 small leek',
      '1 Onion',
      '1 Garlic',
      '1 Carrot',
      '400g sea fish',
      '400ml fish stock',
      '1 Tomato',
      'Oliveoil',
      'Salt & Pepper'
    ],
    isBookmarked: false,
    name: "Fish soup",
    preparationTime: 15,
  }
];
