//q1,q2
function callFtn() {
    alert("Thanks for shopping!")
}

//q3
// var arr = ["Mustafa", "babar", "zain", "Muhammad"]
// var classs = [10, 9, 9, 10];

// function deletethis(index) {
//     arr.splice(index, 1);
//     classs.splice(index, 1);
//     document.getElementById("bodyTab").innerHTML = "";
//     showDetails();
// }

// function showDetails() {
//     var html = "";
//     for (var i = 0; i < arr.length; i++) {
//         html += `
//         <tr>
//         <td id=${i}>${i}</td>
//         <td>${arr[i]}</td>
//         <td>${classs[i]}</td>
//         <td><button onclick="deletethis(${i})">delete</button></td>
//     </tr>
//         `;
//     }
//     document.getElementById("bodyTab").innerHTML += html;

// }
// showDetails()


//q4
function changeSrc(url) {
    document.getElementById("picture").src = url;
}

//q5
function increase() {
    var getvalue = +(document.getElementById("counter").textContent);
    document.getElementById("counter").innerHTML = getvalue + 1
}

function decrease() {
    var getvalue = +(document.getElementById("counter").textContent);
    document.getElementById("counter").innerHTML = getvalue - 1
}