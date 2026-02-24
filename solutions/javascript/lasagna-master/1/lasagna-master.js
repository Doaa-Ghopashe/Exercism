/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remaningTime){
  if (remaningTime === undefined) {
    return 'You forgot to set the timer.';
  }
  if (remaningTime === 0) {
    return 'Lasagna is done.';
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, avgTime=2) {
  return layers.length * avgTime;
}

export function quantities(layers) {
  let noodlesLayers = 0;
  let sauceLayers = 0;
  for (let layer of layers) {
    if (layer === 'noodles') {
      noodlesLayers++;
    }
    else if(layer === 'sauce'){
      sauceLayers++;
    }
  }
  
  return {
    noodles: noodlesLayers * 50,
    sauce: sauceLayers * 0.2
  };
}

export function addSecretIngredient(friendsList, myList) {
  let lastItem = friendsList[friendsList.length - 1];
  myList.push(lastItem);
}

export function scaleRecipe(recipe, protions) {
  let newRecipe = {};
  for (let item in recipe) {
    newRecipe[item] = (recipe[item] / 2) * protions;
  }
  return newRecipe;
}