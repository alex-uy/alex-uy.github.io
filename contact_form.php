<?php
	// Only post if an 'emailaddress' is input
	if (isset($_POST['alexuydesign@gmail.com']))  {
	  
		//Email information
		$to = strip_tags($_POST['sendtoemail']);

		$subject = 'Website Request';

		$headers = "From: " . strip_tags($_POST['emailaddress']) . "\r\n";
		$headers .= "Reply-To: ". strip_tags($_POST['emailaddress']) . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



		//building the form - how it will return to me

		$message = '<html><body>';

		$message .= "<b>First Name:</b>" . strip_tags($_POST['firstname']) . "<br>";
		$message .= "<b>Last Name:</b>" . strip_tags($_POST['lastname']) . "<br>";
		$message .= "<b>Email Address:</b>" . strip_tags($_POST['emailaddress']) . "<br>";
		$message .= "<b>Message:</b>" . strip_tags($_POST['textarea']);

		$message .= "</body></html>";

	  
		//send email
		mail($to, $subject, $message, $headers);

		//Email response
		header("Location: " . strip_tags($_POST['thankyoupage']) );
			die();
		}
	
?>