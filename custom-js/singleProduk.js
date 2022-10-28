// UNTUK BUTTON DI PAGE SINGLE PRODUCT

var jumlahBarang = 0;

function loadClickedItem(){
    var loadProduct = sessionStorage.getItem('product');
    var loadPrice = sessionStorage.getItem('price');
    // var loadImage = sessionStorage.getItem('imgsrc');

    // document.getElementById('idSglImage').src = loadImage;
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
    var nama = document.getElementById("idSglProduct").innerHTML; //ngambil element text dari ID element untuk nama product
    var jumlah = document.getElementById("jumlahDitambah").innerHTML;   //ngambil element text dari ID element untuk harga product
    sessionStorage.setItem('productChoosed', nama);                 //menyimpan nama product ke storage selama tabs masih ada
    sessionStorage.setItem('manyChoosed', jumlah);                     //menyimpan nama product ke storage selama tabs masih ada
}