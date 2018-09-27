import { style } from 'typestyle';

export const indexPageStyle = style({
  $nest: {
    '& button': {
      backgroundColor: 'lightblue',
      margin: 'auto'
    }
  },
  backgroundColor: '#fff',
  color: '#849493',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  left: 0,
  margin: 0,
  padding: '1rem',
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: 1
});

export const indexPageItemStyle = style({
  $nest: {
    '& >div': {
      flexBasis: '50%',
      padding: '0.5rem'
    }
  },
  alignItems: 'flex-start',
  display: 'flex',
  flexWrap: 'wrap'
});

export const indexPageRecipeStyle = style({
  $nest: {
    '& >li>span': {
      $nest: {
        '&:hover': {
          color: '#ff6347',
          cursor: 'pointer',
          textDecoration: 'underline'
        }
      },
      color: '#ff5537',
    }
  },
  listStyle: 'none',
});
