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

    $.ajax({
        url: "/testData/board1.json",
        dataType: "json",
        data: "",
        xhrFields: { withCredentials: false },
        async: false,
        success: function(res){
            let max_count = Object.keys(res).length;
            $.each(res, function(index, item){
                let html = "";
                html += "<li class='is-disabled'>";
                html +=     "<div>" + item.idx + "</div>";
                html +=     "<div>" + item.id + "</div>";
                html +=     "<div>" + item.subject + "</div>";
                html +=     "<div>" + item.contents + "</div>";
                html +=     "<div>" + item.regdate + "</div>";
                html += "</div>";
                
                $(".rolling_banner ul").append(html);
            })
            self.slideBanner(max_count);
        },
        error: function(status, error){
            console.log(status);
            console.log(error);
        }
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

Board.prototype.clickEvent = function (){


}