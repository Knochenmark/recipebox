import * as React from 'react';

import { ITabBarItem } from '../_domain/ITabBarItem';
import TabBar from './TabBar';
export interface IPageProps {
  className: string;
  createRecipe: any;
  recipes: any[];
  setSelectedRecipe: any;
}

export default function IndexPage({ recipes, createRecipe, setSelectedRecipe, ...props }: IPageProps) {

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
      setSelectedRecipe(recipeName);
    }
  }

  const handleCreateRecipe = () => {
    return () => {
      createRecipe();
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

  // TODO needs a TabItem component and Tabbar as wrapper should handle onChanges
  const tabItemList: ITabBarItem[] = [
    {
      active: true,
      name: 'Recipes'

    }, {
      active: false,
      name: 'Liked'
    }
  ];

  return (
    <div className={props.className}>
      <h2>Recipe List</h2>
      <TabBar tabBarItemList={tabItemList} />
      <div className="index-items">
        {indexItems}
      </div>
      <button onClick={handleCreateRecipe()}>Create New Recipe</button>
    </div>
  );
}
