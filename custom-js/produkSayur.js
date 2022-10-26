function updateItemSayur(idButton, idProduct, idPrice){                             //id dari element yang di click

    if(idButton == 'idButtonSayur1'){
        var imgsrc = "/assets/produk/sayur/sayur1.jpg";
    }else if(idButton == 'idButtonSayur2'){
        var imgsrc = '/assets/produk/sayur/sayur2.jpg';
    }else if(idButton == 'idButtonSayur3'){
        var imgsrc = '/assets/produk/sayur/sayur3.jpg';
    }else if(idButton == 'idButtonSayur4'){
        var imgsrc = '/assets/produk/sayur/sayur4.jpg';
    }else if(idButton == 'idButtonSayur5'){
        var imgsrc = '/assets/produk/sayur/sayur5.jpg';
    }else if(idButton == 'idButtonSayur6'){
        var imgsrc = '/assets/produk/sayur/sayur6.jpg';
    };

    var product = document.getElementById(idProduct).innerHTML; //ngambil element text dari ID element untuk nama product
    var price = document.getElementById(idPrice).innerHTML;   //ngambil element text dari ID element untuk harga product
    sessionStorage.setItem('product', product);                 //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('price', price);                     //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('imgsrc', imgsrc)                  //menyimpan nama product ke storage selama tabs masih ada

};