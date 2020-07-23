//q1
function showDetails() {
    console.log(document.getElementById("name").value)
}

//q2

function showMore(e) {
    e.preventDefault();
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium reprehenderit libero illum debitis optio veritatis suscipit eos voluptatem at iusto, quae corporis, consectetur molestiae. Unde eaque error similique aperiam.";
}


//q3
var arr = ["Mustafa", "babar", "zain", "Muhammad"]
var classs = [10, 9, 9, 10];

function editthis(index) {
    document.getElementById("formedit").innerHTML = `
        <input type="text" id="Name" value=${arr[index]}>
        <input type="text" id="class" value=${classs[index]}>
        <button type="button" id="submit" onclick="updatedCall(${index})">Submit</button>
    `;
    document.getElementById("formedit").style.display = "block";

}

function updatedCall(index) {

    arr[index] = document.getElementById("Name").value;
    classs[index] = document.getElementById("class").value;
    showDetails();
}


function deletethis(index) {
    arr.splice(index, 1);
    classs.splice(index, 1);
    document.getElementById("bodyTab").innerHTML = "";
    showDetails();
}

function showDetails() {
    document.getElementById("bodyTab").innerHTML = "";
    var html = "";
    for (var i = 0; i < arr.length; i++) {
        html += `
        <tr>
        <td id=${i}>${i}</td>
        <td>${arr[i]}</td>
        <td>${classs[i]}</td>
        <td><button onclick="deletethis(${i})">delete</button></td>
        <td><button onclick="editthis(${i})">edit</button></td>
    </tr>
        `;
    }
    document.getElementById("bodyTab").innerHTML += html;
    document.getElementById("formedit").style.display = "none";


}
showDetails()