import { Difficulty } from '../_domain/Difficulty';
import { IRecipe } from '../_domain/IRecipe';

export const exampleRecipeList: IRecipe[] = [
  {
    cookingTime: 25,
    difficulty: Difficulty.BEGINNER,
    imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ingredients: [
      '1kg Tomatoes',
      '2 Onions',
      '3 Garlic cloves',
      'Olive oil',
      '750ml stock',
      'Salt & Pepper',
      'Thymian, dried',
      '3 Teaspoons Tomato paste',
      'Parsley'
    ],
    instructions: `Carefully remove the tomato skin by cutting a cross into the tomatoes and pouring hot water over them.
    Then cut the tomatoes into small pieces. Also cut the onions into small cubes and press the garlic cloves.

    Heat the olive oil in a pot and roast onions and garlic for about 3min. Then add the tomato pieces.
    After a few minutes add the stock and spices (except the parsley). Cook everything on low temperature for about 20 minutes.

    Add the tomato paste and use a immersion blender to mash the tomato pieces.

    Finally salt to your taste and serve with a little parsley.`,
    isBookmarked: false,
    name: "Tomato soup",
    preparationTime: 20,
  }, {
    cookingTime: 25,
    difficulty: Difficulty.ADVANCED,
    imageUrl: 'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ingredients: [
      '650g fresh sea fish',
      '75g Shrimps',
      '50g Crayfish',
      'Soup greens',
      '1 Onion',
      '½ Chilipepper',
      '1 Garlic clove',
      '1 Tablespoon butter',
      '1 Teaspoon lobster paste',
      '200g Creme fraiche',
      '400ml fish stock',
      'Whitewine',
      '1 lemon',
      'Dill',
      'Salt',
    ],
    instructions: `Cut the soup green and the onion into small cubes. Chop the chili pepper and garlic clove.

    Heat everything with some butter and deglaze it with about 200ml of the whitewine. Let it cook for a little while.
    Add fish stock with the same amount of water. Then stir in the creme fraiche and the lobster paste. Salt it to your taste and boil everything up.

    Cut the fish into small pieces and add it together with the shrimps and crayfish. Cook everything on low heat for about 15minutes.

    Serve with lemon quarters and fresh cut dill.`,
    isBookmarked: false,
    name: "Fish soup",
    preparationTime: 35,
  }
];

export const emptyRecipe: IRecipe = {
  cookingTime: 0,
  difficulty: Difficulty.BEGINNER,
  imageUrl: '',
  ingredients: [],
  instructions: '',
  isBookmarked: false,
  name: '',
  preparationTime: 0,
}
