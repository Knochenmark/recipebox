import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../../_domain/IRecipe';
import { IStoreState } from '../../_domain/IStoreState';
import {
  createRecipeAction,
  setSelectedRecipeAction
} from '../../actions/RecipeActions';
import {
  getRecipes,
  getSearchValue,
  getSelectedTab
} from '../../RecipeReducer';
import { SearchBar } from '../SearchBar/SearchBar';
import { TabBar } from '../TabBar';
import {
  indexPageItemStyle,
  indexPageRecipeStyle,
  indexPageStyle
} from './IndexPageStyles';

export interface IIndexPageProps {
  createRecipe: () => void;
  recipes: IRecipe[];
  searchValue: string;
  selectedTab: string;
  setSelectedRecipe: (recipeName: string) => void;
}

interface IIndexPageStateProps {
  recipes: IRecipe[];
  searchValue: string;
  selectedTab: string;
}

interface IIndexPageDispatchProps {
  createRecipe: () => void;
  setSelectedRecipe: (recipeName: string) => void;
}

export class IndexPageComponent extends React.Component<IIndexPageProps> {
  constructor(props: IIndexPageProps) {
    super(props);
  }

  public render() {

    const recipes = this.props.recipes.filter(i => {
      if (this.props.searchValue) {
        if (i.name.includes(this.props.searchValue)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    const indices = recipes
      .map(recipe => recipe.name[0].toUpperCase())
      .filter((v: string, i: number, a: string[]) => a.indexOf(v) === i);

    const obj: any = {};
    recipes.forEach((recipe: IRecipe) => {
      const key = recipe.name[0].toUpperCase();
      if (obj.hasOwnProperty(key)) {
        obj[key].push(recipe)
      } else {
        obj[key] = [recipe]
      }
    });

    const indexItems = indices.sort().map(index => {
      const recipeItems = obj[index].map((recipe: IRecipe, i: number) => {
        return <li key={index + i}>
          <span onClick={this.props.setSelectedRecipe.bind(this, recipe.name)}>
            {recipe.name}
          </span>
        </li>
      });
      return <div key={index}>
        <span>{index}({obj[index].length})</span>
        <ul className={indexPageRecipeStyle}>
          {recipeItems}
        </ul>
      </div>
    });

    return (
      <div className={indexPageStyle}>
        <h2>Recipe List</h2>
        <TabBar />
        <SearchBar />
        {
          this.props.selectedTab === 'recipe' &&
          <div className={indexPageItemStyle}>
            {indexItems}
          </div>
        }
        {
          // this.props.selectedTab === 'bookmark' && <Bookmarks />
        }
        <button onClick={this.props.createRecipe}>Create New Recipe</button>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState): IIndexPageStateProps {
  return {
    searchValue: getSearchValue(state),
    recipes: getRecipes(state),
    selectedTab: getSelectedTab(state),
  };
}

function mapDispatchToProps(dispatch: any): IIndexPageDispatchProps {
  return {
    createRecipe: () => dispatch(createRecipeAction()),
    setSelectedRecipe: (recipeName: string) => dispatch(setSelectedRecipeAction(recipeName))
  };
}

export const IndexPage = connect(mapStateToProps, mapDispatchToProps)(IndexPageComponent);
