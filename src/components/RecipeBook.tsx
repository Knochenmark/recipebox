import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../_domain/IRecipe';
import { IStoreState } from '../_domain/IStoreState';
import { setIndexVisibilityAction } from '../actions/recipe-actions';
import IndexPage from './IndexPage';
import Recipe from './recipe';

enum Mode {
  index = 0,
  recipe = 1,
  create = 2
}

interface IRecipebookState {
  recipes: IRecipe[];
  selectedRecipe: IRecipe;
  mode: Mode;
}

interface IRecipeBookProps {
  state: IStoreState;
  toggle: any;
  // setSeletedRecipe: any;
}

const mapStateToProps = (state: IStoreState) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    // setSelectedRecipe: (recipeName: string) => dispatch(setSelectedRecipeAction(recipeName)),
    toggle: (isVisible: boolean) => dispatch(setIndexVisibilityAction(isVisible))
  };
}

let initialToggle = true;

export default class RecipeBookComponent extends React.Component<IRecipeBookProps, IRecipebookState> {
  constructor(props: IRecipeBookProps) {
    super(props);
    this.state = {
      mode: Mode.index,
      recipes: this.props.state.recipes,
      selectedRecipe: {
        "name": "Tomato soup"
      }
    };
  }

  public handleClick = () => {
    this.props.toggle(!initialToggle);
    initialToggle = !initialToggle;
    console.log("component state", this.props);
  }

  public indexEntryCallback = () => {
    // this.props.setSeletedRecipe('SomeName');
    console.log('index entry clicked')
  }

  public setRecipeName = (recipeName: string) => {
    console.log('recipeNameClicked', recipeName);
  }

  public render(): JSX.Element {
    // {this.state.mode === Mode.index && <IndexPage recipes={this.state.recipes} mode={this.state.mode} />}

    const isSelectedRecipe = (recipe: any) => {
      return recipe.name === this.state.selectedRecipe.name;
    }

    const recipeList = this.state.recipes.filter(isSelectedRecipe).map(recipe => {
      return <Recipe key={recipe.name} recipe={recipe} />
    });

    const someClassName = this.props.state.isVisible
      ? "page visible" : "page hidden";

    return (
      <div>
        <button className="testButton" onClick={this.handleClick}>Test</button>
        <div className='recipebook'>
          <IndexPage className={someClassName} recipes={this.props.state.recipes} mode={this.state.mode} callback={this.setRecipeName} />
          {recipeList}
        </div>
      </div>
    );
  }
}

export const RecipeBook = connect(mapStateToProps, mapDispatchToProps)(RecipeBookComponent)
