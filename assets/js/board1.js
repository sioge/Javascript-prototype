const Board1 = function(){

    this.document();
}

Board1.prototype.document = function(){
    let self = this;

    $("#header").load("/assets/layout/header.html");
    $("#panel_left").load("/assets/layout/left.html");
    $("#footer").load("/assets/layout/footer.html");

    self.createTable();
}

Board1.prototype.createTable = function(){
    let self = this;
    
    $.getJSON('/testData/board1.json', function(data) {
        $.each(data, function(index, item){
            $("#panel_contents tbody").append(
                "<tr>" +
                    "<td>" + item.idx + "</td>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.subject + "</td>" +
                    "<td>" + item.contents + "</td>" +
                    "<td>" + item.regdate + "</td>" +
                "</tr>"
            );
        })
    })
}