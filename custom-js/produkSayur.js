
// onClick="reply_click(this.id)"
// taruh di element untuk ngambil id yang bakal di pakek di fungsi
// untuk percabangannya

function updateItem(ClickedId){                             //id dari element yang di click

    if(ClickedId == ''){
        var imgsrc = '/assets/produk/';
    }else if(ClickedId == ''){
        var imgsrc = '/assets/produk/';
    }else if(ClickedId == ''){
        var imgsrc = '/assets/produk/';
    }else if(ClickedId == ''){
        var imgsrc = '/assets/produk/';
    }else if(ClickedId == ''){
        var imgsrc = '/assets/produk/';
    }else if(ClickedId == ''){
        var imgsrc = '/assets/produk/';
    };


    var product = document.getElementById(ClickedId).innerHTML; //ngambil element text dari ID element untuk nama product
    var price = document.getElementById(ClickedId).innerHTML;   //ngambil element text dari ID element untuk harga product
    sessionStorage.setItem('product', product);                 //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('price', price);                     //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('imgsrc', imgsrc);                   //menyimpan nama product ke storage selama tabs masih ada

};

    // untuk ngambil text element
    // kontol
    // ngambil alamat foto dari produk yang di click (gagal)
    // getStorageImg = sessionStorage.getItem('imgSayur1');
    // document.getElementById("singleProdukItem").src =   