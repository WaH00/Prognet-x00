// UNTUK BUTTON DI PAGE SINGLE PRODUCT

var jumlahBarang = 0;

function loadClickedItem(){
    var loadProduct = sessionStorage.getItem('product');
    var loadPrice = sessionStorage.getItem('price');
    var loadImage = sessionStorage.getItem('imgsrc');


    for (var i = 1; i < 6; i++){
        var idname = "idSglimage" + i;
        var imgelement1 = document.getElementById(idname);
        imgelement1.setAttribute("src", loadImage);
    }

    document.getElementById('idSglProduct').innerHTML = loadProduct;
    document.getElementById('idSglPrice').innerHTML = loadPrice;


    // sessionStorage.clear();    
};

function addItem(){

    var stock = document.getElementById("stockBarang").textContent;
    var intStock = parseInt(stock);
    if(jumlahBarang < intStock){
        jumlahBarang = jumlahBarang + 1;
        document.getElementById("jumlahDitambah").innerHTML = jumlahBarang;
    };
};

function removeItem(){
    
    if(jumlahBarang != 0){
        jumlahBarang = jumlahBarang - 1;
        document.getElementById("jumlahDitambah").innerHTML = jumlahBarang;
    };
    
};

function addToStorage(){

    var list = sessionStorage.getItem('syrlist');
    var nama = document.getElementById("idSglProduct").innerHTML; //ngambil element text dari ID element untuk nama product
    var jumlah = document.getElementById("jumlahDitambah").innerHTML;   //ngambil element text dari ID element untuk harga product
    var harga = document.getElementById("idSglPrice").innerHTML;
    productkey = "productchoosed" + list; 
    selectedkey = "manychoosed" + list;
    pricekey = "pricechoosed" + list;


    if(jumlah > 0){
        sessionStorage.setItem(productkey, nama);                 //menyimpan nama product ke storage selama tabs masih ada
        sessionStorage.setItem(selectedkey, jumlah);                      //menyimpan nama product ke storage selama tabs masih ada
        sessionStorage.setItem(pricekey, harga);   
    }else{
        sessionStorage.removeItem(productkey);
        sessionStorage.removeItem(selectedkey);
        sessionStorage.removeItem(pricekey);
    }
                   
}

function cekitem(){
    var imgsrc = sessionStorage.getItem('imgsrc');
    var itemnum = imgsrc.charAt(imgsrc.length-5);
    alert(itemnum);
}