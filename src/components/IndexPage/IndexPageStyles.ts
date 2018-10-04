import { style } from 'typestyle';

import cookingImage from '../../assets/cooking01.jpg';

export const indexPageStyle = style({
  $nest: {
    '& button': {
      margin: 'auto auto 0 auto'
    }
  },
  backgroundColor: '#fff',
  backgroundImage: `url(${cookingImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',


  height: '100vh',
  left: 0,
  margin: 0,
  padding: '1rem',
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: 1
});

export const indexPageContentStyle = style({
  backgroundColor: 'rgba(255,255,255,0.75)',
  borderRadius: '24px',
  color: '#666',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '1rem',
  width: '100%',
})
