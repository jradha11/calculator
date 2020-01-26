$(".button").click(function(){
  var c=this.value;
  if(this.value=="ac")
  $("#result").html(0);
  else{
  if(c=="=")
  {
    var final=eval($("#result").html());
    $("#result").html(final);
  }
  else
  {
    if($("#result").html()=="0")
    $("#result").html(c);
    else{
    $("#result").html($("#result").html()+c);}
  }}
});
