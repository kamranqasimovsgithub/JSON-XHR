

document.querySelector("#getinfo").addEventListener("click",loadInformation);
document.querySelector("#getallinfo").addEventListener("click", loadallInformation);


function loadInformation(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json",true);
    xhr.onload  = function(){
        var text = JSON.parse(this.responseText);
        
        var html = 

        `<tr>
            <td>${text.firstName}</td>    
            <td>${text.lastName}</td>
            <td>${text.age}</td>
        </tr>`;

        document.querySelector('#tb').innerHTML = html;
    }
    xhr.send();
}

// function deleteFun(){
//     document.getElementById("tb").style.display = "none";
// }

function loadallInformation(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function(){


        var text1 = JSON.parse(this.responseText);
        console.log(text1);
        var html1="";

        text1.forEach(element => {
            html1 += `<tr>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.age}</td>
            </tr>`;
        });

        document.querySelector("#tb").innerHTML  = html1;

    }

    xhr.send();
}