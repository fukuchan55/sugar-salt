// This is a JavaScript file

///// Return list of data
function getDataList() {
    var list = localStorage.getItem("satosio_list");
    if (list == null) {
        return new Array();
    } else {
        return JSON.parse(list);
    }
}

///// Save data
function saveDataList(list) {
    try {
        localStorage.setItem("satosio_list", JSON.stringify(list));
    } catch (e) {
        alert('Error saving to storage.');
        throw e;
    }
}

///// Add data
function addData(name, v) {
  var list = getDataList();
  var time = new Date().getTime();
  list.push({ id: time, name: name, value: v });
  saveDataList(list);
}

///// change data
function changeData(id, v) {
  var list = getDataList();
  for (var i in list) {
        var data = list[i];
        if ( data.id == id ) {
            data.value = v;
//            alert("name=" + data.name + " value=" + data.value);
            break;
        }
    }
  saveDataList(list);
}