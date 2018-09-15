import * as React from 'react';

import { IRecipe } from '../_domain/IRecipe';

export interface IRecipeProps {
  cancelCallback: any;
  updateCallback: any;
  recipe: IRecipe;
}

export default class RecipeForm extends React.Component<IRecipeProps, any> {
  constructor(props: IRecipeProps) {
    super(props);
    this.state = {
      isBookmarked: (this.props.recipe && this.props.recipe.isBookmarked) || false,
      name: (this.props.recipe && this.props.recipe.name) || '',
      recipeToUpdate: this.props.recipe ? this.props.recipe.name : null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  public handleCancel() {
    this.props.cancelCallback();
  }

  public handleChange(event: React.ChangeEvent) {
    this.setState({ name: (event.target as HTMLInputElement).value });
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const recipe: IRecipe = {
      isBookmarked: this.state.isBookmarked,
      name: this.state.name
    };
    if (this.state.recipeToUpdate) {
      this.props.updateCallback(recipe, this.state.recipeToUpdate);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="recipe form">
        <h2>
          Recipe Form
        </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Recipe Title
          <input
              required={true}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Save Recipe" />
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}
