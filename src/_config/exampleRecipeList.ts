import { Difficulty } from '../_domain/Difficulty';
import { IRecipe } from '../_domain/IRecipe';

export const exampleRecipeList: IRecipe[] = [
  {
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
  },
  {
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
    cookingTime: 40,
    difficulty: Difficulty.BEGINNER,
    imageUrl: 'https://c1.staticflickr.com/4/3496/3903180442_8ec5a4de0a_b.jpg',
    ingredients: [
      '8 medium leeks, (about 3 pounds), whites and light-green parts only, quartered lengthwise and halved crosswise, cleaned',
      '1 1/2 pounds salmon fillet, halved lengthwise then crosswise',
      '2 tablespoons olive oil',
      'coarse salt and freshly ground pepper',
      'lemon wedges, for serving'
    ],
    instructions: `
    Preheat oven to 450 degrees. On a large rimmed baking sheet, toss leeks with oil; season with salt and pepper. Roast, tossing once, until beginning to soften, 12 to 15 minutes.

    Remove leeks from oven, toss with pan juices to coat, and push to edges of baking sheet. Arrange salmon pieces in center, and season generously with salt and pepper.

    Return to oven; roast until salmon is just opaque throughout, 10 to 15 minutes (depending on thickness). Serve salmon with leeks and lemon wedges.`,
    isBookmarked: false,
    name: 'Salmon with leeks',
    preparationTime: 10,
  }, {
    cookingTime: 15,
    difficulty: Difficulty.BEGINNER,
    imageUrl: 'https://www.maxpixel.net/static/photo/1x/Green-Vegetables-Beets-Purple-2861272.jpg',
    ingredients: [
      '1 can (16 ounces) sliced or diced beets',
      '2 tablespoons sugar',
      '1 tablespoon cornstarch',
      '1/4 teaspoon salt',
      '3 to 4 tablespoons white vinegar',
      '2 tablespoons butter'
    ],
    instructions: `
    Drain beets, reserving 1/3 cup juice. In a saucepan, combine the sugar, cornstarch and salt. Stir in beet juice and vinegar; cook and stir over medium-high heat until thickened and bubbly. Cook and stir 2 minutes more. Add beets and butter; heat through.`,
    isBookmarked: false,
    name: 'Glazed beets',
    preparationTime: 15,
  }, {
    cookingTime: 30,
    difficulty: Difficulty.ADVANCED,
    imageUrl: 'https://c2.staticflickr.com/4/3252/3287806712_4e06886279_z.jpg',
    ingredients: [
      '3 cups elbow macaroni, uncooked',
      '2 tablespoons butter',
      '2 tablespoons flour',
      '1 cup half n half (warmed)',
      '3½ cups Colby Jack cheese, shredded & divided',
      '½ cup Smoked Cheddar cheese, shredded & divided',
      '1½ cups whole milk',
      '2 eggs, slightly beaten',
      'salt & pepper'
    ],
    instructions: `
    Preheat oven to 350 F.

    Butter an 8x10 casserole dish. Set aside.

    Bring a large pot of seasoned water to a boil. (I season my water generously with salt, pepper, and garlic powder. It should taste a bit salty)

    Cook pasta until a little under al dente ( about 7 minutes)

    Drain and set aside.

    In a large saucepan, over medium heat, melt butter.

    Whisk in flour and continue stirring until golden.

    Slowly whisk in half n half.

    Continue stirring until smooth.

    Stir in 1 cup Colby Jack cheese until sauce is creamy.

    Pour cheese sauce over macaroni, tossing to coat.

    Pour macaroni into prepared pan. Set aside.

    In a large bowl, add milk, 2 cups Colby Jack cheese, and ¼ cup Smoked Cheddar.

    Taste mixture and add salt and pepper until the mixture tastes seasoned to your liking.

    Add in eggs and stir well to make sure the eggs are mixed in.

    Pour egg mixture over the macaroni. (Use a spatula to help push the mixture throughout so that everything isn't just sitting on top). (see note)

    Sprinkle the top with remaining cheeses. (I never need all of it)
    Bake for 30-35 minutes. (may not need this long so check on it at the 25-minute mark)

    Let sit for 10 minutes before serving.`,
    isBookmarked: false,
    name: 'Creamy baked macaroni and cheese',
    preparationTime: 10,
  },
  {
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
    name: 'Dakos',
    preparationTime: 5
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
}, {
    difficulty: Difficulty.BEGINNER,
    imageUrl: 'https://assets.marthastewart.com/styles/wmax-750/d26/basic-pizza-dough-ED105199/basic-pizza-dough-ED105199_horiz.jpg?itok=qRNMoEbM',
    ingredients: [
  
'1 cup (250 ml) warm water'
'1 teaspoon (5 ml) instant yeast'
'1 teaspoon (5 ml) sugar'
'2 cups (500 ml) all-purpose flour'
'1 teaspoon (5 ml) salt'
    ],
    instructions: `In a bowl, combine the water, yeast and sugar. Let stand until the mixture foams on top, about 5 minutes.
In a food processor, it is important to work with the plastic blade or the dough hook. Combine the flour and salt. Increase the speed to medium and add the yeast mixture until a soft ball forms.
Remove the dough from the bowl and knead for a few minutes on a floured surface to prevent sticking.
Place in a lightly oiled bowl and cover with a clean cloth. Let the dough rise for about 30 minutes in warm and draft-free area. Cut the dough in half.
Use the pizza dough immediately or refrigerate it (less than 48 hours), otherwise place it in an airtight bag and freeze.
This recipe will make two 23-cm (9-inch) thin-crust pizzas or two 20-cm (8-inch) thicker crust pizzas.
TO HELP YOU WITH THIS RECIPE`,
    isBookmarked: false,
    name: "Pizza Dough",
    preparationTime: 10,
  }
