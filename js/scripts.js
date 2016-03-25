//returns true or false depending on whether valid email address string
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(document).ready(function() {
  //global variables
  var max = 0;
  var secondMax = 0;
  var whistlerPoints = 0;
  var caribbeanPoints = 0;
  var patagoniaPoints = 0;
  var francePoints = 0;
  var vietnamPoints = 0;

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
    //hide all destinations (clears any previous submissions)
    $("#destinations").children().hide();
    //applies styling classes to all destinations (but not suggestion button)
    $("#destinations").children().not("#suggestionButton").addClass("styleDestination");

    //setup variables
    var name = ($("#nameInput").val());
    var email = ($("#emailInput").val()).toLowerCase();
    whistlerPoints = 0;
    caribbeanPoints = 0;
    patagoniaPoints = 0;
    francePoints = 0;
    vietnamPoints = 0;

    //get values from forms/inputs
    var style = $("#style").val();
    var snow = $("input:radio[name=snow]:checked").val();
    var alone = $("input:radio[name=alone]:checked").val();
    var non_english = $("input:radio[name=non-english]:checked").val();
    var legs = $("input:radio[name=legs]:checked").val();
    var pirate = $("input:radio[name=pirate]:checked").val();
    var alcohol = $("#alcohol").val();

    //checks for valid email, continues to sum points for each destination
    if (validateEmail(email)) {
      //shows heading
      $("#suggestionHeading").show();

      //inserts name into suggestion title
      if(name)
      {
        $("#suggestionHeading").prepend(name + ": ");
      } else{}

      //style of vacation
      switch (style) {
        case "adventure":
          whistlerPoints += 4;
          patagoniaPoints += 5;
          vietnamPoints += 5;
          break;
        case "history":
          francePoints +=5;
          break;
        case "relaxation":
          caribbeanPoints +=5;
          break;
      }
      //snow
      switch (snow) {
        case "yes":
          whistlerPoints += 4;
          patagoniaPoints += 2;
          break;
        case "no":
          caribbeanPoints +=4;
          vietnamPoints +=3;
          break;
      }
      //alone
      switch (alone) {
        case "yes":
          whistlerPoints += 3;
          caribbeanPoints += 3;
          francePoints +=3;
          break;
        case "no":
          //do something
          break;
      }
      //non_english
      switch (non_english) {
        case "yes":
          patagoniaPoints += 4;
          francePoints += 2;
          vietnamPoints += 5;
          break;
        case "no":
          whistlerPoints += 4;
          caribbeanPoints += 4;
          break;
      }
      //legs
      switch (legs) {
        case "yes":
          whistlerPoints += 2;
          caribbeanPoints += 2;
          patagoniaPoints += 2;
          francePoints += 2;
          vietnamPoints += 2;
          break;
        case "no":
          whistlerPoints += 3;
          caribbeanPoints += 1;
          patagoniaPoints -= 4;
          francePoints += 2;
          vietnamPoints -= 6;
          break;
      }
      //pirate
      switch (pirate) {
        case "yes":
          caribbeanPoints += 6;
          break;
        case "no":
          whistlerPoints += 2;
          break;
      }
      //alcohol
      switch (alcohol) {
        case "beer":
          whistlerPoints += 3;
          vietnamPoints += 2;
          break;
        case "wine":
          patagoniaPoints += 6;
          francePoints += 4;
          break;
        case "cocktails":
          caribbeanPoints += 3;
          break;
        case "none":
          caribbeanPoints -= 1;
          vietnamPoints -= 2;
          break;
      }

      //determine max points
      max = Math.max(whistlerPoints, caribbeanPoints, patagoniaPoints, francePoints, vietnamPoints);
      //figures out which destination has max points
      if (whistlerPoints === max) {
        $("#whistler").show();
        secondMax = Math.max(caribbeanPoints, patagoniaPoints, francePoints, vietnamPoints);
      }
      else if (caribbeanPoints === max) {
        $("#caribbean").show();
        secondMax = Math.max(whistlerPoints, patagoniaPoints, francePoints, vietnamPoints);
      }
      else if (patagoniaPoints === max) {
        $("#patagonia").show();
        secondMax = Math.max(whistlerPoints, caribbeanPoints, francePoints, vietnamPoints);
      }
      else if (francePoints === max) {
        $("#france").show();
        secondMax = Math.max(whistlerPoints, caribbeanPoints, patagoniaPoints, vietnamPoints);
      }
      else if (vietnamPoints === max) {
        $("#vietnam").show();
        secondMax = Math.max(whistlerPoints, caribbeanPoints, patagoniaPoints, francePoints);
      }
      else {
        alert("Sorry, there was an error");
      }
      $("#suggestionButton").show();
    }
    //if not a valid email address causes a pop-up error
    else {
      alert("please enter a valid email address");
    }
  });

  //if user clicks button for another suggestion (reverse order in case two options tied for points)
  $("#suggestionButton").click(function() {
    $("#suggestionButton").hide();
    if (caribbeanPoints === secondMax) {
      $("#caribbean").insertBefore($(this));  //inserts second destination before suggestion button, to move to bottom of list
      $("#caribbean").addClass("secondStyleDestination");
      $("#caribbean").show();
    }
    else if (patagoniaPoints === secondMax) {
      $("#patagonia").insertBefore($(this));
      $("#patagonia").addClass("secondStyleDestination");
      $("#patagonia").show();
    }
    else if (francePoints === secondMax) {
      $("#france").insertBefore($(this));
      $("#france").addClass("secondStyleDestination");
      $("#france").show();
    }
    else if (vietnamPoints === secondMax) {
      $("#vietnam").insertBefore($(this));
      $("#vietnam").addClass("secondStyleDestination");
      $("#vietnam").show();
    }
    else if (whistlerPoints === secondMax) {
      $("#whistler").insertBefore($(this));
      $("#whistler").addClass("secondStyleDestination");
      $("#whistler").show();
    }
    else {
      alert("Sorry, there was an error");
    }
  });

});
