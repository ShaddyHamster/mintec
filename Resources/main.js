window.onscroll = () => {
  var nav = document.querySelector("nav");

  if (window.pageYOffset > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ermias901@gmail.com",
    Password: "nigerwemadeit1",
    To: "ermiyas.dagnachew@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name :" +
      document.getElementById("name").value +
      "<br> Email : " +
      document.getElementById("phone").value +
      "<br> Message : " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent Successfully..!!"));
}
