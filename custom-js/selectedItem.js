// MUNCULIN POP UP UNTUK HISTORY ADDED

function selectedPopUpOn(){
    
    if (document.getElementById('popup').className != 'container d-inline fixed-top popup-on'){
        document.getElementById('popup').className = 'container d-inline fixed-top popup-on';
    }

    var keyProduct = "productchoosed";
    var keymany = "manychoosed";
    var keyprice = "pricechoosed";

    for(var i = 1; i < 48; i++){

        if(sessionStorage.getItem(keyProduct + i) !== null){        

            var nomor = 1;
            var jumlah = sessionStorage.getItem(keymany + i);
            var harga = sessionStorage.getItem(keyprice + i);

            var numInt = harga.replace(/\D/g, "");
            var subtotal = jumlah * numInt;

            var createRow = document.createElement('tr');
            var createData1 = document.createElement('td');
            var createData2 = document.createElement('td');
            var createData3 = document.createElement('td');
            var createData4 = document.createElement('td');
            var createData5 = document.createElement("p");

            var data1Text = document.createTextNode(nomor);
            var data2Text = document.createTextNode(sessionStorage.getItem(keyProduct + i));
            var data3Text = document.createTextNode(jumlah);
            var data4Text = document.createTextNode(harga);
            var data5Text = document.createTextNode("Rp." + subtotal);

            createData1.appendChild(data1Text);
            createData2.appendChild(data2Text);
            createData3.appendChild(data3Text);
            createData4.appendChild(data4Text);
            createData5.appendChild(data5Text);

            var parent = document.getElementById("tableBody");
            parent.appendChild(createRow);
            createRow.appendChild(createData1);
            createRow.appendChild(createData2);
            createRow.appendChild(createData3);
            createRow.appendChild(createData4);
            createRow.appendChild(createData5);
        }
    }
};

function selectedPopUpOff(){
    
    if (document.getElementById('popup').className == 'container d-inline fixed-top popup-on'){
            document.getElementById('popup').className = 'container d-inline fixed-top popup-off';
    }
    if (document.getElementById('popup').className == 'container d-inline fixed-top popup-off'){
        delay(1000).then(() => document.getElementById('popup').className = 'container d-inline fixed-top popup-none');
    }

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
  