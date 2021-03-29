$.fn.serializeObject = function () {
  'use strict';
  var result = {};
  var extend = function (i, element) {
    var node = result[element.name];
    if ('undefined' !== typeof node && node !== null) {
      if ($.isArray(node)) {
        node.push(element.value);
      } else {
        result[element.name] = [node, element.value];
      }
    } else {
      result[element.name] = element.value;
    }
  };

  $.each(this.serializeArray(), extend);
  return result;
};
$.fn.pagination = function(page, dataPerPage, total){
  

  let pageCount = 5;
  totalPage = Math.ceil(total / dataPerPage);
  
}
$.getToday = function(){
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}