const Board1 = function(){


    this.count = 5;
    this.document();
}

Board1.prototype.document = function(){
    let self = this;

    $("#header").load("/assets/layout/header.html");
    $("#panel_left").load("/assets/layout/left.html");
    $("#footer").load("/assets/layout/footer.html");

    self.createTable();
    self.clickEvent();
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
                html +=     "<td><button type='button' name='delete' value='" +  item.idx + "' >X</button></td>";
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

    $("button[name=test]").unbind().click(function(){
        let formData = $("form[name=form_test]").serializeObject();
        let date = $.getToday();
        
        if(self.checkEvent("form_test") === false) return false;
    
        let html = "";
        html += "<tr>";
        html +=     "<td>" + self.count + "</td>";
        html +=     "<td>" + formData.id + "</td>";
        html +=     "<td>" + formData.subject + "</td>";
        html +=     "<td>" + formData.contents + "</td>";
        html +=     "<td>" + date + "</td>";
        html +=     "<td><button type='button' name='delete' value='" + self.count + "'>X</button></td>";
        html += "</tr>";
        
        $("#panel_contents tbody").append(html);

        $("form[name=form_test]")[0].reset();
        self.count++;
        self.clickEvent();
    })

    $("button[name=delete]").unbind().click(function(){
        let target = $(this).val();

        $("table tbody").find("button[value=" + target + "]").parents("tr").remove();
    })
}
Board1.prototype.checkEvent = function(type){
    let self = this;

    let input = $("form[name=" + type + "] input");
    let bool = true;
    $.each(input, function(index, item){
        if(item.value == ""){
            input[index].focus();
            bool = false;
            return false;
        }
    })

    return bool;
}