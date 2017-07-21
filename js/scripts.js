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

function Customer(name, street, city, state, zip) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  }

Customer.prototype.fullInfo = function() {
  return this.name + "<br>" + this.street + "<br>" + this.city + " , " + this.state + " " + this.zip;
}

function resetFields() {
  $("#top").val("");
  $("#size").val("");
  $("#qty").val("");
  $("#name").val("");
  $("#street").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zip").val("");
  $(".form-control").val("");
}

//UI logic
$(document).ready(function() {
  $("#deliveryOption").click(function() {
    $("#delivery").show();
  });

  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    var inputTopping = parseInt($("#top").val());
    var inputSize = parseInt($("#size").val());
    var inputQty = parseInt($("#qty").val());
    var inputName = $("#name").val();
    var inputStreet = $("#street").val();
    var inputCity = $("#city").val();
    var inputState= $("#state").val();
    var inputZip = $("#zip").val();
    var newPizzaOrder = new Pizza(inputTopping, inputSize, inputQty);
    var newCustomer = new Customer(inputName, inputStreet, inputCity, inputState, inputZip);
    $("#total").text("$" + newPizzaOrder.calcPrice());
    $("#customer").append(newCustomer.fullInfo() + "<span class='btn btn-primary' id='done'>Got it!</span>");
    $("#receipt").show();
    $("#delivery").hide();

    resetFields();
  });
  $("#done").click(function() {
    $("#customer").parent().remove();
  });
});
