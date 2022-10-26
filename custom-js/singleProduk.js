var jumlahBarang = 0;

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