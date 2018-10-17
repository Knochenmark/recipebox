import { style } from 'typestyle';

import cookingImage from '../../assets/cooking04.jpg';

export const buttonWrapperStyle = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
});

export const recipeFormContentStyle = style({
  backgroundColor: 'rgba(255,255,255,0.55)',
  color: '#666',
  height: '100%',
  padding: '1rem',
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
});

export const formStyle = style({
  alignItems: 'flex-start',
  backgroundImage: `url(${cookingImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
});

export const recipeFormFieldStyle = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5rem 0',
});

export const recipeFormFieldInputStyle = style({
  display: 'flex',
});

export const recipeFormIngredientIconStyle = style({
  $nest: {
    '& >svg': {
      height: '18px',
      width: '18px',
      margin: '6px',
    },
    '&.remove >svg': {
      fill: '#F34541'
    },
    '&.add >svg': {
      fill: '#38B87C'
    },
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
