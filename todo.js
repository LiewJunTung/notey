function Search()
{
	var text = document.getElementById('notes').value;

	var compareCall = text.search(/call/i);
	var compareSMS = text.search(/sms/i);
		
	if (compareCall == 0)
		Phonecall();
	else if (compareSMS === 0)
		SMS();
	else 
		alert("Nope!");
}	

function SMS()
{

     var sms = new MozActivity(
     {
     	name: "new", // Possible compose-sms in future versions
     	data: {
     	type: "websms/sms",
     	number: "+0173668195"
     }
     });
}

function Phonecall()
{
            var call = new MozActivity({
                name: "dial",
                data: {
                    number: "+46777888999"
                }
            });
}


function Call()
{
}

 document.addEventListener('DOMContentLoaded', function () {
         var link = document.getElementById('notebutton');
           link.addEventListener('click', function(){          
           Search();
           })
 })
