document.getElementById("buyButton").addEventListener("click", function() {
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("orderForm").style.display = "block";
});

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();


    const fullName = document.getElementById("fullName").value;
    const city = document.getElementById("city").value;
    const postOffice = document.getElementById("postOffice").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const quantity = document.getElementById("quantity").value;
    const comment = document.getElementById("comment").value;

    if (fullName === "" || city === "" || postOffice === "" || paymentMethod === "" || quantity === "") {
        alert("Будь ласка, заповніть всі обов'язкові поля!");
        return;
    }

    document.getElementById("orderForm").style.display = "none";
    document.getElementById("orderInfo").style.display = "block";

    let productInfoText = "Назва товару: Назва товару\n";
    productInfoText += "Опис товару: Опис товару\n";
    document.getElementById("productInfoText").textContent = productInfoText;

    let deliveryInfoText = "Ім'я покупця: " + fullName + "\n";
    deliveryInfoText += "Місто: " + city + "\n";
    deliveryInfoText += "Склад Нової пошти: " + postOffice + "\n";
    deliveryInfoText += "Спосіб оплати: " + paymentMethod + "\n";
    deliveryInfoText += "Кількість: " + quantity + "\n";
    deliveryInfoText += "Коментар: " + comment;
    document.getElementById("deliveryInfoText").textContent = deliveryInfoText;
});