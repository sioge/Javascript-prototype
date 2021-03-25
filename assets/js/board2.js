const Board2 = function(){

    this.document();
}

Board2.prototype.document = function(){
    let self = this;

    $("#header").load("/assets/layout/header.html");
    $("#panel_left").load("/assets/layout/left.html");
    $("#footer").load("/assets/layout/footer.html");

    self.createCard();
}

Board2.prototype.createCard = function(){
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
                html += "<div class='card_section'>";
                html +=     "<div>" + item.idx + "</div>";
                html +=     "<div>" + item.id + "</div>";
                html +=     "<div>" + item.subject + "</div>";
                html +=     "<div>" + item.contents + "</div>";
                html +=     "<div>" + item.regdate + "</div>";
                html += "</div>";
                
                $(".card_wrap").append(html);
            })
        },
        error: function(status, error){
            console.log(status);
            console.log(error);
        }
    })   
}