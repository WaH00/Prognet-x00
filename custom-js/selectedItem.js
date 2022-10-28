function selectedPopUpOn(){
    
    if (document.getElementById('popup').className != 'container d-inline fixed-top popup-on'){
        document.getElementById('popup').className = 'container d-inline fixed-top popup-on';
    }

    var createRow = document.createElement('tr');
    var createData1 = document.createElement('td');
    var createData2 = document.createElement('td');
    var createData3 = document.createElement('td');
    var createData4 = document.createElement('td');
    var createData5 = document.createElement("p");
    
    var data1Text = document.createTextNode("addNo");
    var data2Text = document.createTextNode("addProduk");
    var data3Text = document.createTextNode("addJumlah");
    var data4Text = document.createTextNode("addHarga");
    var data5Text = document.createTextNode("addTotal");

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
  
  