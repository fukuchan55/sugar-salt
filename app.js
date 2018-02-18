
function addTodoSlider(camera_url) {
    var title = $("#todo-title").val();
     var time = new Date().getTime();
//    var bodyx = '<label for="slider-0">' + title + ':</label><input type="range" name="slider-0" id="slider-0" value="25" min="0" max="100">';
    var body = '<label for="slider-' + time + '">'+ title + ':</label><input type="range" name="' + time + '" id="' + time + '" value="25" min="0" max="100" data-highlight="true"/>';

    $.mobile.changePage($("#list-page"));
//    $("#data-list").append("<li>" + "<p>" + body + "</p></li>")
//    $("#data-list").listview('refresh');
//    $("#itemlist").append("<p>" + body + "</p>")
    $("#itemlist").append("<p class='item-p'>" + body  + "</p>")
    
    if (title != '') {
        addData(title, 25); // Save to local storage
    }  
};

///// Initialize top page
function initTopPage() {
    $("#data-list").empty();
    
    var list = getDataList();

    for (var i in list) {
        var data = list[i];
//        alert("id=" + data.id + " name=" + data.name+ " value=" + data.value);
//        var d = new Date(memo.time);
//        var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        var body = '<label for="slider-' + data.id + '">'+ data.name + ':</label><input type="range" name="' + data.id + '" id="' + data.id + '" value="' + data.value + '" min="0" max="100" data-highlight="true"/>';
    
        //$li = $("<li><p>" + body + "</p></li>");
//        $li.data("id", memo.id);
//        $li.find("h3").text(date);
//        $li.find("p").text(memo.text);
     //   $("#data-list").append($li);
         $("#itemlist").append("<p class='item-p'>" + body + "</p>")
    }
    if (list.length == 0) {
        $li = $("<li>No data</li>");
        $("#data-list").prepend($li);
    }
    $("#data-list").listview("refresh");  // Call refresh after manipulating list
    $("#navbar").hide();
}

///// 設定ボタンクリック時の処理
function onClickSet(){
//    if ( $("#navbar").css('display') == 'block' ) {
//        $("#navbar").hide();
//    } else {
//        $("#navbar").show();
//    }
    $("#navbar").toggle();
}
     

///// 上へボタンクリック時の処理
function onClickUp(){
}

///// 下へボタンクリック時の処理
function onClickDown(){
}

///// 編集ボタンクリック時の処理
function onClickEdit(){
}

///// 削除ボタンクリック時の処理
function onClickDelete(){
}

function clearColor()
{
//      var num = $("#itemlist").find('p').length;
//    alert("len=" + num);
    $.each($("#itemlist p"), function(i, val) {
         $(this).css('background-color', '');
//         console.log($(this).children("label").text());
   });
}
///// 項目クリック時の処理
function onClickP(){
    if ( $("#navbar").css('display') == 'block' ) {
         clearColor();
        $(this).css('background-color', 'green');
    }
}

///// Called when app launch
function onReady() {
    
    initTopPage();

$("#itemlist").on("change", ":input", function(){
    var val = $(this).val();
//    alert("a1 id=" + this.id + " value=" + val);
    changeData(this.id, val);
});

$("#set").click(onClickSet)
$("#up").click(onClickUp)
$("#down").click(onClickDown)
$("#edit").click(onClickEdit)
$("#delete").click(onClickDelete)
$(".item-p").click(onClickP)

//    $("#SaveBtn").click(onSaveBtn);
//    $("#TopListView").on("click", "a.show", onShowLink);
//    $("#TopListView").on("click", "a.delete", onDeleteLink);
}

history.pushState(null, null, null);
$(onReady); // on DOMContentLoaded
