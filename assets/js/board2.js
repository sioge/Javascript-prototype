const Board2 = function(){

    this.count = 5;

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
                html +=     "<div class='input_section'>";
                html +=         "<div>" + item.idx + "</div>";
                html +=         "<div>" + item.id + "</div>";
                html +=         "<div>" + item.subject + "</div>";
                html +=         "<div>" + item.contents + "</div>";
                html +=         "<div>" + item.regdate + "</div>";
                html +=     "</div>";
                html +=     "<div class='delete_btn'>delete</div>";
                html += "</div>";
                
                $(".card_wrap").append(html);
            })
            self.clickEvent();
        },
        error: function(status, error){
            console.log(status);
            console.log(error);
        }
    })   
}
Board2.prototype.clickEvent = function(){
    let self = this;

    $(".delete_btn").unbind().click(function(){
        $(this).parents(".card_section").remove();
    })

    $(".submit_btn").unbind().click(function(){
        let id = $(".input_section input[name=id]").val();
        let subject = $(".input_section input[name=subject]").val();
        let contents = $(".input_section input[name=contents]").val();
        let date = $.getToday();

        let html = "";
        html += "<div class='card_section'>";
        html +=     "<div class='input_section'>";
        html +=         "<div>" + self.count + "</div>";
        html +=         "<div>" + id + "</div>";
        html +=         "<div>" + subject + "</div>";
        html +=         "<div>" + contents + "</div>";
        html +=         "<div>" + date + "</div>";
        html +=     "</div>";
        html +=     "<div class='delete_btn'>delete</div>";
        html += "</div>";
        
        $(".card_wrap").append(html);

        self.count++;
        self.clickEvent();
    })
}