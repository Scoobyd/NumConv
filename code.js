
$(document).ready(function(){
     var res;      
     var num;
     
     var from=10;
     var to=10;
$("#from").change(function() {
  from = +($(this).children(":selected").attr("id"));

});


$("#to").change(function() {
  to = +($(this).children(":selected").attr("id"));

});
     
     
     $("#convert").on('click tap', function(){
         
         num = ($("#textmezo").val());
         num = parseInt(num, from);
             res = num.toString(to);  
              $(".result").text(res.toUpperCase());
           }); 
           if (navigator.onLine==false){ 
            $( "#ad" ).hide();
             }
 });
