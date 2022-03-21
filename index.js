
var sizePrice = {
    small: 500,
    medium: 800,
    large: 1000
};


var crustPrice = {
    crispy: 250,
    stuffed: 200,
    gluten: 100
};

var toppingPrice = {
    pepperoni:100, 
        veges: 50,
        bacon: 75,
           
};


function pizza(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
}

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
    for (i = 0; i < toppings.length; i++) {
        if (toppings[i] == "pepperoni") {
            noOfTopping += 100;
        }
        if (toppings[i] == "veges") {
            noOfTopping += 50;
        }
        if (toppings[i] == "bacon") {
            noOfTopping += 75;
        }
    }
    return noOfTopping ;
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
            crustCalcrustPrice(getCrust()) +
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


        $("#pizza-size").val("");
        $("#pizza-crust").val("");
        $("#items").remove();
        $("#quantity").text(0);
    });
});
