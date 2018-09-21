import * as React from 'react';

import { IRecipe } from '../../_domain/IRecipe';
import HeartFilled from '../Icons/HeartFilled';
import HeartOutlined from '../Icons/HeartOutlined';
import { recipeStyle } from './RecipeStyles';

export interface IRecipeProps {
  bookmarkCallback: any;
  editModeCallback: any;
  deleteCallback: any;
  recipe: IRecipe;
}
export default class RecipeComponent extends React.Component<IRecipeProps, any> {
  constructor(props: IRecipeProps) {
    super(props);
    this.bookmarkRecipe = this.bookmarkRecipe.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  public bookmarkRecipe() {
    this.props.bookmarkCallback(this.props.recipe, !this.props.recipe.isBookmarked);
  }

  public handleDelete() {
    this.props.deleteCallback(this.props.recipe);
  }

  public handleEdit() {
    this.props.editModeCallback();
  }

  public render(): JSX.Element {
    const bookmarkText = this.props.recipe.isBookmarked ? <HeartFilled /> : <HeartOutlined />;
    return (
      <div className={recipeStyle}>
        <h2>
          {this.props.recipe.name}
        </h2>
        <button onClick={this.handleEdit}>Edit Recipe</button>
        <button onClick={this.handleDelete}>Delete Recipe</button>
        <span onClick={this.bookmarkRecipe}>{bookmarkText}</span>
      </div>
    );
  }
}
