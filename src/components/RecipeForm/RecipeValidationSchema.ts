import * as Yup from 'yup';

export const RecipeValidationSchema = Yup.object().shape({
  imageUrl: Yup.string(),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  preparationTime: Yup.string()
    .required('Required')
    .matches(/^[0-9]*$/, 'Must be a number'),
  cookingTime: Yup.string()
    .required('Required')
    .matches(/^[0-9]*$/, 'Must be a number'),
  instructions: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});
