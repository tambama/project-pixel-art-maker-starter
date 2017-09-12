// Select color input
var color, height, width;

color = $("#colorPicker")[0].value;

$("#colorPicker").on('change', function(){
    color = $(this)[0].value;
})
// Select size input
$("#sizePicker").submit(function(event){
    event.preventDefault();
    clearGrid();
    height = $("#input_height").val();
    width = $("#input_width").val();

// When size is submitted by the user, call makeGrid()
    makeGrid();    
})

function makeGrid() {

    var table = $("#pixel_canvas");
    var tr = "<tr></tr>";
    var td = "<td></td>";

    for(var row = 0; row < height; row++ ){
        table.append(tr);
    }

    $("tr").each(function(){
        for(var col = 0; col < width; col++){
            $(this).append(td);
        }
    })

    $("td").on('click', function(event){
        $(event.target).css("background-color", color);
        console.log($(event.target), color);
    })

}

function clearGrid(){
    $("#pixel_canvas").children().remove();
}

