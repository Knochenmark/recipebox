import {
  Form,
  Option,
  Select,
  Text
} from 'informed';
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
  formStyle,
  recipeFormContentStyle
} from './RecipeFormStyles';

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
  name: string;
  preparationTime: number;
}

export class RecipeFormComponent extends React.Component<IRecipeFormProps, IRecipeFormState> {
  private formApi: any;

  constructor(props: IRecipeFormProps) {
    super(props);
    const {
      cookingTime,
      difficulty,
      imageUrl,
      name,
      preparationTime,
    } = this.props.selectedRecipe || emptyRecipe;
    this.state = {
      cookingTime,
      difficulty,
      imageUrl,
      name,
      preparationTime,
    };
    this.saveRecipe = this.saveRecipe.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }

  public componentDidMount() {
    this.formApi.setValue('imageUrl', this.state.imageUrl);
    this.formApi.setValue('name', this.state.name);
    this.formApi.setValue('preparationTime', this.state.cookingTime);
    this.formApi.setValue('cookingTime', this.state.cookingTime);
    this.formApi.setValue('difficulty', this.state.difficulty);
    // TODO: Add ingredients input field
  }

  public saveRecipe() {
    const {
      name,
      imageUrl,
      difficulty,
      preparationTime,
      cookingTime
    } = this.formApi.getState().values;
    const recipe = {
      ...this.props.selectedRecipe,
      cookingTime,
      difficulty,
      imageUrl,
      name,
      preparationTime,
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

  public setFormApi(formApi: any) {
    this.formApi = formApi;
  }

  public render(): JSX.Element {
    return (
      <div className={recipeFormContentStyle}>
        <h2>
          {this.props.selectedRecipe ? 'Edit Recipe' : 'Create New Recipe'}
        </h2>
        <Form getApi={this.setFormApi} className={formStyle}>
          <label htmlFor="recipe-image">Image Url</label>
          <Text field="imageUrl" id="recipe-image" />
          <label htmlFor="recipe-name">Recipe Title</label>
          <Text field="name" id="recipe-name" />
          <label htmlFor="recipe-preparation">Preparation Time</label>
          <Text field="preparationTime" id="recipe-preparation" />
          <label htmlFor="recipe-cooking">Cooking Time</label>
          <Text field="cookingTime" id="recipe-cooking" />
          <label htmlFor="recipe-difficulty">Difficulty</label>
          <Select field="difficulty" id="recipe-difficulty">
            <Option value={Difficulty.BEGINNER}>{Difficulty.BEGINNER}</Option>
            <Option value={Difficulty.ADVANCED}>{Difficulty.ADVANCED}</Option>
            <Option value={Difficulty.EXPERT}>{Difficulty.EXPERT}</Option>
          </Select>
        </Form>
        <div className={buttonWrapperStyle}>
          <IconButton onClickCallback={this.saveRecipe} buttonText='Save Recipe' icon={<Edit />} color={IconButtonColor.GREEN} />
          <IconButton onClickCallback={this.cancelHandler} buttonText='Cancel' icon={<Cross />} color={IconButtonColor.RED} />
        </div>
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
