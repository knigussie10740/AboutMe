
document.getElementById("sendEmailButton").addEventListener("click", function () {
    const name = document.getElementById("idName").value;
    const email = document.getElementById("idEmail").value;
    const message = document.getElementById("idMessage").value;


    if (!name || !email || !message) {
        alert("Please review the fields in the form.");
        return;
    }


    Email.send({
        SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To: 'knigussie10740@gmail.com',
        From: "knigussie10740@gmail.com",
        Subject: 'New contact form ${name}',
        Body: 'Name: ${name} <br> Email: ${email} <br> Message: ${message}'
    }).then(

        message => alert("Email sent successfully!")
    ).catch(
        error => alert("Failed to send email: " + error)
    );

});


