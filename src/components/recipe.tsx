import * as React from 'react';

export interface IRecipeProps {
  recipe: any;
}

export default function Recipe({ recipe, ...props }: IRecipeProps) {

  // Todo: get ingredient list from recipe
  // const ingredientList =

  return (
    <div className="recipe">
      <h2>
        {recipe.name}
      </h2>
      <span>Ingredients</span>
      {/* <ul className="index-recipes">
        {ingredientList}
      </ul> */}

      <button>Edit Recipe</button>
      <button>Delete Recipe</button>
    </div>
  );
}
