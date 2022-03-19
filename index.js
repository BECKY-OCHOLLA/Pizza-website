var pizzaSize={
    large:1000,
    medium:800,
    small:550
};
var pizzaCrust={
    cripsy:100,
    stuffed:120,
    gluten:50

};
var pizzaToppings={
    veggie:100,
    traditional:200,
    speciality: 250
};
function sizePizzaPrice(size){
    if(size ==="large"){
        return pizzaSize.large*1;
    }else if(size==="medium"){
        return pizzaSize.medium*1
    }else{
        return pizzaSize.small*1
    }

}
function crustCalcPrice(crust) {
    if (crust === "crispy") {
        return pizzaCrust.crispy * 1;
    } else if (crust === "stuffed") {
        return pizzaCrust.stuffed * 1;
    } else {
        return pizzaCrust.gluten * 1;
    }
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
});

