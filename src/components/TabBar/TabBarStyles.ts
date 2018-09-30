import { style } from 'typestyle';

export const tabBarStyle = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

export const tabBarItemStyle = style({
  $nest: {
    '&.active': {
      color: 'lightseagreen',
    }
  },
  cursor: 'pointer',
  margin: '0 1rem',
});
