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
    let count = 0;

    $(".testButton:eq(0)").unbind().click(function(){
        if((count) < $(".testInput").length){
            count++;
            $(".testInput").addClass("is-disabled");
            $(".testInput:eq(" + (count-1) + ")").removeClass("is-disabled");
        }
    })
    $(".testButton:eq(1)").unbind().click(function(){
        if((count) > 1) {
            count--;
            $(".testInput").addClass("is-disabled");
            $(".testInput:eq(" + (count-1) + ")").removeClass("is-disabled");
        }
    })

    
}

Index.prototype.changeEvent = function(){

}