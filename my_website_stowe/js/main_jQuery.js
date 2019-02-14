$.ajax("data/MegaCities.geojson", {
    dataType: "json",
    success: callback
});
//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/mega_cities.geojson", {
        dataType: "json",
        success: callback
    });
};

//define callback function
function callback(response, status, jqXHRobject){
    //tasks using the data go here
    console.log(JSON.stringify(response));
};

$(document).ready(jQueryAjax);