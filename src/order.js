function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(order)
  };
};

function refundOrder(order, deliveryOrders) {
  var item = order - 1
    deliveryOrders.splice(item, 1)
  // deliveryOrders.shift();
  // return deliveryOrders;
};

function listItems(deliveryOrders) {
  var orderItems = "";
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderItems += (deliveryOrders[i].item);
    if ([i] < 2)
    orderItems += ", ";
  };
  return orderItems;
};

function searchOrder(deliveryOrders, order) {
  var orderIn = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(order)) {
      orderIn = true;
    }
  };
  return orderIn;
  };

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
