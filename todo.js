function Main()
{
        var text = document.getElementById('task').value;

		var phone_name = text.split(' ');
		var phone_number = phone_name[1];
		
        var compareCall = text.search(/call/i);
        var compareSMS = text.search(/sms/i);
        var compareTest = text.search(/test/i);
        var compareTime = text.search(/@/i);

        if(compareTime != -1)
        {
            if(compareSMS == 0)
                ph = "SMS";
            else if(compareCall == 0)
                ph = "Phone";
            else
            {
                ph = "none";
                phone_number = "none"
            }

        var n=text.indexOf("@");
        var len = text.length;
        var time = text.slice(n+2,len);                     // 2 spaces after keyword "@" and the end of the string =  Desired Time.
        var time2 = "October 17, 2013 "+ time;
        var myDate  = new Date (time2);

        // The "honorTimezone" string is what make the alarm honoring it
        var request = navigator.mozAlarms.add(myDate, "ignoreTimezone", Notification(text, ph, phone_number));

        request.onsuccess = function () {
        alert("The alarm has been scheduled");
        };

        request.onerror = function () {
          alert("An error occurred: " + this.error.name);
        };           
        }
        else 
            alert("Nope!");
}        

    function Notification(text, ph, phone_number){
           navigator.mozSetMessageHandler("alarm", function (mozAlarm) {
           var notification = navigator.mozNotification.createNotification(
               "You got a reminder!",
                text
            );

        notification.onclick = function onclick() {
           if (ph == "SMS")
                SMS(phone_number);
            else if (ph == "Phone")
                Phonecall(phone_number);
            else;
        };

        notification.show();
         });
        }

function SMS(phone_number)
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

function Phonecall(phone_number)
{
            var call = new MozActivity({
                name: "dial",
                data: {
                    number: "+467799"
                }
            });
}


function Search()
{
var filter = {
  filterValue : "zorro",
  filterBy    : ["name"],
  filterOp    : "contains",
  filterLimit : 1
}
var search = navigator.mozContacts.find(filter);

search.onsuccess = function() {
  if (search.result.length === 1) {
    var person = search.result[0];
    alert("Found:" + person.givenName[0] + " " + person.familyName[0]);
  } else {
    alert("Sorry, there is no such contact.")
  }
}

search.onerror = function() {
  alert("Uh! Something goes wrong, no result found!");
}

}

function Cancel()
{
    window.location = 'Notey.html';
}

 document.addEventListener('DOMContentLoaded', function () {
         var link = document.getElementById('btn-add');
           link.addEventListener('click', function(){          
           Main();
           })
        var link2 = document.getElementById('btn-cancel');
           link2.addEventListener('click', function(){          
           Cancel();
           })
 })
