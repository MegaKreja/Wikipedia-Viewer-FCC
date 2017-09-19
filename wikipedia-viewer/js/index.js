var btnSearch = document.getElementById("btnSearch");
var results = document.getElementById("results");

btnSearch.addEventListener("click", function(){
  var search = document.getElementById("inputSearch").value;
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + search + "&callback=?", function(data){
    console.log(data);
    for(var i = 0; i <= data.length; i++) {
      console.log(data);
      results.innerHTML += "<li><a target='_blank' href=" + data[3][i] +">" + data[1][i] + "</a></li>"; 
    }
  });
   results.innerHTML = "";
});

document.addEventListener('keypress', function(e) {
  var keynum = e.keyCode || e.which;
  if(keynum == 13) {
     var search = document.getElementById("inputSearch").value;
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + search + "&callback=?", function(data){
    for(var i = 0; i <= data.length; i++) {
      results.innerHTML += "<li><a target='_blank' href=" + data[3][i] +">" + data[1][i] + "</a></li>"; 
     }
   });
   results.innerHTML = "";  
  }
});