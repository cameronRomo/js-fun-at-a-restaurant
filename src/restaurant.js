function createRestaurant(name, menu) {
  var restaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []},
  };
  return restaurant;
};

function addMenuItem(restaurant, menuItem) {
  for (var i = 0; i < restaurant.menus[menuItem.type].length; i++){
  if (restaurant.menus[menuItem.type][i] !== menuItem) {
  } else restaurant.menus[menuItem.type].splice(i, 1)
}
restaurant.menus[menuItem.type].push(menuItem);
};

function removeMenuItem() {

};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
