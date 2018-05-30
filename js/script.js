link = "contact.php";

//Initiliazing app
//Hiding all sections which are not main
sects = $(".app-sect:not(.sect-main)");
for(n=0; n<sects.length; n++){
	$(sects[n]).hide();
}


//Changing sections
$(".changesect").on('click', function(){
	target_sect = $(this).attr('data-targetsect');

	if($("#"+target_sect).length){
		//Hiding current
		$(this).parents().eq(3).hide();
		$("#"+target_sect).show();
	}
})

$(".contact-click").on('click', function(){
	currentphone = $(this).text();
	company = $(this).parent().find(".indcname").text();
	log(company)

	fillData('.fill-inName', company);
	fillData('.fill-phone', currentphone);

	//Opening messaging
	$(".modal.fade").modal("show")

});

$(".contact-ind").on('click', function(e){
	e.preventDefault();
	parent = $(this).parent()
	currentphone = $(parent).find(".contact-phone").text();
	company = $(parent).find(".indcname").text();


	fillData('.fill-inName', company);
	fillData('.fill-phone', currentphone);

	//Opening messaging
	$(".modal.fade").modal("show");


	//Listrning to send button
	$(".sendmsg-btn").on('click', function(){
		//Validating and Sending data
		name = $("#ind-contact input#name").val();
		phone = $("#ind-contact input#phone").val();
		message = $("#ind-contact textarea#message").val();
		
		if(name && phone){
			//Indicaring the sending
			$(".errorlog").html("");
			$(".send-stat").show(300);

			//Sendign
			$.post(link, {name:name, phone:phone, message:message}, function(data, status){
				

				setTimeout(function(){
					$("#ind-contact").append("<p class='msgindicate'>Message sent!</p>");
				}, 2000);
				
				setTimeout(function(){
					$(".modal.fade").modal("hide");
					$(".send-stat").hide(300);
					$("#ind-contact .msgindicate").html("");

				}, 5000);


			})

		}else{
			$(".errorlog").html("Please fill in your name and phone number");
			return false;
		}

	})

});

$(".getupdated").on('click', function(){
	//Showing modal
	$(".ind-sub").modal("show");
})
$(".sub-btn").on('click', hidehome);
$(".close-sub").on('click', hidehome);
function hidehome(){
	$(".ind-sub").modal("hide");
}
function log(data){
	console.log(data)
}
function fillData(elem, text){
	$(elem).text(text);
}