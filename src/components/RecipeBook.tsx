import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../_domain/IRecipe';
import { IStoreState } from '../_domain/IStoreState';
import {
  createRecipeAction,
  deleteRecipeAction,
  setEditModeAction,
  setIndexVisibilityAction,
  setSelectedRecipeAction,
  updateRecipeAction
} from '../actions/recipe-actions';
import {
  getEditMode,
  getIndexVisibility,
  getSelectedRecipe
} from '../recipe-reducer';
import IndexPage from './IndexPage';
import Recipe from './recipe';
import RecipeForm from './RecipeForm';
import Ribbon from './ribbon';

interface IRecipebookState {
  recipes: IRecipe[];
  selectedRecipe: IRecipe;
}

interface IRecipeBookProps {
  createRecipe: any;
  deleteRecipe: any;
  setEditMode: any;
  setSelectedRecipe: any;
  state: IStoreState;
  setIndexVisibility: any;
  updateRecipe: any;
}

const mapStateToProps = (state: IStoreState) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createRecipe: () => dispatch(createRecipeAction()),
    deleteRecipe: (recipe: IRecipe) => dispatch(deleteRecipeAction(recipe)),
    setEditMode: (isEditMode: boolean) =>
      dispatch(setEditModeAction(isEditMode)),
    setIndexVisibility: (isVisible: boolean) =>
      dispatch(setIndexVisibilityAction(isVisible)),
    setSelectedRecipe: (recipeName: string) =>
      dispatch(setSelectedRecipeAction(recipeName)),
    updateRecipe: (recipe: IRecipe, recipeName: string) =>
      dispatch(updateRecipeAction(recipe, recipeName))
  };
}

export default class RecipeBookComponent extends React.Component<IRecipeBookProps, IRecipebookState> {
  constructor(props: IRecipeBookProps) {
    super(props);
    this.setRecipeName = this.setRecipeName.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
  }

  public setRecipeName = (recipeName: string) => {
    this.props.setSelectedRecipe(recipeName);
    this.props.setIndexVisibility(false);
  }

  public deleteRecipe = (recipe: IRecipe) => {
    this.props.deleteRecipe(recipe);
  }

  public editRecipe = () => {
    this.props.setEditMode(true);
  }

  public cancelEditMode = () => {
    this.props.setEditMode(false);
  }

  public updateRecipe = (recipe: IRecipe, recipeName: string) => {
    this.props.updateRecipe(recipe, recipeName);
  }

  public createRecipe = () => {
    this.props.createRecipe();
  }

  public showIndex = () => {
    this.props.setIndexVisibility(true);
  }

  public render(): JSX.Element {

    const selectedRecipe = getSelectedRecipe(this.props.state);
    const isEditMode = getEditMode(this.props.state);
    let recipeElement;
    if (!isEditMode) {
      recipeElement = selectedRecipe &&
        <Recipe
          key={selectedRecipe.name}
          recipe={selectedRecipe}
          deleteCallback={this.deleteRecipe}
          editModeCallback={this.editRecipe}
        />;
    } else {
      recipeElement = <RecipeForm recipe={selectedRecipe} updateCallback={this.updateRecipe} cancelCallback={this.cancelEditMode} />;
    }

    const ribbonElement = (!isEditMode) && <Ribbon indexCallback={this.showIndex} />;

    const recipeContainerClass = getIndexVisibility(this.props.state)
      ? "recipe-container" : "recipe-container visible";

    return (
      <div>
        <div className='recipebook'>
          <IndexPage className='page' recipes={this.props.state.recipes} createRecipe={this.createRecipe} setSelectedRecipe={this.setRecipeName} />
          <div className={recipeContainerClass}>
            {ribbonElement}
            {recipeElement}
          </div>
        </div>
      </div>
    );
  }
}

export const RecipeBook = connect(mapStateToProps, mapDispatchToProps)(RecipeBookComponent)
