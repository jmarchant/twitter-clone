$( document ).ready(
       function() {
        $(".tweet-controls").hide();
        $(".tweet-compose").focus(function(){
        	$(".tweet-controls").show();
        	$(this).css("height","5em")
        });
        $(".tweet-compose").focusout(function(){
        	if(!$(".tweet-compose").val()){
        		$(".tweet-controls").hide();
        		$(".tweet-compose").css("height","2.5em");	
        	}
        });
        $(".tweet-content .tweet-compose").keydown(function(){
        	$(".char-count").text(140 - $(this).val().length);
 				if(140 - $(this).val().length<10){
 					$(".char-count").css("color","red");
 				}
 				else{
 						$(".char-count").css("color","#999");
 				}

            
        });
 	 if(140 - $("char-count").val().length<139){
				$(".tweet-controls button").css("background","#019ad2");
				$(".tweet-controls button").css("color","#fff");
				}
			else{
				$(".tweet-controls button").css("background","#f5f5f5");
				$(".tweet-controls button").css("color","#777");

			}

});
