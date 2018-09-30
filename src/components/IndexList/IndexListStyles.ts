import { style } from 'typestyle';


export const indexListItemStyle = style({
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

export const indexListRecipeStyle = style({
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
