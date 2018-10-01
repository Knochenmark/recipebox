import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../../_domain/IStoreState';
import { TabBarItem } from '../../_domain/TabBarItem';
import {
  createRecipeAction,
  setSelectedRecipeAction
} from '../../actions/RecipeActions';
import { getSelectedTab } from '../../RecipeReducer';
import { BookmarkList } from '../BookmarkList/BookmarkList';
import { IndexList } from '../IndexList/IndexList';
import { SearchBar } from '../SearchBar/SearchBar';
import { TabBar } from '../TabBar/TabBar';
import { indexPageStyle } from './IndexPageStyles';

export interface IIndexPageProps {
  createRecipe: () => void;
  selectedTab: TabBarItem;
  setSelectedRecipe: (recipeName: string) => void;
}

interface IIndexPageStateProps {
  selectedTab: TabBarItem;
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
    const headline = `${this.props.selectedTab === TabBarItem.RECIPES ? 'Recipe' : 'Bookmark'} List`;

    return (
      <div className={indexPageStyle}>
        <h2>{headline}</h2>
        <TabBar />
        <SearchBar />
        {this.props.selectedTab === TabBarItem.RECIPES && <IndexList />}
        {this.props.selectedTab === TabBarItem.BOOKMARKS && <BookmarkList />}
        <button onClick={this.props.createRecipe}>Create New Recipe</button>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState): IIndexPageStateProps {
  return {
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
