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
    

}