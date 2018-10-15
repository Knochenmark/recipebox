import {
  Field,
  FieldArray,
  FieldProps,
  Form,
  Formik,
  FormikProps
} from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';

import { emptyRecipe } from '../../_config/exampleRecipeList';
import { Difficulty } from '../../_domain/Difficulty';
import { IRecipe } from '../../_domain/IRecipe';
import { IStoreState } from '../../_domain/IStoreState';
import {
  saveRecipeAction,
  setEditModeAction,
  setIndexVisibilityAction,
  updateRecipeAction
} from '../../actions/RecipeActions';
import { getSelectedRecipe } from '../../RecipeReducer';
import { IconButton } from '../IconButton/IconButton';
import { IconButtonColor } from '../IconButton/IconButttonColor';
import Cross from '../Icons/Cross';
import Edit from '../Icons/Edit';
import {
  buttonWrapperStyle,
  recipeFormContentStyle
} from './RecipeFormStyles';
import { RecipeValidationSchema } from './RecipeValidationSchema';

interface IRecipeFormValues {
  cookingTime: string;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  name: string;
  preparationTime: string;
}

export interface IRecipeFormProps {
  disableEditMode: () => void;
  saveRecipeAction: (recipe: IRecipe) => void;
  selectedRecipe: IRecipe;
  showIndex: () => void;
  updateRecipeAction: (recipe: IRecipe, recipeName: string) => void;
}

interface IRecipeFormStateProps {
  selectedRecipe: IRecipe;
}

interface IRecipeFormDispatchProps {
  disableEditMode: () => void;
  saveRecipeAction: (recipe: IRecipe) => void;
  showIndex: () => void;
  updateRecipeAction: (recipe: IRecipe, recipeName: string) => void;
}

interface IRecipeFormState {
  cookingTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  name: string;
  preparationTime: number;
}

export class RecipeFormComponent extends React.Component<IRecipeFormProps, IRecipeFormState> {

  constructor(props: IRecipeFormProps) {
    super(props);
    const {
      cookingTime,
      difficulty,
      imageUrl,
      ingredients,
      instructions,
      name,
      preparationTime,
    } = this.props.selectedRecipe || emptyRecipe;
    this.state = {
      cookingTime,
      difficulty,
      imageUrl,
      ingredients,
      instructions,
      name,
      preparationTime,
    };
    this.saveRecipe = this.saveRecipe.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  public saveRecipe(formValues: any) {
    const { name, preparationTime, cookingTime, imageUrl, difficulty, instructions, ingredients } = formValues;
    const recipe = {
      ...this.props.selectedRecipe,
      cookingTime: Number(cookingTime),
      difficulty,
      imageUrl,
      ingredients,
      instructions,
      name,
      preparationTime: Number(preparationTime),
    };
    if (this.props.selectedRecipe) {
      this.props.updateRecipeAction(recipe, this.props.selectedRecipe.name);
    } else {
      this.props.saveRecipeAction(recipe);
    }
  }

  public cancelHandler() {
    if (this.props.selectedRecipe) {
      this.props.disableEditMode();
    } else {
      this.props.disableEditMode();
      this.props.showIndex();
    }
  }

  public render(): JSX.Element {
    const difficultyOptions = Object.keys(Difficulty).map((d: string, i: number) =>
      <option key={d} value={Difficulty[d]}>{Difficulty[d]}</option>
    );

    return (
      <div className={recipeFormContentStyle}>
        <h2>
          {this.props.selectedRecipe ? 'Edit Recipe' : 'Create New Recipe'}
        </h2>
        <Formik
          initialValues={{
            cookingTime: this.state.cookingTime,
            imageUrl: this.state.imageUrl,
            name: this.state.name,
            preparationTime: this.state.preparationTime,
            difficulty: this.state.difficulty,
            instructions: this.state.instructions,
            ingredients: this.state.ingredients,
          }}
          validationSchema={RecipeValidationSchema}
          onSubmit={this.saveRecipe}
          render={(formikBag: FormikProps<IRecipeFormValues>) => (
            <Form>
              <Field
                name="imageUrl"
                render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                  <div>
                    <input type="text" {...field} placeholder="Preview Image Url" />
                    {form.touched.imageUrl && form.errors.imageUrl && <span>{form.errors.imageUrl}</span>}
                  </div>
                )}
              />
              <Field
                name="name"
                render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                  <div>
                    <input type="text" {...field} placeholder="Recipe Name" />
                    {form.touched.name && form.errors.name && <span>{form.errors.name}</span>}
                  </div>
                )}
              />
              <Field
                name="preparationTime"
                render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                  <div>
                    <input type="text" {...field} placeholder="Preparation Time in min" />
                    {form.touched.preparationTime && form.errors.preparationTime && <span>{form.errors.preparationTime}</span>}
                  </div>
                )}
              />
              <Field
                name="cookingTime"
                render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                  <div>
                    <input type="text" {...field} placeholder="Cooking Time in min" />
                    {form.touched.cookingTime && form.errors.cookingTime && <span>{form.errors.cookingTime}</span>}
                  </div>
                )}
              />
              <Field
                name="difficulty"
                render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                  <div>
                    <select {...field}>
                      {difficultyOptions}
                    </select>
                  </div>
                )}
              />
              <Field
                name="instructions"
                render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                  <div>
                    <textarea rows={4} {...field} placeholder="Add your cooking instructions here" />
                    {form.touched.instructions && form.errors.instructions && <span>{form.errors.instructions}</span>}
                  </div>
                )}
              />
              <FieldArray
                name="ingredients"
                render={arrayHelpers => (
                  <div>
                    {formikBag.values.ingredients && formikBag.values.ingredients.length > 0 ? (
                      formikBag.values.ingredients.map((ingredient, index) => (
                        <div key={index}>
                          <Field name={`ingredients.${index}`} value={formikBag.values.ingredients[index]} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            Remove -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.push('')}
                          >
                            Add +
                          </button>
                        </div>
                      ))
                    ) : (
                        <button type="button" onClick={() => arrayHelpers.push('')}>
                          Add an ingredients
                        </button>
                      )}
                  </div>
                )}
              />
              <div className={buttonWrapperStyle}>
                <IconButton
                  isSubmitButton={true}
                  buttonText='Save Recipe'
                  icon={<Edit />}
                  color={IconButtonColor.GREEN}
                />
                <IconButton
                  onClickCallback={this.cancelHandler}
                  buttonText='Cancel'
                  icon={<Cross />}
                  color={IconButtonColor.RED}
                />
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): IRecipeFormStateProps => {
  return {
    selectedRecipe: getSelectedRecipe(state)
  }
}

const mapDispatchToProps = (dispatch: any): IRecipeFormDispatchProps => {
  return {
    disableEditMode: () => dispatch(setEditModeAction(false)),
    saveRecipeAction: (recipe: IRecipe) => dispatch(saveRecipeAction(recipe)),
    showIndex: () => dispatch(setIndexVisibilityAction(true)),
    updateRecipeAction: (recipe: IRecipe, recipeName: string) => dispatch(updateRecipeAction(recipe, recipeName))
  }
}

export const RecipeForm = connect(mapStateToProps, mapDispatchToProps)(RecipeFormComponent)
