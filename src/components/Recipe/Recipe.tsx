import * as React from 'react';
import { connect } from 'react-redux';

import { IRecipe } from '../../_domain/IRecipe';
import { IStoreState } from '../../_domain/IStoreState';
import {
  deleteRecipeAction,
  setBookmark,
  setEditModeAction,
  setIndexVisibilityAction
} from '../../actions/RecipeActions';
import { getSelectedRecipe } from '../../RecipeReducer';
import HeartFilled from '../Icons/HeartFilled';
import HeartOutlined from '../Icons/HeartOutlined';
import { recipeStyle } from './RecipeStyles';

interface IRecipeStateProps {
  selectedRecipe: IRecipe;
}

interface IRecipeDispatchProps {
  bookmarkRecipe: (recipeName: string, isBookmarked: boolean) => void;
  deleteRecipe: (recipe: IRecipe) => void;
  setEditMode: () => void;
  showIndex: () => void;
}

interface IRecipeProps {
  bookmarkRecipe: (recipeName: string, isBookmarked: boolean) => void;
  deleteRecipe: (recipe: IRecipe) => void;
  selectedRecipe: IRecipe;
  setEditMode: () => void;
  showIndex: () => void;
}

export class RecipeComponent extends React.Component<IRecipeProps, IRecipeStateProps> {
  constructor(props: IRecipeProps) {
    super(props);
    this.state = {
      selectedRecipe: { name: '', isBookmarked: false }
    };
  }

  public componentWillReceiveProps(newProps: IRecipeProps) {
    this.setState({ selectedRecipe: newProps.selectedRecipe });
  }

  public render(): JSX.Element {
    const bookmarkText = this.props.selectedRecipe.isBookmarked ? <HeartFilled /> : <HeartOutlined />;
    return (
      <div className={recipeStyle}>
        <h2>
          {this.props.selectedRecipe.name}
        </h2>
        <button onClick={this.props.setEditMode}>Edit Recipe</button>
        <button onClick={this.props.deleteRecipe.bind(this, this.props.selectedRecipe)}>Delete Recipe</button>
        <button onClick={this.props.showIndex}>Go TO Index</button>
        <span onClick={this.props.bookmarkRecipe.bind(this, this.props.selectedRecipe, !this.props.selectedRecipe.isBookmarked)}>{bookmarkText}</span>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): IRecipeStateProps => {
  return {
    selectedRecipe: getSelectedRecipe(state)
  }
}

const mapDispatchToProps = (dispatch: any): IRecipeDispatchProps => {
  return {
    bookmarkRecipe: (recipeName: string, isBookmarked: boolean) => dispatch(setBookmark(recipeName, isBookmarked)),
    deleteRecipe: (recipe: IRecipe) => dispatch(deleteRecipeAction(recipe)),
    setEditMode: () => dispatch(setEditModeAction(true)),
    showIndex: () => dispatch(setIndexVisibilityAction(true))
  }
}

export const Recipe = connect(mapStateToProps, mapDispatchToProps)(RecipeComponent)
