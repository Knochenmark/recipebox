import * as React from 'react';

export interface IPageProps {
  recipes: any[];
  className: string;
  callback?: any;
}

export default function IndexPage({ recipes, callback, ...props }: IPageProps) {

  const indices = recipes.map(recipe => recipe.name[0].toUpperCase()).filter((v, i, a) => a.indexOf(v) === i);
  const obj: any = {};
  recipes.forEach(recipe => {
    const key = recipe.name[0].toUpperCase();
    if (obj.hasOwnProperty(key)) {
      obj[key].push(recipe)
    } else {
      obj[key] = [recipe]
    }
  });

  const handleCallback = (recipeName: string) => {
    return () => {
      callback(recipeName);
    }
  }

  const indexItems = indices.sort().map(index => {
    const recipeItems = obj[index].map((recipe: any, i: number) => {
      return <li onClick={handleCallback(recipe.name)} key={index + i}>{recipe.name}</li>
    });
    return <div key={index}>
      <span>{index}({obj[index].length})</span>
      <ul className="index-recipes">
        {recipeItems}
      </ul>
    </div>
  });

  return (
    <div className={props.className}>
      <h2>Recipe List</h2>
      <div className="index-items">
        {indexItems}
      </div>
      <button>Create New Recipe</button>
    </div>
  );
}
