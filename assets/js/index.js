const Index = function(){
    
    this.appendData = {};
    this.document();
}
Index.prototype.document = function(){
    let self = this;
    
    self.clickEvent();
    self.changeEvent();
}
Index.prototype.clickEvent = function(){
    let self = this;
    let display_count = 1;
    let append_count = 1;
    //display_form
    $(".display_form .testButton:eq(0)").unbind().click(function(){
        if($(".display_form .input[type=text]:eq(" + (display_count - 1) + ")").val() === ""){
             return false;
        } else {
            if(self.checkEvent("display") == false) return false;
            if(display_count === $(".display_form .testInput").length - 1){
                $(".display_form button.testButton:eq(0)").text("submit");
            } else if(display_count === $(".display_form .testInput").length){
                self.submitEvent();
                display_count = 0;
                $(".display_form form#testForm1").submit();
            }
            if(display_count < $(".display_form .testInput").length){
                display_count++;
                $(".display_form .testInput").addClass("is-disabled");
                $(".display_form .testInput:eq(" + (display_count-1) + ")").removeClass("is-disabled");
                
            }
        }
    })
    $(".display_form .testButton:eq(1)").unbind().click(function(){
        if(display_count > 1) {
            display_count--;
            $(".display_form .testInput").addClass("is-disabled");
            $(".display_form .testInput:eq(" + (display_count-1) + ")").removeClass("is-disabled");
            if(display_count === ($(".display_form .testInput").length - 1)){
                $(".display_form button.testButton:eq(0)").text("next");
            }
        }
    })
    $(".display_form .testButton:eq(2)").unbind().click(function(){
        
        $(".display_form #testForm1")[0].reset();
        $(".display_form .testInput").addClass("is-disabled");
        $(".display_form .testInput:eq(0)").removeClass("is-disabled");
        $(".display_form .testButton:eq(0)").text("next");
        $(".display_result").empty();
        display_count = 1;
    })
    //append_form
    $(".append_form .testButton:eq(0)").unbind().click(function(){
        if(self.checkEvent("append") == false) return false;
        self.appendData[$(".append_form input:eq(0)").attr("name")] = $(".append_form input:eq(0)").val();
        if(append_count > 3){
            self.submitEvent();
            
            $(".append_form #testForm2").load("assets/include/index.html .testInput1");
            $(".append_form form#testForm2").submit();
            append_count = 0;
        }
        $(".append_form #testForm2").load("assets/include/index.html .testInput" + (append_count+1), function(){
            if(self.appendData[$(".append_form input").attr("name")] != null){
                $(".append_form input").val(self.appendData[$(".append_form input").attr("name")]);
            }  

            append_count++;
        });

    })
    $(".append_form .testButton:eq(1)").unbind().click(function(){  
        $("#testForm2").load("assets/include/index.html .testInput" + (append_count - 1), function(){
            $(".append_form input").val(self.appendData[$(".append_form input").attr("name")]);
        }); 
        append_count--;
    })
    $(".append_form .testButton:eq(2)").unbind().click(function(){  
        $("#testForm2").load("assets/include/index.html .testInput1");
        $(".append_result").empty();
        self.appendData = {};
        append_count = 1;
    })
    
}

Index.prototype.changeEvent = function(){

}

Index.prototype.checkEvent = function(type){
    let self = this;

    let bool = true;

    switch(type){
        case "display" :
            if($(".display_form #testForm1 input:visible").val() == ""){
                bool = false;
                $(".display_form #testForm1 input:visible").focus();
                return false;
            }
        break;
        
        case "append" :
            if($(".append_form #testForm2 input:visible").val() == ""){
                bool = false;
                $(".append_form #testForm2 input:visible").focus();
                return false;
            }
        break;
    }
    return bool;
}

Index.prototype.submitEvent = function(){
    let self = this;

    $(".display_form form#testForm1").unbind().submit(function(e){
        e.preventDefault();

        $(".display_result").empty();
        let formData = $("#testForm1").serializeObject();
        $.each(formData, function(index, item){
            $(".display_result").append("<div>" + index + " : " + item + "</div>");    
        })

        $(".display_form #testForm1")[0].reset();
        $(".display_form .testInput").addClass("is-disabled");
        $(".display_form .testInput:eq(0)").removeClass("is-disabled");
        $(".display_form .testButton:eq(0)").text("next");
    })

    $(".append_form form#testForm2").unbind().submit(function(e){
        e.preventDefault();

        $(".append_result").empty();

        $.each(self.appendData, function(index, item){
         $(".append_result").append("<div>" + index + " : " + item + "</div>");
        })
    })
}