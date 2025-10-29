document.getElementById("send-message").addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  if (!name) {
    return alert("please enter your name first");
  }
  if (!email) {
    return alert("please enter your email ");
  }
  if (!subject) {
    return alert("please enter your subject");
  }
  console.log(name);
  console.log(email);
  console.log(subject);
});

// for extra validation

// document.getElementById("login-btn").addEventListener("click", function (e) {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const lowercase = /[a-z]/;
//   const uppercase = /[A-Z]/;
//   if (!name) {
//     return alert("please enter your name");
//   }
//   if (!email || !email.includes("@")) {
//     return alert("please enter your valid email");
//   }
//   if (!password) {
//     return alert("please enter your password");
//   }
//   if (!lowercase.test(password)) {
//     return alert("password should contain atleast one lowercase");
//   }
//   if (!uppercase.test(password)) {
//     return alert("password should contain atleast one uppercase");
//   }
//   alert(
//     "✅congratulations your account has successfully created been created "
//   );
//   document.getElementById("form-control").reset();
// });
