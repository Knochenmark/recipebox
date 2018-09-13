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
      recipeToUpdate: this.props.recipe.name // TODO: handle null value
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  public handleCancel = () => {
    return () => this.props.cancelCallback();
  }

  public handleChange = (event: any) => {
    this.setState({ name: event.target.value });
  }

  public handleSubmit = (recipeToUpdate: string) => {
    // e.preventDefault(); // TODO prevent default or the page reloads after submit
    return () => {
      const recipe: IRecipe = {
        isBookmarked: this.state.isBookmarked,
        name: this.state.name
      };
      this.props.updateCallback(recipe, recipeToUpdate);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="recipe form">
        <h2>
          Recipe Form
        </h2>
        <form onSubmit={this.handleSubmit(this.state.recipeToUpdate)}>
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
          <button onClick={this.handleCancel()}>Cancel</button>
        </form>
      </div>
    );
  }
}
