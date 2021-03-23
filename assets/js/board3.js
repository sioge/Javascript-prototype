const Board3 = function(){

    this.document();
}

Board3.prototype.document = function(){
    let self = this;

    $("#header").load("/assets/layout/header.html");
    $("#panel_left").load("/assets/layout/left.html");
    $("#footer").load("/assets/layout/footer.html");

    self.createBanner();
}

Board3.prototype.createBanner = function(){
    let self = this;
    
    $.getJSON('/testData/board1.json', function(data) {
        let max_count = Object.keys(data).length;
        $.each(data, function(index, item){
            $(".rolling_banner ul").append(
                "<li class='is-disabled'>" +
                    "<div>" + item.idx + "</div>" +
                    "<div>" + item.id + "</div>" +
                    "<div>" + item.subject + "</div>" + 
                    "<div>" + item.contents + "</div>" +
                    "<div>" + item.regdate + "</div>" +
                "</li>"
            );
        })
        self.slideBanner(max_count);
    })
}

Board3.prototype.slideBanner = function(max_count){
    let self = this;
    
    let count = 1;
    
    $(".rolling_banner ul li:eq(0)").removeClass("is-disabled");
    setInterval(function(){
        $(".rolling_banner ul li").addClass("is-disabled");
        if(count < max_count){
            $(".rolling_banner ul li:eq(" + count + ")").removeClass("is-disabled");
            count++;        
        } else {
            $(".rolling_banner ul li:eq(0)").removeClass("is-disabled");
            count = 1;
        }
    }, 3000);
    
    

}