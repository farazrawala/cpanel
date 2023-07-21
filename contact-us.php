
        
 
<section class="contact-us">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>Fill out this form to schedule free consultation.</h2>
                <p>Tell us your business goals and we’ll see how we can create something amazing together. Get in touch with us today to get started on your project!</p>
                <h5>For immediate support, feel free to call us on</h5>
                <a href="tel:19495933969"><h4>1 949-593-3969</h4></a>
             
            </div>
          <div class="col-md-6">
                <div class="contact-form">
                    <form  method="post" class="contact_form" >
                        <input type="text" name="Name" id="cn" placeholder="Name" class="required" required="" >
                        <input type="text" name="Email" id="em" placeholder="Email Address" class="required email" required="" >
                        <input type="text" name="Phone" id="pn" placeholder="Phone No." class="required number" required="" >
                        <textarea name="Message" id="msg" class="required" placeholder="Tell us about your project"></textarea>
                        <input type="submit" value="Submit">
                           <input type="hidden" name="send" value="1" />
                      
                    </form>
                </div>
            </div>

            <div class="col-md-12">
                <div class="map">
                     
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13288.571292552755!2d-117.72232930000001!3d33.627538599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67336c9b002450f2!2sCarlota%20Tower!5e0!3m2!1sen!2s!4v1636397704354!5m2!1sen!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
            </div>
        </div>
    </div>
    </div>
</section>
<?php
include "PHPMailer/sendmail.php";


// echo "<pre>";
// print_R($_POST);
//error_reporting(1);

$to = "supports@logolegendz.com";
$subject = "New client";
if(isset($_POST["Name"]) && isset($_POST["Phone"]) && isset($_POST["Email"]) && isset($_POST["Message"]))
 { 
     echo "<h1>done</h1>";
    $EmailConfig = new EmailConfig();
	if($EmailConfig->emailsender($_POST))
	{
	     //header("Location: thank-you.php");
      	  echo'<script>window.location.href="/"; </script>';
	     // print (json_encode(array("status" => $status, "response" => $response)));
        die();
	}
	else
	{
        print (json_encode(array("status" => $status, "response" => $response)));
    }	
 }


?>
         

<?php include"footer.php"; ?>

