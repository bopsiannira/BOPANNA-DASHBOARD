$(function(){

    var $bikes = $('#bikes');
    var $bname = $('#bname');
    var $model = $('#model');
    var $id = $('#id');

    $.ajax({

        type: 'GET',
        url: 'http://localhost:8080/Simple/webresources/bike/details',
        success: function(bike) {
        console.log(bike);
           $.each(bike.bike, function(i,bike){
                $bikes.append ('<li> Bname: ' + bike.bname +', model: '+ bike.model + ', id: ' +bike.id +'  </li>');
            });
        },
        error: function(){
            alert('Please try again');
        }
    });


$('#add-bike').on('click',function()
   {       
        biker()
    });    
function biker()

{
    

    var url = "http://localhost:8080/Simple/webresources/bike/insert";

    var biker = {};

    biker.bname = $('#bname').val();

    biker.model = $('#model').val();

    biker.id = $('#id').val();

    if(biker){

        $.ajax({

            url: url,

            contentType:"application/json; charset=utf-8",

            dataType: "json",

            data: JSON.stringify(biker),

            type: "POST",

            success: function(result){

                //getProduct();

               

                alert("Bike launched");

            },

            error: function(msg){

                alert(msg);

            }

        });

    }

}

$('#update-bike').on('click',function()
{       
     update()
 });
function update()

{

   
    var url = "http://localhost:8080/Simple/webresources/bike/update";

    var biker = {};

    biker.bname = $('#editname').val();

    biker.id = $('#editid').val();

    if(biker){

        $.ajax({

            url: url,

            contentType:"application/json; charset=utf-8",

            dataType: "json",

            data: JSON.stringify(biker),

            type: "PUT",

            success: function(result){

                //getProduct();

               

                alert("Bike updated");

            },

            error: function(msg){

                alert(msg);

            }

        });

    }

}
  
    $('#delete').on('click',function()
   {       
        deletebike()
    });
    function  deletebike(){
        var qid =  document.getElementById("deletebike").value;
        console.log(qid);
        $.ajax({
                type: 'DELETE',
                url : 'http://localhost:8080/Simple/webresources/bike/delete/'+qid,
                success: alert("Bike Sold \n"+qid)
            });
        }
        
        });