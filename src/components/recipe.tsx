import * as React from 'react';

import { IRecipe } from '../_domain/IRecipe';

export interface IRecipeProps {
  editModeCallback: any;
  deleteCallback: any;
  recipe: IRecipe;
}

export default function Recipe({ recipe, deleteCallback, editModeCallback, ...props }: IRecipeProps) {

  // Todo: get ingredient list from recipe
  // const ingredientList =

  const handleDelete = (recipeToDelete: IRecipe) => {
    return () => deleteCallback(recipeToDelete);
  }

  const handleEdit = () => {
    return () => editModeCallback();
  }

  return (
    <div className="recipe">
      <h2>
        {recipe.name}
      </h2>
      <span>Ingredients</span>
      {/* <ul className="index-recipes">
        {ingredientList}
      </ul> */}
      <button onClick={handleEdit()}>Edit Recipe</button>
      <button onClick={handleDelete(recipe)}>Delete Recipe</button>
    </div>
  );
}
