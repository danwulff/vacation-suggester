//returns true or false depending on whether valid email
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(document).ready(function() {

  //function to change color of email entry field based on whether the field contains a valid email address
  $("#emailInput").change(function() {
    var email = ($("#emailInput").val()).toLowerCase();
    if (validateEmail(email)) {
      $("#email").addClass("has-success");
      $("#email").removeClass("has-error");
    }
    else {
      $("#email").removeClass("has-success");
      $("#email").addClass("has-error");
    }
  });

  //function for a submit button click
  $("#submit").click(function() {
    //setup variables
    var email = ($("#emailInput").val()).toLowerCase();
    var whistlerPoints = 0;
    var caribbeanPoints = 0;
    var patagoniaPoints = 0;
    var francePoints = 0;
    var vietnamPoints = 0;

    //hide all the shiz
    $("#destinations").hide();

    //get values from forms/inputs
    var style = $("#style").val();
    var snow = $("input:radio[name=snow]:checked").val();
    var alone = $("input:radio[name=alone]:checked").val();
    var english = $("input:radio[name=english]:checked").val();
    var legs = $("input:radio[name=legs]:checked").val();
    var pirate = $("input:radio[name=pirate]:checked").val();
    var alcohol = $("#alcohol").val();

    if (validateEmail(email)) {
      //style of vacation
      switch (style) {
        case "adventure":
          //do something
          break;
        case "history":
          //do something
          break;
        case "relaxation":
          //do something
          break;
      }
      //snow
      switch (snow) {
        case "yes":
          //do something
          break;
        case "no":
          //do something
          break;
      }
      //alone
      switch (alone) {
        case "yes":
          //do something
          break;
        case "no":
          //do something
          break;
      }
      //non-english
      switch (alone) {
        case "yes":
          //do something
          break;
        case "no":
          //do something
          break;
      }
      //legs
      switch (legs) {
        case "yes":
          //do something
          break;
        case "no":
          //do something
          break;
      }
      //pirate
      switch (pirate) {
        case "yes":
          //do something
          break;
        case "no":
          //do something
          break;
      }
      //alcohol
      switch (alcohol) {
        case "beer":
          //do something
          break;
        case "wine":
          //do something
          break;
        case "cocktails":
          //do something
          break;
        case "none":
          //do something
          break;
      }

      //determine destination, display
    }
    //if not a valid email address causes a pop-up error
    else {
      alert("please enter a valid email address");
    }
  });

});
