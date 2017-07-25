//business logic
function Pizza(topping, size, quantity) {
  this.topping = topping;
  this.size = size;
  this.quantity = quantity;
  this.price = 10
}

Pizza.prototype.calcPrice = function() {
  return (this.price + this.topping + this.size) * this.quantity;
 }

function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  }

Address.prototype.fullInfo = function() {
  return this.street + "," + " " + this.city + " " + this.state + " " + this.zip;
}

//UI logic
$(document).ready(function() {
  $("#deliveryOption").click(function() {
    $("#delivery").show();
  });

  $("#order-form").submit(function(event) {
    event.preventDefault();
    var inputTopping = parseInt($("#top").val());
    var inputSize = parseInt($("#size").val());
    var inputQty = $("#qty").val();
    var inputStreet = $("#street").val();
    var inputCity = $("#city").val();
    var inputState= $("#state").val();
    var inputZip = $("#zip").val();
    var newPizzaOrder = new Pizza(inputTopping, inputSize, inputQty);
    var newAddress = new Address(inputStreet, inputCity, inputState, inputZip);
    $("#total").text("$" + newPizzaOrder.calcPrice());
    $("#customer").text(newAddress.fullInfo());
    $("#receipt").show();
    $("#delivery").hide();

    $("#top").val("");
    $("#size").val("");
    $("#qty").val("");
    // $("#name").val("");
    // $("#street").val("");
    // $("#city").val("");
    // $("#state").val("");
    // $("#zip").val("");
    // $(".form-control").val("");
  });
});
