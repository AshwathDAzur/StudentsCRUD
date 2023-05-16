const Student = {
  Studentid: 0,
  FirstName: "",
  LastName: "",
  DateOfBirth: "",
  Email: "",
  Standard: "",
  Division: "",
};

function ReadFromLocalStore() {
  var getdata = localStorage.getItem("Column");
  return getdata;
}

function storeinlocalstore(putdata) {
  localStorage.setItem("Column", putdata);
}
function cleanlocalstore() {
  localStorage.setItem("Column", "");
}

//cleanlocalstore();

document.querySelector(".click").addEventListener("click", function () {
  Student["Studentid"] = document.querySelector(".sid").value;
  Student["FirstName"] = document.querySelector(".fname").value;
  Student["LastName"] = document.querySelector(".lname").value;
  Student["DateOfBirth"] = document.querySelector(".dob").value;
  Student["Email"] = document.querySelector(".mail").value;
  Student["Standard"] = document.querySelector("#standard").value;
  Student["Division"] = document.querySelector("#division").value;
  var data =
    Student.Studentid +
    "," +
    Student.FirstName +
    "," +
    Student.LastName +
    "," +
    Student.DateOfBirth +
    "," +
    Student.Email +
    "," +
    Student.Standard +
    "," +
    Student.Division +
    "|";
  var show = ReadFromLocalStore();
  console.log(show);
  show += data;
  console.log(data);
  storeinlocalstore(show);
  alert("Student created!!!");
});

var group = [];

const creategroup = function () {
  var raw = ReadFromLocalStore();
  crust = raw.split("|");
  crust.forEach(function (rcrust) {
    ele = rcrust.split(",");
    group.push(ele);
  });
};

const container = document.querySelector("#section--2");
var selectedstudent;

document.querySelector(".find").addEventListener("click", function () {
  var flag = 0;
  var fdata = 0;
  var j = 0;
  var iid = document.querySelector(".s").value;
  creategroup();
  group.forEach(function find(stud) {
    if (stud[0] == iid) {
      flag++;
      fdata = stud;
      localStorage.setItem("Fdata", fdata);
      localStorage.setItem("sindex", j);
    }
    j++;
  });
  if (flag == 0) {
    fdata = "No Records Found";
    localStorage.setItem("Fdata", fdata);
  }
});
var ss = localStorage.getItem("Fdata");
var sdata = ss.split(",");
var redirect = 0;
if (sdata.length > 2) {
  var disptext =
    "<br>Student ID : " +
    sdata[0] +
    "<br>FirstName : " +
    sdata[1] +
    "<br>LastName : " +
    sdata[2] +
    "<br>DOB : " +
    sdata[3] +
    "<br>Email : " +
    sdata[4] +
    "<br>class : " +
    sdata[5] +
    "<br>Section : " +
    sdata[6];
  selectedstudent =
    sdata[0] +
    "," +
    sdata[1] +
    "," +
    sdata[2] +
    "," +
    sdata[3] +
    "," +
    sdata[4] +
    "," +
    sdata[5] +
    "," +
    sdata[6];
  var html =
    '<div class="dip1">Record Found</div><br><div class="dip">' + disptext;
  container.insertAdjacentHTML("beforeend", html);
  var element1 = document.getElementById("update");
  element1.style.opacity = 1;
  var element2 = document.getElementById("delete");
  element2.style.opacity = 1;
  var element3 = document.getElementById("upddiv");
  element3.style.opacity = 1;
  redirect = 1;
} else {
  var html = '<br><div class="dip2">' + "No Records Found" + "</div>";
  container.insertAdjacentHTML("beforeend", html);
}

function update() {
  var newdata = localStorage.getItem("newdata");
  var sno = selectedstudent.split(",");
  newdata = sno[0] + "," + newdata;
  creategroup();
  var ind = localStorage.getItem("sindex");
  var show = ReadFromLocalStore();
  show += newdata;
  console.log(show);
  storeinlocalstore(show);
  confirm("Confirm Update student");
  alert("Student Data Updated");
}

document.querySelector(".upd").addEventListener("click", function () {
  Student["FirstName"] = document.querySelector(".ufname").value;
  Student["LastName"] = document.querySelector(".ulname").value;
  Student["DateOfBirth"] = document.querySelector(".udob").value;
  Student["Email"] = document.querySelector(".umail").value;
  Student["Standard"] = document.querySelector("#ustandard").value;
  Student["Division"] = document.querySelector("#udivision").value;
  udata =
    Student.FirstName +
    "," +
    Student.LastName +
    "," +
    Student.DateOfBirth +
    "," +
    Student.Email +
    "," +
    Student.Standard +
    "," +
    Student.Division +
    "|";
  localStorage.setItem("newdata", udata);
  update();
});

function deleterecord() {}
document.querySelector(".del").addEventListener("click", function () {
  alert("Are you sure delete the student!!!");
});
