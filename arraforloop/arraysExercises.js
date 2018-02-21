$(function() {

    var arr = [2, 5, 6, 10, 16, 7, 8];
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    $(".q1-function").click(function() {
        output();
    });

    $(".q2-function").click(function() {
        //GET NUMBER FROM INPUT BOX
        //CALL listElements
        listElements(shapes);
        var shapes=($(".numElements").val());
    });
    $(".q3-function").click(function() {
        //CALL fillArray
        fillArray();
    });
    $(".q4-function").click(function() {
        //CALL pairingArrays
        pairingArrays();
    });
});

var output = function() {
    var arr = [2, 5, 6, 10, 16, 7, 8];
    for(i = 0; i < arr.length; i += 2);
        $(".q1-output").append(arr[i] + "</br>");
};
var listElements = function(n) {
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    for(i = 0; i < n; i++);
    $(".q2-output").append(shapes[i] + "</br>");
    
};

var fillArray = function() {
    var color = ["Orange","Yellow","Green"];
    for(i = 0; i < color; i++);
    $(".q3-output").append();
    color = color + i;

};
var pairingArrays = function() {
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    var arr =[2,5,6,10,16,7,8];
    for(i=3;i<shapes; i++);
    $(".q4-output").append(arr[i]+"</br>");

};