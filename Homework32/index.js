let orders = [];

if (localStorage.getItem("orders")) {
    orders = JSON.parse(localStorage.getItem("orders"));
}

function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
}

document.getElementById("myOrdersButton").addEventListener("click", function() {
    document.getElementById("categories").style.display = "none";
    document.getElementById("myOrdersButton").style.display = "none";
    document.getElementById("orderList").style.display = "block";

    const orderItems = document.getElementById("orderItems");
    orderItems.innerHTML = "";

    for (const i = 0; i < orders.length; i++) {
        const order = orders[i];
        const listItem = document.createElement("li");
        listItem.textContent = "Дата: " + order.date + " Ціна: " + order.price;
        listItem.setAttribute("data-order-index", i);
        orderItems.appendChild(listItem);
    }
});

document.getElementById("orderItems").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        const orderIndex = event.target.getAttribute("data-order-index");
        const order = orders[orderIndex];

        document.getElementById("orderList").style.display = "none";
        document.getElementById("orderDetails").style.display = "block";

        document.getElementById("orderDate").textContent = "Дата: " + order.date;
        document.getElementById("orderPrice").textContent = "Ціна: " + order.price;

        document.getElementById("deleteOrderButton").addEventListener("click", function () {
            orders.splice(orderIndex, 1);
            saveOrders();
            document.getElementById("orderDetails").style.display = "none";
            document.getElementById("orderList").style.display = "block";

            const orderItems = document.getElementById("orderItems");
            orderItems.innerHTML = "";

            for (const i = 0; i < orders.length; i++) {
                const order = orders[i];
                const listItem = document.createElement("li");
                listItem.textContent = "Дата: " + order.date + " Ціна: " + order.price;
                listItem.setAttribute("data-order-index", i);
                orderItems.appendChild(listItem);
            }
        });