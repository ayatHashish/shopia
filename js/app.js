
  var running = false;
  function send() {
    if (running == true) return;
    var msg = document.getElementById("message").value;
    if (msg == "") return;
    running = true;
    addMsg(msg);
    // DELAY MESSAGE RESPONSE
    window.setTimeout(addResponseMsg, 1000, msg);
  }

  function addMsg(msg) {
    var div = document.createElement("div");
    div.innerHTML =
      "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
      msg +
      "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    // SEND MESSAGE TO API
    document.getElementById("message").value = "";
    document.getElementById("message-box").scrollTop = document.getElementById(
      "message-box"
    ).scrollHeight;
  }

  function addResponseMsg(msg) {
    var div = document.createElement("div");
    var response = generateResponse(msg);
    div.innerHTML = "<div class='chat-message-received'>" + response + "</div>";
    div.className = "chat-message-div";
    document.getElementById("message-box").appendChild(div);
    document.getElementById("message-box").scrollTop = document.getElementById(
      "message-box"
    ).scrollHeight;
    running = false;
}

function generateResponse(msg) {
    var response;
    switch(msg.toLowerCase()) {
        case "hello":
        case "hi":
            response = "Hi there! How can I assist you today?";
            break;
        case "do you offer free shipping":
            response = "Yes, we offer free shipping on orders over $100.";
            break;
        case "what payment methods do you accept?":
            response = "We accept all major credit cards, PayPal, and bank transfers.";
            break;
        case "what is your return policy":
            response = "Our return policy allows returns within 30 days of purchase for a full refund.";
            break;
            case "what is your name":
            response = "I'm a simple chatbot.";
            break;
        default:
            response = "I'm sorry, I didn't understand that. Could you please rephrase your question?";
    }
    return response;
}

  document.getElementById("message").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      send();
    }
  });

  document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
      document.getElementById("chatbot").classList.remove("collapsed");
      document.getElementById("chatbot_toggle").children[0].style.display = "none";
      document.getElementById("chatbot_toggle").children[1].style.display = "";
      setTimeout(addResponseMsg,1000,"Hi");
    } else {
      document.getElementById("chatbot").classList.add("collapsed");
      document.getElementById("chatbot_toggle").children[0].style.display = "";
      document.getElementById("chatbot_toggle").children[1].style.display = "none";
    }
  };




  //  addToFavorites

  document.addEventListener("DOMContentLoaded", function() {
    var addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
    addToFavoritesButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var productTitle = this.closest('.single-product').querySelector('.product-title').textContent;
            var productPrice = this.closest('.single-product').querySelector('.product-price').textContent;
            addToFavorites(productTitle, productPrice);
        });
    });

    function addToFavorites(title, price) {
        // You can implement your logic to add the product to the favorites list here
        // For example, you can store the product information in localStorage or send it to the server via AJAX
        console.log("Added to favorites: " + title + " - " + price);
    }
});