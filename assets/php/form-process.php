<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $msg_subject = $_POST["msg_subject"];
    $phone_number = $_POST["phone_number"];
    $message = $_POST["message"];

    // Create the email content
    $to = "support@trojanx.in"; // Change this to your email address
    $subject = "New Contact Form Submission: " . $msg_subject;
    $message_body = "Name: $name\nEmail: $email\nPhone Number: $phone_number\n\n$message";

    // Set additional headers if needed
    $headers = "From: $email\r\n";

    // Send the email
    if (mail($to, $subject, $message_body, $headers)) {
        echo "success";
    } else {
        echo "Error sending email.";
    }
} else {
    echo "Invalid request.";
}
?>
