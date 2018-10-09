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
      'Olive oil',
      '750ml stock'
    ],
    instructions: `Eat owner's food. Spend six hours per day washing, but still have a crusty butthole scratch at the door then walk away destroy house in 5 seconds, sun bathe chase imaginary bugs.
    Friends are not food chase the pig around the house find a way to fit in tiny box or instead of drinking water from the cat bowl, make sure to steal water from the toilet so destroy the blinds or
    claw your carpet in places everyone can see - why hide my amazing artistic clawing skills?. Curl into a furry donut.`,
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
      'Olive oil',
      'Salt & Pepper'
    ],
    instructions: `Soft kitty warm kitty little ball of furr stick butt in face, lick sellotape for pooping rainbow while flying in a toasted bread costume in space. Claws in your leg kitty ipsum dolor sit amet,
    shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff but jump five feet high and sideways when a shadow moves.`,
    isBookmarked: false,
    name: "Fish soup",
    preparationTime: 15,
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
