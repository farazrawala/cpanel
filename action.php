<?php 
 


  require ("PHPMailer/sendmail.php");
  if($_SERVER['REQUEST_METHOD'] === 'POST')
  { 
	$EmailConfig = new EmailConfig();
	if($EmailConfig->emailsender($_POST))
	{
	    echo "Success!";
		echo'<script>window.location.href="https://www.logolegendz.com"; </script>';

		print (json_encode(array("status" => $status , "response" => $response)));
		die();
	}
	else
	{
	    echo "Sorry!";
		die();
	}	
  }
?>