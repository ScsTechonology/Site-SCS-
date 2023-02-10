// SCROLL DO MOUSE

function clickMenu(){
	
	if(itens.style.display  == 'block'){
	   itens.style.display  = 'none'
	} else {
		itens.style.display = 'block'
	}
	
	
}

$(document).scroll(function() {
	var documentTop = $(this).scrollTop();

	if (documentTop > boxTop('#azul') - 120) {
		$('#azul').addClass('animar');
	} else {
		$('#azul').removeClass('animar');
	}
});


