
function Pizza(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
}



var sizePrice = {
    large:1000,
    medium:800,
    small:550
}
var toppingPrice = [{
    veggie: {
         small: 50,
        medium: 80,
        all: 100
    },
    traditional: {
         small: 100,
        medium: 150,
        large: 200
    },
    speciality: {
         small: 50,
         medium: 75,
        large: 250
    }
}]

var crustPrice = {
    crispy: 100,
    stuffed: 120,
    gluten: 50
};

function sizeCalcPrice(size) {
    if (size === "small") {
        return sizePrice.small ;
    } else if (size === "medium") {
        return sizePrice.medium ;
    } else {
        return sizePrice.large ;
    }
}

function crustCalcPrice(crust) {
    if (crust === "crispy") {
        return crustPrice.crispy ;
    } else if (crust === "stuffed") {
        return crustPrice.stuffed ;
    } else {
        return crustPrice.gluten ;
    }
}

function toppingsCalcPrice(toppings) {
    var noOfTopping = 0;
    for (i = 0; i < veggie.length; i++) {
        if (toppings[i] == "veggie") {
            noOfTopping += 100;
        }
        if (toppings[i] == "tradition") {
            noOfTopping += 200;
        }
        if (toppings[i] == "speciality") {
            noOfTopping += 250;
        }
    }
    return noOfTopping ;
}


function checkveggie(topping) {
    return topping === "veggie";
}


$("document").ready(function() {

    function getPizzaSize() {
        return $("#pizza-size")
            .find(":selected")
            .val();
    }

    function getCrust() {
        return $("#pizza-crust")
            .find(":selected")
            .val();
    }

    function getToppings() {
        var toppingList = [];
        $(".toppings :checked").each(function() {
            toppingList.push($(this).val());
        });
        return toppingList;
    }


    $("form#myform").submit(function(event) {
        event.preventDefault();
        var pizzaSize = getPizzaSize();
        var crust = getCrust();
        var toppingList = getToppings();

        var newPizza = new Pizza(pizzaSize, crust);
        newPizza.toppings.push(toppingList);
        $("#cart").hide();
        $("#table").show();
        $(".checkout").show();
        var oneOrder =
            sizeCalcPrice(pizzaSize) +
            crustCalcPrice(crust) +
            toppingsCalcPrice(toppingList);


            $("#items").append(
                        "<tr>" +
                        "<td>" +
                        newPizza.size +
                        "</td>" +
                        "<td>" +
                        "<p>" +
                        newPizza.crust +
                        "</p>" +
                        "</td>" +
                        "<td>" +
                        newPizza.toppings +
                        "</td>" +
                        "<td>" +
                        oneOrder +
                        "</td>" +
                        "</tr>"
                    );

        
    });
    var totalQuantity = parseInt($("#quantity").val());

    function calcTotal() {
        var priceOnePizza =
            sizeCalcPrice(getPizzaSize()) +
            crustCalcPrice(getCrust()) +
            toppingsCalcPrice(getToppings());
        return priceOnePizza;
    }
    var pizzaList = [];

    $("#orderbtn").on("click", function() {
        totalQuantity += 1;
        $("#quantity").text(totalQuantity);
        pizzaList.push(calcTotal());
    });


    $("#gettotal").click(function() {
        var total = 0;
        pizzaList.forEach(function(pizza) {
            total += pizza;
        });
        $("#money").text(total);
    });


    $("#myModel").click(function() {
        var deliver = confirm(
            "Would you like us deliver your pizza to your doorstep? transport cost ksh 200."
        );
        if (deliver) {
            var place = prompt("Enter your location");
            $("#place").text(place);
            $("#success").show();
        } else {
            $("#no-delivery").show();
        }

        $("#pizza-size").val("");
        $("#pizza-crust").val("");
        $("#items").remove();
        $("#quantity").text(0);
   });
});
