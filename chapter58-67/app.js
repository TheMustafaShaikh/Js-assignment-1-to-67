var getMain = document.getElementById("main-content");
document.write(getMain.childNodes);


var getRender = document.getElementsByClassName("render");
for (var i = 0; i < getRender.length; i++) {
    document.write(getRender.item(i).textContent);
}

document.getElementById("first-name").value = "Mustafa";
document.getElementById("last-name").value = "Shaikh";
document.getElementById("email").value = "Mustafa19095@gmail.com";


//q2

document.write("<br/>node type:", document.getElementById("form-content").nodeType);
document.write(document.getElementById("lastName").nodeType)
document.write(document.getElementById("lastName").childNodes.nodeType)
    // console.log(document.getElementById("LastName").childNodes); //it doesnt have any childnodes.

document.write(document.getElementById("main-content").firstChild);
document.write(document.getElementById("main-content").lastChild);



document.write(document.getElementById("lastName").previousSibling)
document.write(document.getElementById("lastName").nextSibling)



document.write(document.getElementById("email").parentNode.nodeType);