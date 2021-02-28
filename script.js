
let btn1 = document.getElementById('btn1');
let div = document.getElementsByClassName('container')[0];
function hide() {
  div.style.display = 'block';
  btn1.style.display = 'none';
}

function say() {

  let fname = document.getElementById('first_name').value;
  let lname = document.getElementById('last_name').value;
  let sname = document.getElementById('speciality_name').value;
  let aname = document.getElementById('Age_name').value;
  let gname = document.getElementById('Grant_name').value;
  let stname = document.getElementById('Study_name').value;
  let result = fname + ' ' + lname + ' ' + sname + ' ' + aname + ' ' + gname + ' ' + stname;
  document.getElementById('out').innerHTML = result;
}

document.getElementById('btn2').addEventListener('click', say);
document.getElementById('btn1').addEventListener('click', hide);


