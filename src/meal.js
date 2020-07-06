function nameMenuItem(menuItemName) {
  menuItemName = `Delicious ${menuItemName}`;
  return menuItemName
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(ingredient1, array) {
  if (!array.includes(ingredient1)) {
    array.push(ingredient1);
  };
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};

function decreasePrice(initialPrice) {
  return initialPrice -= initialPrice * .10;
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  };
  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
