function ourReusableFunction() {
  console.log("Hey World!");
}

ourReusableFunction();

function dividedWindow() {
  var asideDiv = document.getElementsByClassName("asideDiv");

  // check if the div exists
  if (asideDiv.length === 0) {
    //create aside div
    asideDiv = document.createElement("div");
    asideDiv.className = "asideDiv";

    //create 2 divs' within the aside div
    var newDiv = document.createElement("div");
    newDiv.className = "asideDiv upperAsideDiv";

    var tag = document.createElement("h1");
    var text = document.createTextNode("this is the first part");
    tag.appendChild(text);
    newDiv.appendChild(tag);
    newDiv.setAttribute("id", "asideUpper");

    asideDiv.appendChild(newDiv);

    newDiv = document.createElement("div");
    newDiv.className = "asideDiv lowerAsideDiv";

    tag = document.createElement("h1");
    text = document.createTextNode("this is the second part");
    tag.appendChild(text);
    newDiv.appendChild(tag);

    asideDiv.appendChild(newDiv);

    //append to the body element
    document.body.appendChild(asideDiv);

    //style with borders
    asideDiv.style.cssText = "height:100%;" + "border: 2px solid red";
    newDiv.style.cssText = "height:50%; border:2px solid green";
    document.getElementById("asideUpper").style.cssText =
      "height:50%;" + "border:2px solid blue";

    // make grid 2fr 1 fr
    var body = document.body;
    body.style.cssText =
      "width:100%;" +
      "height:100vh;" +
      "border: 2px solid yellowgreen;" +
      "padding:10px;" +
      "display:grid; " +
      "grid-template-columns:2fr 1fr";

    //alert
    alert("3 window will be initiated");
  } else {
    //alert
    alert("3 window is already exists");
  }
}
