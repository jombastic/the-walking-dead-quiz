var result = function(merle, rick, lori, hershel) {
  if ((merle > rick) && (merle > lori) && (merle > hershel)) {
    return "merle-dixon"
  } else if ((rick > merle) && (rick > lori) && (rick > hershel)) {
    return "rick-grimes"
  } else if ((lori > merle) && (lori > hershel) && (lori > rick)) {
    return "lori-grimes"
  } else {
    return "hershel-greene"
  }
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var person = $("input:radio[name=person]:checked").val();
    var characteristic = $("input:radio[name=characteristic]:checked").val();
    var threat = $("input:radio[name=threat]:checked").val();
    var importantThing = $("input:radio[name=importantThing]:checked").val();
    var someone = $("input:radio[name=someone]:checked").val();
    var hope = $("input:radio[name=hope]:checked").val();
    var walker = $("input:radio[name=walker]:checked").val();

    var choices = [person, characteristic, threat, importantThing, someone, hope, walker];
    var merle = 0;
    var rick = 0;
    var lori = 0;
    var hershel = 0;

    choices.forEach(function(choice) {
      if (choice === "0") {
        merle += 1;
      } else if (choice === "1") {
        rick += 1;
      } else if (choice === "2") {
        lori += 1;
      } else {
        hershel += 1;
      }
    });

    var youAre = result(merle, rick, lori, hershel);
    if (!person || !characteristic || !threat || !importantThing || !someone || !hope) {
      alert("Please answer all questions!");
    } else {
      $("form").hide();
      $("#" + youAre).show();
    }

  });
});
