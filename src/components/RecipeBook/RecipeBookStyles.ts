import { style } from 'typestyle';

export const recipeBookStyle = style({
  $nest: {
    '& .recipe-container': {
      backgroundColor: 'white',
      height: '100%',
      overflowY: 'auto',
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
