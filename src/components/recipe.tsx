import * as React from 'react';

import { IRecipe } from '../_domain/IRecipe';

export interface IRecipeProps {
  bookmarkCallback: any;
  editModeCallback: any;
  deleteCallback: any;
  recipe: IRecipe;
}

export default function Recipe({
  recipe,
  deleteCallback,
  editModeCallback,
  bookmarkCallback
}: IRecipeProps) {

  // Todo: get ingredient list from recipe
  // const ingredientList =

  const bookmarkRecipe = (recipeToBookmark: string) => {
    return () => bookmarkCallback(recipeToBookmark, !recipe.isBookmarked);
  }

  const handleDelete = (recipeToDelete: IRecipe) => {
    return () => deleteCallback(recipeToDelete);
  }

  const handleEdit = () => {
    return () => editModeCallback();
  }

  const bookmarkText = () => {
    return recipe.isBookmarked ? "Bookmarked" : "Not marked";
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
      <span>{bookmarkText()}</span>
      <button onClick={bookmarkRecipe(recipe.name)}>Bookmark</button>
    </div>
  );
}
