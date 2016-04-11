var size = 20;
var dim = 500;
var celldim = Math.floor(dim/size);

$(document).ready(function(){

	drawSketchpad(size, false);

	$('#reset').click(function(){
		var tsize = resetSketchpad();
		drawSketchpad(tsize,false);
	});
	$('#rColor').click(function(){
		var tsize = resetSketchpad();
		drawSketchpad(tsize,true);
	});
});

function drawSketchpad(noCell, clrRand){
	var color = 'white';
	$('.cell').remove();

	size = noCell
	celldim = Math.floor(dim/size);
	dim = size*celldim;

	$('#middle').height(""+dim+"px");
	$('#middle').width(""+dim+"px");

	for(var i = 0; i < size; i++) {
		for(var j = 0; j < size; j++){
			$('#middle').append('<div class="cell"></div>');

		};
	};
	$('.cell').height(""+celldim+"px");
	$('.cell').width(""+celldim+"px");

	console.log('size '+size);
	console.log('size*celldim '+size*celldim);
	console.log('celldim '+celldim);

	$('.cell').hover(function(){
		//$(this).css('background',color);
			if(clrRand === true){
				color = "#"+Math.floor(Math.random()*16777215).toString(16);
			}
			console.log('color: '+color);
			$(this).css('background',''+color+'');
	});

}
function resetSketchpad(){
			$('.cell').css('background','black');
		do{
			tsize = prompt('Enter sketch pad size 1 - 127');
		}while((tsize < 1 || tsize > 127)|| !$.isNumeric(tsize))
	return tsize;
}