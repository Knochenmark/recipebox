import { style } from 'typestyle';

const $black = '#1d242b';
const $green = '#38B87C';

export const iconButtonStyle = style({
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  margin: '1rem',
  outline: 0,
  overflow: 'hidden',
});

export const iconButtonIconStyle = style({
  $nest: {
    '& i': {
      $nest: {
        '& svg': {
          fill: $green,
          height: '18px',
          margin: '6px',
          width: '18px',
        }
      },
    },
  },
  background: $black,
  borderBottomLeftRadius: '2px',
  borderTopLeftRadius: '2px',
  fill: '#fff',
  fontSize: '18px',
  height: '30px',
  lineHeight: '30px',
  textAlign: 'center',
  width: '30px',
});

export const iconButtonTextStyle = style({
  background: $green,
  borderBottomRightRadius: '2px',
  borderTopRightRadius: '2px',
  color: '#fff',
  fontWeight: 'lighter',
  height: '30px',
  lineHeight: '30px',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
  transition: '0.2s all',
  width: '120px',
});
