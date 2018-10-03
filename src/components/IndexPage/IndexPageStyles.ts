import { style } from 'typestyle';

export const indexPageStyle = style({
  $nest: {
    '& button': {
      backgroundColor: 'lightblue',
      margin: 'auto auto 0 auto'
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
