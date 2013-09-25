$( document ).ready(function() {
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
        //below sets up char count and red
        $(".tweet-content .tweet-compose").keydown(function(){
        	$(".char-count").text(140 - $(this).val().length);
 				if(140 - $(this).val().length<10){
 					$(".char-count").css("color","red");
 				}
 				else{
 					$(".char-count").css("color","#999");
 				}
                if(140 - $(this).val().length<140){
                    $(".tweet-controls button").css("background","#019ad2");
                    $(".tweet-controls button").css("color","#fff");
                    $(".tweet-controls button").hover(function(){
                        $(this).css("background","blue")
                        $(this).css("background","#019ad2")
                    });

                // $(".tweet-controls button").click(function(){
                //     $(this).add("div")
                // );
                // }
                }
                else{
                    $(".tweet-controls button").css("background","#f5f5f5");
                    $(".tweet-controls button").css("color","#777");
                }
        });
        $(".tweet-controls button").click(function(){
            var tweetText=$(".tweet-content .tweet-compose").val();
            var tweetName=$(".profile-summary p").html();
            var tweetImg=$(".profile-summary img.avatar").attr("src");
            console.log(tweetName);
            console.log(tweetImg);
            console.log(tweetText);
            var newTweet=$(".tweet:first-Child").clone();
            newTweet.find(".tweet-text").text(tweetText);
            newTweet.find('.avatar').attr("src",tweetImg)
            newTweet.find(".fullname").text(tweetName);

            newTweet.prependTo(".stream");

        });
  
});
