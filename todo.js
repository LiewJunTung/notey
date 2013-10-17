function Main()

{

        var text = document.getElementById('task').value;



        var phone_name = text.split(' ');

        var phone_contact = phone_name[1];

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

        var m=text.indexOf("-")

        var len = text.length;

        var time = text.slice(n+2, m-1);                     // 2 spaces after keyword "@" and the end of the string =  Desired Time.

        var day = text.slice(m+2, len);

        var currentdate = new Date();

        var month = "month";

        if (day == "today" || "")
            days = currentdate.getDate();
        else if(day == "tomorrow")
            days = currentdate.getDate()+1;
        else if(day == "next week")
            days = currentdate.getDate()+7;
        else
            days = currentdate.getDate();


        if (((currentdate.getMonth()+1)) === 1)

            month = "January";

        else if (((currentdate.getMonth()+1)) === 2)

            month = "February";

        else if (((currentdate.getMonth()+1)) === 3)

            month = "March";

        else if (((currentdate.getMonth()+1)) === 4)

            month = "April";

        else if (((currentdate.getMonth()+1)) === 5)

            month = "May";

        else if (((currentdate.getMonth()+1)) === 6)

            month = "June";

        else if (((currentdate.getMonth()+1)) === 7)

            month = "July";

        else if (((currentdate.getMonth()+1)) === 8)

            month = "August";

        else if (((currentdate.getMonth()+1)) === 9)

            month = "September";

        else if (((currentdate.getMonth()+1)) === 10)

            month = "October";

        else if (((currentdate.getMonth()+1)) === 11)

            month = "November";

        else if (((currentdate.getMonth()+1)) === 12)

            month = "December";



        var date = month + " " + days + ", " +currentdate.getFullYear() + " ";

        //determine date at the end.

        var time2 = date + time;
        var myDate  = new Date (time2);



        // The "honorTimezone" string is what make the alarm honoring it

        var request = navigator.mozAlarms.add(myDate, "ignoreTimezone", Notification(text, ph, phone_contact));



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



function Notification(text, ph, phone_contact){



    navigator.mozSetMessageHandler("alarm", function (mozAlarm) {

        var notification = navigator.mozNotification.createNotification(

            "You got a reminder!",

            text

        );



        notification.onclick = function onclick() {

            if (ph == "SMS")
              {
                var phone_number = Search(phone_contact);
                alert('sms_phone-number' + phone_number);
                SMS(phone_number);
              }
            else if (ph == "Phone")
              {
                var phone_number = Search(phone_contact);
                Phonecall(phone_number);
              }
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

             number: phone_number

     }

     });

}



function Phonecall(phone_number)

{
    alert("phone number: " + phone_number);
    var call = new MozActivity({

        name: "dial",

        data: {

            number: "+123123123"

        }

    });

}





function Search(phone_contact)

{

var contact_name = phone_contact;

var filter = {

  filterValue : contact_name,

  filterBy : ["givenName","name","nickName"],

  filter0p : "contains",

  filterLimit : 1
};

var search = navigator.mozContacts.find(filter);

search.onsuccess = function() {

  if (search.result.length === 1) {

    var person = search.result[0];

    var tele = "+" + person.tel[0].value;
    
    

  } else {

    alert("Sorry, there is no such contact.")

  }
  alert(tele);
  return tele;

}



search.onerror = function() {

  alert("Uh! Something goes wrong, no result found!");

}
}



function Cancel()

{

    alarm('haha');

}

function Add()

{

    window.location.href = "reminder.html";

}

function Done()

{
    window.location.href = "reminder.html";

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

        var link3 = document.getElementById('back_reminder');

           link3.addEventListener('click', function(){

           Cancel();

           })

        var link4 = document.getElementById('done');

        link4.addEventListener('click', function(){

        Done();

        })

        var link5 = document.getElementById('adding');

        link5.addEventListener('click', function(){

        Add();

        })

 })

