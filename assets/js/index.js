const Index = function(){
    

    this.document();
}
Index.prototype.document = function(){
    let self = this;
    
    self.clickEvent();
    self.changeEvent();
}
Index.prototype.clickEvent = function(){
    let self = this;
    let count = 1;

    $(".display_form .testButton:eq(0)").unbind().click(function(){
        if($(".display_form .input[type=text]:eq(" + (count - 1) + ")").val() === ""){
             return false;
        } else {
            if(self.checkEvent(count) == false) return false;
            if(count === $(".display_form .testInput").length - 1){
                $(".display_form button.testButton:eq(0)").text("submit");
            } else if(count === $(".display_form .testInput").length){
                self.submitEvent();
                $(".display_form form#testForm1").submit();
            }
            if(count < $(".display_form .testInput").length){
                count++;
                $(".display_form .testInput").addClass("is-disabled");
                $(".display_form .testInput:eq(" + (count-1) + ")").removeClass("is-disabled");
                
            }
        }
    })
    $(".display_form .testButton:eq(1)").unbind().click(function(){
        if(count > 1) {
            count--;
            $(".display_form .testInput").addClass("is-disabled");
            $(".display_form .testInput:eq(" + (count-1) + ")").removeClass("is-disabled");
            if(count === ($(".display_form .testInput").length - 1)){
                $(".display_form button.testButton:eq(0)").text("next");
            }
        }
    })
    $(".display_form .testButton:eq(2)").unbind().click(function(){
        
        $(".display_form #testForm1")[0].reset();
        $(".display_form .testInput").addClass("is-disabled");
        $(".display_form .testInput:eq(0)").removeClass("is-disabled");
        $(".display_form .testButton:eq(0)").text("next");
        count = 1;
    })

    $(".append_form .testButton:eq(0)").unbind().click(function(){
        $(".append_form #testForm2").load("assets/include/index.html", function(){
            $(".append_form .testButton:eq(1)").unbind().click(function(){  
                $("#testForm2").empty();
            })
            
        });
    })
    
}

Index.prototype.changeEvent = function(){

}

Index.prototype.checkEvent = function(count){
    let self = this;

    let bool = true;
    if($("input:visible").val() == ""){
        bool = false;
        $("input:visible").focus();
    }

    return bool;
}

Index.prototype.submitEvent = function(){
    let self = this;

    $(".display_form form#testForm1").submit(function(e){
        e.preventDefault();

        console.log("here!");
    })

}