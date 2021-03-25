const Board4 = function(){

    this.document();
}

Board4.prototype.document = function(){
    let self = this;

    $("#header").load("/assets/layout/header.html");
    $("#panel_left").load("/assets/layout/left.html");
    $("#footer").load("/assets/layout/footer.html");

    self.createTable();
}

Board4.prototype.createTable = function(){
    let self = this;
    
    $.ajax({
        url: "/api/list.php",
        data: "",
        dataType: "json",
        async: false,
        xhrFields: {  widthCredentials: true },
        success: function(result){
            console.log(result);
        },
        error: function(status, error){

        }
    })
} 