console.log(document);
console.log(document.querySelector("button"));
document.querySelector("button").onclick = function () {
  let pincode = document.getElementById("x1").value;
  console.log(pincode);
  let regularExpr = /^[1-9][0-9]{5}$/;
  let answer = regularExpr.test(pincode);
  let msg = answer ? "valid" : "invalid";
  document.getElementById("msg").innerHTML = msg;
};
