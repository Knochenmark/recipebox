import * as React from 'react';

import { IRecipe } from '../_domain/IRecipe';

export interface IRecipeProps {
  cancelCallback: any;
  // saveCallback: any;
  recipe: IRecipe;
}

export default class RecipeForm extends React.Component<IRecipeProps, any> {
  constructor(props: IRecipeProps) {
    super(props);
    this.state = {
      value: (this.props.recipe && this.props.recipe.name) || ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  public handleCancel = () => {
    return () => this.props.cancelCallback();
  }

  public handleChange = (event: any) => {
    this.setState({ value: event.target.value });
  }

  public handleSubmit = (event: any) => {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Save Recipe" />
          <button onClick={this.handleCancel()}>Cancel</button>
        </form>
      </div>
    );
  }
}
