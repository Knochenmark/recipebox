import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../_domain/IRecipe';
import { IStoreState } from '../_domain/IStoreState';
import {
  setIndexVisibilityAction,
  setSelectedRecipeAction
} from '../actions/recipe-actions';
import { getSelectedRecipe } from '../recipe-reducer';
import IndexPage from './IndexPage';
import Recipe from './recipe';

interface IRecipebookState {
  recipes: IRecipe[];
  selectedRecipe: IRecipe;
}

interface IRecipeBookProps {
  setSelectedRecipe: any;
  state: IStoreState;
  toggle: any;
}

const mapStateToProps = (state: IStoreState) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSelectedRecipe: (recipeName: string) => dispatch(setSelectedRecipeAction(recipeName)),
    toggle: (isVisible: boolean) => dispatch(setIndexVisibilityAction(isVisible))
  };
}

let initialToggle = true;

export default class RecipeBookComponent extends React.Component<IRecipeBookProps, IRecipebookState> {
  constructor(props: IRecipeBookProps) {
    super(props);
    this.setRecipeName = this.setRecipeName.bind(this);
  }

  public handleClick = () => {
    this.props.toggle(!initialToggle);
    initialToggle = !initialToggle;
    console.log("component state", this.props);
  }

  public setRecipeName = (recipeName: string) => {
    this.props.setSelectedRecipe(recipeName);
  }

  public render(): JSX.Element {
    // {this.state.mode === Mode.index && <IndexPage recipes={this.state.recipes} mode={this.state.mode} />}

    const selectedRecipe = getSelectedRecipe(this.props.state);
    const recipeElement = <Recipe key={selectedRecipe.name} recipe={selectedRecipe} />;

    const someClassName = this.props.state.isVisible
      ? "page visible" : "page hidden";

    return (
      <div>
        <button className="testButton" onClick={this.handleClick}>Test</button>
        <div className='recipebook'>
          <IndexPage className={someClassName} recipes={this.props.state.recipes} callback={this.setRecipeName} />
          {recipeElement}
        </div>
      </div>
    );
  }
}

export const RecipeBook = connect(mapStateToProps, mapDispatchToProps)(RecipeBookComponent)
