import { Difficulty } from '../_domain/Difficulty';
import { IRecipe } from '../_domain/IRecipe';

export const exampleRecipeList: IRecipe[] = [{
  cookingTime: 25,
  difficulty: Difficulty.BEGINNER,
  imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
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
  instructions: `Carefully remove the tomato skin by cutting a cross into the tomatoes and pouring hot water over them. Then cut the tomatoes into small pieces. Also cut the onions into small cubes and press the garlic cloves.

  Heat the olive oil in a pot and roast onions and garlic for about 3min. Then add the tomato pieces. After a few minutes add the stock and spices (except the parsley). Cook everything on low temperature for about 20 minutes.

  Add the tomato paste and use a immersion blender to mash the tomato pieces.

  Finally salt to your taste and serve with a little parsley.`,
  isBookmarked: false,
  name: "Tomato soup",
  preparationTime: 20,
}, {
  cookingTime: 25,
  difficulty: Difficulty.ADVANCED,
  imageUrl: 'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg',
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
}, {
  cookingTime: 60,
  difficulty: Difficulty.EXPERT,
  imageUrl: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
  ingredients: [
      '200g flour',
      '300g Sugar',
      '200g margarine',
      '4 eggs',
      '½ backing powder',
      '1 vanilla sugar',
      '1 vanilla pudding powder',
      '1 Tablespoon butter',
      '1 Teaspoon lobster paste',
      '500g quark',
      '200g sour cream',
      '200g sweet cream',
  ],
  instructions: `For the shortcrust pastry:

  Add 200g flour, 75g sugar, 75g margarine and 1 egg into a bowl, mix it and knead everything together quickly.

  Put the dough into a springform pan and raise the edge about 2-3cm in the form.

  For the filling:

  Add 125g margarine, 225g sugar, vanilla sugar, vanilla pudding powder and 3 eggs into a bowl and mix everything.

  Then mix in the quark and sour cream. Whip the sweet cream and mix it in too.

  Pre heat the oven to 180°C top/bottom heat.

  Add the filling into the springform pan, even out the surface and bake it for 1hour.`,
  isBookmarked: false,
  name: "Cheese cake",
  preparationTime: 30,
}, {
  cookingTime: 30,
  difficulty: Difficulty.BEGINNER,
  imageUrl: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cornbread_86386_16x9.jpg',
  ingredients: [
      '375g plain flour',
      '225g cornmeal',
      '1 tsp salt',
      '4 tsp baking powder',
      '110g sugar',
      '480ml oz milk',
      '2 free-range eggs',
      '110g butter, melted, plus extra for greasing',
      'small tin sweetcorn kernels, drained (or use fresh sweetcorn)'
  ],
  instructions: `
  Preheat the oven to 200C/Gas 6. Grease 23cm square baking pan with melted butter.

  In a large bowl, combine all the ingredients together except for the sweetcorn kernels. Mix until you have the consistency of a sponge cake batter, then add the sweetcorn.

  Stir to combine thoroughly, then pour into the prepared baking pan. Bake for about 20 minutes in the top of the oven. (Alternatively, you can bake these in a muffin tray lined with paper cases.)

  The cornbread is ready when it has a golden colour and is springy to the touch. Allow to cool slightly before cutting.`,
  isBookmarked: false,
  name: 'Cornbread',
  preparationTime: 30
}, {
  cookingTime: 10,
  difficulty: Difficulty.BEGINNER,
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Koukouvagia.jpg/220px-Koukouvagia.jpg',
  ingredients: [
      'oregano',
      'salt',
      'pepper',
      'olive oil',
      '60g (2.2 oz) feta cheese',
      '1 large tomatoe',
      '1 barley rusk'
  ],
  instructions: `Splash a bit of water on the barley and allow it to moisten a bit.

  Either grate the tomato with a large grate or chop it up in very small pieces, and then drain the liquid, then add a little salt.

  Crumble the feta cheese.

  Place the rusk on a plate and spread the grated/chopped tomato on the rusk and then add top it with the crumbled feta cheese.

  Sprinkle a bit of pepper and oregano over the Feta cheese and then pour a touch of olive oil over it.`,
  isBookmarked: false,
  name: "Dakos",
  preparationTime: 5,
}];

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
