console.log("new");
$(document).ready(function(){
console.log("ready");
  $('li').on('click', function(s){
    s.preventDefault()
    console.log("ok")

      var item = s.target.id;
      console.log("item=="+s.target.id);
      $.ajax({
        type: 'GET',
        url: '/events/'+item,
        dataType: 'json',
        success: function(responseData){
          //do something with the data via front-end framework
          console.log("data"+JSON.stringify(responseData.data));
          console.log("length -->"+JSON.stringify(responseData.data[0].timestamp));
          //console.log("data"+JSON.stringify(responseData.data[0].timestamp));
          var table = document.getElementById('myTable')
          var str = "";
         for(var i=0;i< responseData.data.length; i++)
         {
           //var obj = JSON.parse(responseData.data[i]);
          str += '<tr><td class="leftcolumn"><div class="rowHeader"> timestamp</div><div class="rowContent"> '
                        + JSON.stringify(responseData.data[i].timestamp) +' </div></td><td class="rightcolumn"><div class="rowHeader">'
                         +'_raw</div><div class="rowContent">' + JSON.stringify(responseData.data[i].raw) + ''
                        +'</div></td></tr>';
        }
          //location.reload();
          table.innerHTML = str;
        }
      });
  });

});
