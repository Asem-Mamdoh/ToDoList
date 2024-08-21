let inputValue = document.querySelector(".input1");
let btnAdd = document.querySelector(".input2");
let tasks = document.querySelector(".tasks");
let deleteAll = document.querySelector(".deleteAll");
let divDelete = document.querySelector(".div-delete");

let data = [];

if (localStorage.getItem("tasks")) {
  data = JSON.parse(localStorage.getItem("tasks"));
}

getLocalStorageData();

window.onload = function () {
  inputValue.focus();
};

function dataObject() {
  if (inputValue.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Your Nots!",
      background: "#fff",
      color: "#000",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  } else {
    taskData = {
      id: Date.now(),
      taskNote: inputValue.value.trim(),
      // completed : false,
    };

    data.push(taskData);
    inputValue.value = "";
    setLocalStorageData(data);
    taskDocument();
    console.log(data);
    deleteAll.style.display = "block";
  }
}

let deleteTask = (index) => {
  data.splice(index, 1);
  if (index) {
    // console.log(data);
  }
  taskDocument();
};

function taskDocument() {
  tasks.innerHTML = "";

  data.forEach((ele, index) => {
    tasks.innerHTML += `<div class="form-group">
          <h3 class="valueText">${ele.taskNote}</h3>
          <button class="update">Update</button>
          <button onclick = "deleteTask(${index})" class="btn">Delete</button>
        </div>
        
        
        `;
  });
}

function setLocalStorageData(data) {
  // To Save Data From Arr To LocalStorage // to get tha data of input >>> JSON.stringify(arr) <<<
  window.localStorage.setItem("tasks", JSON.stringify(data));
}

function getLocalStorageData() {
  let dataGet = window.localStorage.getItem("tasks");
  if (dataGet) {
    let tasks = JSON.parse(dataGet);
  }
  taskDocument();
}

function deleteAllTasks() {
  window.localStorage.clear();
  window.location.reload();
}

if (tasks.innerHTML !== "") {
  deleteAll.style.display = "block";
} else {
  deleteAll.style.display = "none";
}

btnAdd.addEventListener("click", dataObject);

console.log(tasks.innerHTML.length);
