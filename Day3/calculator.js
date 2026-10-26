function calculate() {
  //alert("error"); //message box
  //confirm("Delete.....!"); //decision making box
  //prompt("meow"); //it will suggest a text box

  //console.log(document);
  //console.log(document.getElementById("x1")); // dom method
  //console.log(document.getElementById("x1").value); //dom property

  let amount = document.getElementById("x1").value;
  let roi = document.getElementById("x2").value;
  let duration = document.getElementById("x3").value;
  let msg = document.getElementById("msg");

  if (amount === "" || roi === "" || duration === "") {
    msg.innerText = "All values are required";
    msg.style.color = "red";
  } else if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
    msg.innerText = "All values must be a number";
    msg.style.color = "red";
  } else if (Number(amount) <= 0 || Number(roi) <= 0 || Number(duration) <= 0) {
    msg.innerText = "All values must be a positive number";
    msg.style.color = "red";
  } else {
    amount = Number(amount);
    roi = Number(roi);
    duration = Number(duration);

    let interest = amount * roi * duration;
    let final = amount + interest;

    msg.innerHTML = `
      <b>Interest</b> = ${interest}<br>
      <b>Final amount</b> = ${final}
    `;

    msg.style.color = "green";
  }
}
