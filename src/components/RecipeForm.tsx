import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../_domain/IRecipe';
import { IStoreState } from '../_domain/IStoreState';
import {
  saveRecipeAction,
  setEditModeAction,
  setIndexVisibilityAction,
  updateRecipeAction
} from '../actions/RecipeActions';
import { getSelectedRecipe } from '../RecipeReducer';

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
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  public componentWillReceiveProps(newProps: IRecipeFormProps) {
    this.setState({
      recipe: newProps.selectedRecipe
    })
  }

  public onChangeHandler(event: React.ChangeEvent) {
    const newRecipeState = { ...this.state.recipe };
    newRecipeState.name = (event.target as HTMLInputElement).value;
    this.setState({ recipe: newRecipeState });
  }

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
      <div className="recipe form">
        <h2>
          Recipe Form
        </h2>
        <form onSubmit={this.saveRecipe}>
          <label>
            Recipe Title
          <input
              required={true}
              type="text"
              value={this.state.recipe ? this.state.recipe.name : ''}
              onChange={this.onChangeHandler}
            />
          </label>
          <input type="submit" value="Save Recipe" />
          <button onClick={this.cancelHandler}>Cancel</button>
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
