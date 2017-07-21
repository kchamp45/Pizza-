//business logic
function Pizza(topping, size, quantity) {
  this.topping = topping;
  this.size = size;
  this.quantity = quantity;
}

var initialPrice = 10;

 Pizza.prototype.calcPrice = function() {
   return (initialPrice + this.topping + this.size) * this.quantity;
 }

 function resetFields() {
  $("#top").val("");
  $("#size").val("");
  $("#qty").val("");
  $(".form-control").val("");
}

//UI logic
$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    var inputTopping = parseInt($("#top").val());
    var inputSize = parseInt($("#size").val());
    var inputQty = parseInt($("#qty").val());
    var newPizzaOrder = new Pizza(inputTopping, inputSize, inputQty);
    
  $("#total").text("$" + newPizzaOrder.calcPrice());
  $("#receipt").show();
});
resetFields();
});
