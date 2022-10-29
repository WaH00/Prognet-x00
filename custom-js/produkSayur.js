//MASUKIN ITEM KE SESSION STORAGE DARI PAGE SAYUR

function updateItemSayur(idButton, idProduct, idPrice, idSayur){                             //id dari element yang di click

    var itemnum = idButton.charAt(idButton.length-1);
    var imgsrc = "/assets/produk/sayur/sayur" + itemnum + ".jpg";

    var product = document.getElementById(idProduct).innerHTML; //ngambil element text dari ID element untuk nama product
    var price = document.getElementById(idPrice).innerHTML;     //ngambil element text dari ID element untuk harga product
    var list = document.getElementById(idSayur).id;  
    sessionStorage.setItem('product', product);                 //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('price', price);                     //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('imgsrc', imgsrc);                 //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('syrlist', list);
};