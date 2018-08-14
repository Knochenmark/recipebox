import IndexPage from "./IndexPage";

import * as React from "react";
import Recipe from "./recipe";

enum Mode {
  index = 0,
  recipe = 1,
  create = 2
}

interface IRecipe {
  name: string;
}

// const dummyRecipe: IRecipe = {
//   name: ""
// };

interface IRecipebookState {
  recipes: IRecipe[];
  selectedRecipe: IRecipe;
  mode: Mode;
}

export default class Recipebook extends React.Component<any, IRecipebookState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      mode: Mode.index,
      recipes: [
        {
          "name": "Tomato soup"
        }, {
          "name": "Fish soup"
        }, {
          "name": "Fish cassarole"
        }, {
          "name": "Fish curry"
        }, {
          "name": "Pizza Salami"
        }, {
          "name": "Pizza Hawai"
        }
      ],
      selectedRecipe: {
        "name": "Tomato soup"
      }
    };
  }

  public handleClick = () => {
    console.log('this is:', this);
    return true;
  }

  public render(): JSX.Element {
    // {this.state.mode === Mode.index && <IndexPage recipes={this.state.recipes} mode={this.state.mode} />}

    const isSelectedRecipe = (recipe:any) => {
      return recipe.name === this.state.selectedRecipe.name;
    }

    const recipeList = this.state.recipes.filter(isSelectedRecipe).map(recipe => {
      return <Recipe key={recipe.name} recipe={recipe}/>
    });

    return (
      <div className='recipebook'>
        <IndexPage recipes={this.state.recipes} mode={this.state.mode} callback={this.handleClick} />
        {recipeList}
      </div>
    );
  }
}
