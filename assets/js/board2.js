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
    
    $.getJSON('/testData/board1.json', function(data) {
        $.each(data, function(index, item){
            $(".card_wrap").append(
                "<div class='card_section'>" +
                    "<div>"+ item.idx + "</div>" +
                    "<div>"+ item.id + "</div>" +
                    "<div>"+ item.subject + "</div>" +
                    "<div>"+ item.contents + "</div>" +
                    "<div>"+ item.regdate +  "</div>" +
                "</div>"
            );
        })
    })

    
    
}