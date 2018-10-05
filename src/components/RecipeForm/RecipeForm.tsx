import * as React from 'react';
import { connect } from 'react-redux';

import { emptyRecipe } from '../../_config/exampleRecipeList';
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
import { buttonWrapperStyle } from './RecipeFormStyles';

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
  // recipe: IRecipe;
  name: string;
  preparationTime: number;
  cookingTime: number;
}

export class RecipeFormComponent extends React.Component<IRecipeFormProps, IRecipeFormState> {
  constructor(props: IRecipeFormProps) {
    super(props);
    const { name, preparationTime, cookingTime } = this.props.selectedRecipe || emptyRecipe;
    this.state = {
      cookingTime,
      name,
      preparationTime,
    };
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onRecipeNameChange = this.onRecipeNameChange.bind(this);
    this.onRecipePreparationTimeChange = this.onRecipePreparationTimeChange.bind(this);
    this.onRecipeCookingTimeChange = this.onRecipeCookingTimeChange.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  // public componentWillReceiveProps(newProps: IRecipeFormProps) {
  //   this.setState({
  //     recipe: newProps.selectedRecipe
  //   })
  // }

  public onRecipePreparationTimeChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const preparationTime = Number(target.value);
    this.setState({ preparationTime });
  }

  public onRecipeCookingTimeChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const cookingTime = Number(target.value);
    this.setState({ cookingTime });
  }

  public onRecipeNameChange(event: React.ChangeEvent) {
    this.setState({ name: (event.target as HTMLInputElement).value });
  }

  // public onChangeHandler(event: React.ChangeEvent) {
  //   const newRecipeState = { ...this.state.recipe };
  //   const target = event.target as HTMLInputElement;
  //   newRecipeState[target.name] = target.type === 'text' ? target.value : Number(target.value);
  //   this.setState({ recipe: newRecipeState });
  // }

  public saveRecipe() {
    const recipe = {
      ...this.props.selectedRecipe,
      cookingTime: this.state.cookingTime,
      name: this.state.name,
      preparationTime: this.state.preparationTime
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
    return (
      <div className='recipe form'>
        <h2>
          {this.props.selectedRecipe ? 'Edit Recipe' : 'Create New Recipe'}
        </h2>
        <form >
          <label>
            Recipe Title
          <input
              required={true}
              type='text'
              value={this.state.name}
              onChange={this.onRecipeNameChange}
            />
          </label>
          <label>
            Preparation Time
          <input
              name='preparationTime'
              required={true}
              type='number'
              step='1'
              min='0'
              value={this.state.preparationTime}
              onChange={this.onRecipePreparationTimeChange}
            />
          </label>
          <label>
            Cooking Time
          <input
              name='cookingTime'
              required={true}
              type='number'
              step='1'
              min='0'
              value={this.state.cookingTime}
              onChange={this.onRecipeCookingTimeChange}
            />
          </label>
          <div className={buttonWrapperStyle}>
            <IconButton onClickCallback={this.saveRecipe} buttonText='Save Recipe' icon={<Edit />} color={IconButtonColor.GREEN} />
            <IconButton onClickCallback={this.cancelHandler} buttonText='Cancel' icon={<Cross />} color={IconButtonColor.RED} />
          </div>
        </form>
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
