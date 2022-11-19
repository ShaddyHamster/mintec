function SendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ermias901@gmail.com",
    Password: "password mula ezi ga",
    To: "eudaimonia901@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name :" +
      document.getElementById("name").value +
      "<br> Email : " +
      document.getElementById("email").value +
      "<br> Phone No : " +
      document.getElementById("phone").value +
      "<br> Message : " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent Successfully..!!"));
}
