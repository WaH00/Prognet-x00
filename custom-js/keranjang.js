// UNTUK PAGE KERANJANG

var jumlahBarang = 0;

function addItem(addId){

    var jumlahIsi = document.getElementById(addId).textContent;
    jumlahIsi = parseInt(jumlahIsi)
    jumlahIsi = jumlahIsi + 1;
    document.getElementById(addId).innerHTML = jumlahIsi;
        
};

function removeItem(deleteId){
    
    var jumlahIsi = document.getElementById(deleteId).textContent;
    jumlahIsi = parseInt(jumlahIsi)

    if(jumlahIsi != 0){
        jumlahIsi = jumlahIsi - 1;
        document.getElementById(deleteId).innerHTML = jumlahIsi;
    };
    
};

function addToChart(){

    var parent = document.getElementById("tableBody");

    //new id
    var count = document.getElementById("tableBody").childElementCount;
    var newid = "item" + count;
    var onClickRemove = "removeItem('" + newid + "');";
    var onClickAdd = "addItem('" + newid + "');";

    // New Row
    var createRow = document.createElement('tr');
    // Gambar Sampah
    var createTh = document.createElement('th'); 
    var createA = document.createElement('a');
    var createI1 = document.createElement('i');
    // Gambar Produk
    var createData1 = document.createElement('td'); 
    var createImg = document.createElement('img');
    // Nama Produk
    var createData2 = document.createElement('td'); 
    // Harga Produk
    var createData3 = document.createElement('td'); 
    // Button Add - Remove
    var createData4 = document.createElement('td'); 
    var createBtn1 = document.createElement('button');
    var createI2 = document.createElement('i');
    var createSpan = document.createElement('span');
    var createBtn2 = document.createElement('button');
    var createI3 = document.createElement('i')
    // Sub-Total
    var createData5 = document.createElement('td');  
    
    var data2Text = document.createTextNode("Nama");
    var data3Text = document.createTextNode("Rp. Harga");
    var datajumlah = document.createTextNode("1");
    var data5Text = document.createTextNode("Sub-Total");

    // New Baru
    parent.appendChild(createRow);

    // Gambar Sampah
    createRow.appendChild(createTh);
    createTh.setAttribute("scope", "row");
    createTh.appendChild(createA);
    createA.appendChild(createI1);
    createI1.setAttribute("class", "fa-solid fa-trash text-success fs-4");

    // Gambar Produk
    createRow.appendChild(createData1);
    createData1.appendChild(createImg);
    createImg.setAttribute("src", "../assets/produk/sayur/sayur1.jpg");
    createImg.setAttribute("class", "img-cart");

    // Nama Produk
    createRow.appendChild(createData2);
    createData2.appendChild(data2Text);

    // Harga Produk
    createRow.appendChild(createData3);
    createData3.appendChild(data3Text);

    // Button add - Remove
    createRow.appendChild(createData4);
    createData4.appendChild(createBtn1);
    createBtn1.setAttribute("type", "button");
    createBtn1.setAttribute("class", "btn btn-dark");
    createBtn1.setAttribute("onclick", onClickRemove);
    createBtn1.appendChild(createI2);
    createI2.setAttribute("class", "fas fa-minus");
    createData4.appendChild(createSpan);
    createSpan.appendChild(datajumlah);
    createSpan.setAttribute("class", "mx-2");
    createSpan.setAttribute("id", newid);
    createData4.appendChild(createBtn2);
    createBtn2.setAttribute("type", "button");
    createBtn2.setAttribute("class", "btn btn-dark");
    createBtn2.setAttribute("onclick", onClickAdd);
    createBtn2.appendChild(createI3);
    createI3.setAttribute("class", "fas fa-plus");
    
    // Sub-Total
    createRow.appendChild(createData5);
    createData5.appendChild(data5Text);
};