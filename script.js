import data from "./data.js";

let studentdata = data;

function loadData(studentdata) {
    if (document.getElementById("table-2-div").style.display == "block") {
        document.getElementById("table-2-div").style.display = "none";
        // studentData = data;
    }
    const table = document.getElementsByTagName("table")[0];
    table.innerHTML = "<tr><td>Id</td><td>Name</td><td>Gender</td><td>Class</td><td>Marks</td><td>Passing</td><td>Email</td></tr>";

    studentdata.map((student) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        td1.innerText = student.id;

        let td2 = document.createElement("td");

        let image = document.createElement("img");
        image.src = student.image;

        let p = document.createElement("p");
        p.innerText = student.first_name + " " + student.last_name;

        td2.append(image, p);

        td2.classList.add("td2-container");

        let td3 = document.createElement("td");
        td3.innerText = student.gender;

        let td4 = document.createElement("td");
        td4.innerText = student.class;

        let td5 = document.createElement("td");
        td5.innerText = student.marks;

        let td6 = document.createElement("td");
        td6.innerText = student.passing ? "Passed" : "Failed";

        let td7 = document.createElement("td");
        td7.innerText = student.email;

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        table.appendChild(tr);
        console.log(tr);
    });
}

//Search By Name 
const search = document.getElementById("search-btn");
search.addEventListener("click", (event) => {
    event.preventDefault();
    let searchvalue = document.getElementById("search-bar-input").value;

    if (searchvalue == "") {
        alert("search data");
        return;
    }
    studentdata = data.filter((student) => {
        let fullName = (student.first_name + student.last_name + student.email).toLocaleLowerCase();
        return fullName.indexOf(searchvalue.toLocaleLowerCase()) !== -1;
    });
    if (studentdata.length == 0) {
        document.getElementsByTagName("table")[0].style.display = "none";
        document.getElementsByTagName("table")[1].style.display = "none";
        document.getElementById("not-found").style.display = "block";
        return;
    }
    loadData(studentdata);
    studentdata = data;
});

//Sort A-Z 

const sortAsc = document.getElementById("sortAZ");
sortAsc.addEventListener("click", () => {
    studentdata.sort((a, b) => {
        let fullNameA = a.first_name + a.last_name;
        let fullNameB = b.first_name + b.last_name;
        return fullNameA > fullNameB ? 1 : -1;
    })
    loadData(studentdata);
});

//Sort Z-A
const sortDsc = document.getElementById("sortZA");
sortDsc.addEventListener("click", () => {
    studentdata.sort((a, b) => {
        let fullNameA = a.first_name + a.last_name;
        let fullNameB = b.first_name + b.last_name;
        return fullNameA < fullNameB ? 1 : -1;
    })
    loadData(studentdata);
});

//Sort BY MARKS

const sortMarks = document.getElementById("sortMarks");
sortMarks.addEventListener("click", () => {
    studentdata.sort((a, b) => {
        let marksA = a.marks;
        let marksB = b.marks;
        return marksA - marksB;
    })
    loadData(studentdata);
});

//Sort By Psssing

const passed = document.getElementById("sortByPassing");
passed.addEventListener("click", () => {
    studentdata = studentdata.filter((studemt) => studemt.passing);
    loadData(studentdata);
    studentdata = data;
})

//Sort By Class

const sortClass = document.getElementById("sortByClass");
sortClass.addEventListener("click", () => {
    studentdata.sort((a, b) => {
        let classA = a.class;
        let classB = b.class;
        return classA - classB;
    })
    loadData(studentdata);
})

//Sort By Gender

const sortGender = document.getElementById("sortByGender");
sortGender.addEventListener("click", () => {
    gender();
    studentdata = data;
});

function gender() {
    const table1 = document.getElementsByTagName("table")[0];
    const table2 = document.getElementsByTagName("table")[1];
    table1.innerHTML = "<tr><td>Id</td><td>Name</td><td>Gender</td><td>Class</td><td>Marks</td><td>Passing</td><td>Email</td></tr>";
    table2.innerHTML = "<tr><td>Id</td><td>Name</td><td>Gender</td><td>Class</td><td>Marks</td><td>Passing</td><td>Email</td></tr>";

    let isMalePresent = false;
    let isFemalePresent = false;

    studentdata = studentdata.filter((student) => {
        if (student.gender == "Male" || student.gender == "Female") {
            return true;
        } else {
            return false;
        }
    });

    studentdata.map((student) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        td1.innerText = student.id;

        let td2 = document.createElement("td");

        let image = document.createElement("img");
        image.src = student.image;

        let p = document.createElement("p");
        p.innerText = student.first_name + " " + student.last_name;

        td2.append(image, p);

        td2.classList.add("td2-container");

        let td3 = document.createElement("td");
        td3.innerText = student.gender;

        let td4 = document.createElement("td");
        td4.innerText = student.class;

        let td5 = document.createElement("td");
        td5.innerText = student.marks;

        let td6 = document.createElement("td");
        td6.innerText = student.passing ? "Passed" : "Failed";

        let td7 = document.createElement("td");
        td7.innerText = student.email;

        tr.append(td1, td2, td3, td4, td5, td6, td7);

        if(student.gender == "Male"){

            table1.appendChild(tr);
            isMalePresent = true;
        }
        else{
            table2.appendChild(tr);
            isFemalePresent = true;
        }
        document.getElementById("table-2-div").style.display = "block";
    });
    if (!isMalePresent) {
        table1.style.display = "none";
      }
      if (!isFemalePresent) {
        table2.style.display = "none";
      }

}


loadData(studentdata);
