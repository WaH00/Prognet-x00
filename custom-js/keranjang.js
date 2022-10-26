var jumlahBarang = 0;

function addItem(addId){

        jumlahBarang = jumlahBarang + 1;
        document.getElementById("jumlahDitambah").innerHTML = jumlahBarang;
        
};

function removeItem(deleteId){
    
    if(jumlahBarang != 0){
        jumlahBarang = jumlahBarang - 1;
        document.getElementById("jumlahDitambah").innerHTML = jumlahBarang;
    };
    
};