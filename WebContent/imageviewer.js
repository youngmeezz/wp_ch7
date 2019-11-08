var ImageViewer = {
	images: [ "국화:Chrysanthemum.jpg", 
		"사막:Desert.jpg", 
		"수국:Hydrangeas.jpg", 
		"해파리:Jellyfish.jpg", 
		"코알라:Koala.jpg", 
		"등대:Lighthouse.jpg", 
		"펭귄:Penguins.jpg", 
		"툴립:Tulips.jpg" ],
	changeImage: function(){
		var result = Math.floor(Math.random()*ImageViewer.images.length);
		var imageInfos = ImageViewer.images[result].split(":");
		$("img").attr({
			"src": "images/" + imageInfos[1],
			"alt": imageInfos[0]
		})
	},
	consoleImageLog: function(){
		console.log($(this).attr("alt"));
	},
	init: function(){
		$(".image-viewer button").click(this.changeImage);
		$(".image-viewer img")
			.click(this.changeImage)	
			.dblclick(this.consoleImageLog)	;	
	}	
}