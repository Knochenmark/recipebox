import * as React from 'react';
import { connect } from 'react-redux';

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
  recipe: IRecipe;
}

export class RecipeFormComponent extends React.Component<IRecipeFormProps, IRecipeFormState> {
  constructor(props: IRecipeFormProps) {
    super(props);
    this.state = {
      recipe: this.props.selectedRecipe
    };
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onRecipeNameChange = this.onRecipeNameChange.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  public componentWillReceiveProps(newProps: IRecipeFormProps) {
    this.setState({
      recipe: newProps.selectedRecipe
    })
  }

  public onRecipeNameChange(event: React.ChangeEvent) {
    const newRecipeState = { ...this.state.recipe };
    newRecipeState.name = (event.target as HTMLInputElement).value;
    this.setState({ recipe: newRecipeState });
  }

  // public onChangeHandler(event: React.ChangeEvent) {
  //   const newRecipeState = { ...this.state.recipe };
  //   const target = event.target as HTMLInputElement;
  //   newRecipeState[target.name] = target.type === 'text' ? target.value : Number(target.value);
  //   this.setState({ recipe: newRecipeState });
  // }

  public saveRecipe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const recipe = { ...this.state.recipe };
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
        <form onSubmit={this.saveRecipe} >
          <label>
            Recipe Title
          <input
              required={true}
              type='text'
              value={this.state.recipe ? this.state.recipe.name : ''}
              onChange={this.onRecipeNameChange}
            />
          </label>
          {/* <label>
            Preparation Time
          <input
              // name='preparationTime'
              required={true}
              type='number'
              step='1'
              min='0'
              value={this.state.recipe ? this.state.recipe.preparationTime : 0}
            // onChange={this.onChangeHandler}
            />
          </label>
          <label>
            Cooking Time
          <input
              // name='cookingTime'
              required={true}
              type='number'
              step='1'
              min='0'
              value={this.state.recipe ? this.state.recipe.cookingTime : 0}
            // onChange={this.onChangeHandler}
            />
          </label> */}
          <div className={buttonWrapperStyle}>
            <IconButton onClickCallback={this.saveRecipe.bind(this, event)} buttonText='Save Recipe' icon={<Edit />} color={IconButtonColor.GREEN} />
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
