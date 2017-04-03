var pizza = {
    thincrust: ["Small ($1.99)", "Medium ($2.99)", "Large ($3.99)"],
    thickcrust: ["Small ($1.99)", "Medium ($2.99)", "Large ($3.99)"],
    newyork: ["Small ($1.99)", "Medium ($2.99)", "Large ($3.99)"],
    glutenfree: ["Small ($1.99)", "Medium ($2.99)", "Large ($3.99)"]
};

var select = document.getElementById("options");

pizza.thincrust.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    select.appendChild(opt);
});

select.addEventListener("change", function () {
    "use strict";
    window.console.log(select.options[select.selectedIndex].value);
});