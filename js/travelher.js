	/*JQuery please go and get the docunment. When its ready (loaded) please run everything inside here*/

	$("document").ready(function(){

        // initialize flickity
    
        $(".main-carousel").flickity({
            draggable:true,
            cellAlign: 'left',
            contain: true,
            autoPlay: false,
            pageDots: false
        });
    
    
    });