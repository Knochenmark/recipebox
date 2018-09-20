import { style } from 'typestyle';

export const recipeBookStyle = style({
  $nest: {
    '& .recipe-container': {
      backgroundColor: 'lightblue',
      height: '100%',
      overflowY: 'auto',
      padding: '1rem',
      position: 'relative',
      transform: 'translateX(100%)',
      transition: 'all 0.4s ease',
      width: '100%',
      zIndex: 2
    },
    '& .recipe-container.visible': {
      transform: 'translateX(0%)',
    }
  },
  height: '100vh',
  overflowX: 'hidden',
  width: '100vw'
});
