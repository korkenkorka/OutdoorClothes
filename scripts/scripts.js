function change_image (imgclass, imgdir) {
    document.getElementById(imgclass).src = "img/" + imgdir;
};

function display_form (contactustab, contactusform, x) {
    document.getElementById(contactustab).style.display = "grid";
    document.getElementById(contactusform).style.display = "grid";
    document.getElementById(x).style.display = "inline";
};

function close_form (contactustab, contactusform, x) {
    document.getElementById(contactustab).style.display = "inline";
    document.getElementById(contactusform).style.display = "none"; 
    document.getElementById(x).style.display = "none";
};

function get_data (){
if (sessionStorage.getItem("data_av") == "true")
    {
        document.getElementById("in-cart").innerHTML += sessionStorage.getItem("data");
        get_shop_bar(1);
    }
    else
    {
        console.log("no data");
    };
};

value = 0;

function get_shop_bar (show_value) {
    value = sessionStorage.getItem("curValue");
    
    if (show_value > 0) {
        document.getElementById("pop-up-select").style.display = "none";
        if (value < 2)
        {
            document.getElementById("item-count").innerHTML = value + " vara";
        }
        else
        {
            document.getElementById("item-count").innerHTML = value + " varor";
        };
    
        if  (show_value > 0) {
            document.getElementById("shopping-cart").style.display = "grid";
        };

        sessionStorage.setItem("curValue", value);
    };
};

function item_call (itemcallimg, itemcallingimgalt, itemcallname, itemcallprice) {
    size = document.getElementById("size-select").value;


    
    if (size == "size") {
        document.getElementById("pop-up-select").style.display = "inline";
    }
    else
    {
        get_shop_bar(1);

        document.getElementById("in-cart").innerHTML += `
        <div class="item-cart-card">
            <h2>${itemcallname}</h2>
            <h4>Storlek: ${size}</h4>
            <h3>${itemcallprice} kr</h3>
            <img class="item-cart-card-img" src="img/${itemcallimg}" alt="${itemcallingimgalt}">
        </div>
        `;

        document.getElementById("total-sum-t").innerHTML = "Totalt: " + price_calc(itemcallprice) + ".00 kr";

        data = document.getElementById("in-cart").innerHTML;

        dataAv = "true";

        sessionStorage.setItem("data", data);

        sessionStorage.setItem("data_av", dataAv)
    };
};

var price = 0;

function price_calc (itemAdded) {
    price = price + parseInt(itemAdded, 10);
    return price;
}


function hover_show_cart () {
    document.getElementById("cart-box").style.display = "inline";
    document.getElementById("total-sum").style.display = "inline";
};

function hover_none_show_cart () {
    document.getElementById("cart-box").style.display = "none";
    document.getElementById("total-sum").style.display = "none";
};