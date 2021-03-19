


$(document).ready(function ()
{
    $('#kermezo').keyup(beolvas);
});

function kiir()
{
    var HTMLtartalom="<select>";
    for (var ered in eredmenyek)
    {
        HTMLtartalom+="<option>"+eredmenyek[ered].nev+"</options>";
        Console.log(ered);
        
    }
    $('#terulet').html(HTMLtartalom);
}


var eredmenyek=[];

function beolvas()
{
    console.log("itt van");
        $.ajax({
        type: "GET",
        url: "Feldolgoz.php",
        success: function (result)
        {

            eredmenyek=JSON.parse(result);
            Console.log(eredmenyek);



        },
        error: function () 
        {
            alert("Hiba az datok betoltesekor");
        }
    });
}
function kiir()
{
    for (var ered in eredmenyek)
    {
        
        
    }
}


