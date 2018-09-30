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
import { IndexList } from '../IndexList/IndexList';
import { SearchBar } from '../SearchBar/SearchBar';
import { TabBar } from '../TabBar';
import { indexPageStyle } from './IndexPageStyles';

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
    return (
      <div className={indexPageStyle}>
        <h2>Recipe List</h2>
        <TabBar />
        <SearchBar />
        {this.props.selectedTab === 'recipe' && <IndexList />}
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
