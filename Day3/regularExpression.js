//DOM event handling:
// <-- is a delimiter for regular expression(boundary)
console.log(document);
console.log(document.querySelector("button"));
document.querySelector("button").onclick = function () {
  let pancard = document.getElementById("x1").value;
  console.log(pancard);
  let regularExpr = /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]$/;
  //"^" identifies first char and "$" identifies last character
  // "[]" bracket represents single chracter
  let answer = regularExpr.test(pancard);
  let msg = answer ? "valid" : "invalid";
  document.getElementById("msg").innerHTML = msg;
};
