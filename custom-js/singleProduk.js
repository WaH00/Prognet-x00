var jumlahBarang = 0;

function loadClickedItem(){
    var loadProduct = sessionStorage.getItem('product');
    var loadPrice = sessionStorage.getItem('price');
    var loadImage = sessionStorage.getItem('imgsrc');

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