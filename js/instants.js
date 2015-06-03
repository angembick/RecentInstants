$.ajax({
	      type: "GET",
	      dataType: "jsonp",
	      cache: false,
	      url: "https://api.instagram.com/v1/users/48121533/media/recent/?access_token=48121533.5db54f4.df09ebad5d3d47d3979743c9c3b57b37",
	      success: function(data) {
	        for (var i = 0; i < 7; i++) {
	        $(".latest").append("<li><a target='_blank' href='" + data.data[i].link +"'><img   src='" + data.data[i].images.standard_resolution.url +"'></img></a></li>");
	        }
	      }
	    });

	    var //outerPane = $("div").find(".detailsPaneOuter"),
	    	didScroll = false;

	    $(window).scroll(function(){
	    	didScroll = true;
	    });

	    setInterval(function(){
	    	if(didScroll){
	    		//http://stackoverflow.com/questions/5036850/how-to-detect-page-scroll-to-a-certain-point-in-jquery
	    		if($(window).scrollTop() == $(document).height()-$(window).height()){
		    	//if(outerPane){
		    		didScroll = false;
		    		console.log("Load in more results");
		    	}
	    	}
	    }, 250);
