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
    
    $.ajax({
        url: "/testData/board1.json",
        dataType: "json",
        data: "",
        xhrFields: { withCredentials: false },
        async: false,
        success: function(res){
            $.each(res, function(index, item){
                let html = "";
                html += "<tr>";
                html +=     "<td>" + item.idx + "</td>";
                html +=     "<td>" + item.id + "</td>";
                html +=     "<td>" + item.subject + "</td>";
                html +=     "<td>" + item.contents + "</td>";
                html +=     "<td>" + item.regdate + "</td>";
                html += "</tr>";
                
                $("#panel_contents tbody").append(html);
            })
        },
        error: function(status, error){
            console.log(status);
            console.log(error);
        }

    })
}
Board1.prototype.clickEvent = function(){
    let self = this;
}