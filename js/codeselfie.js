$(document).ready(function(){

	hljs.configure({tabReplace: '  '});
	//for reloaded pages 
	$("#colored-code").html(hljs.highlightAuto($("#code-area").val()).value);

	$("#code-area").keyup(function(e){
		$("#colored-code").html(hljs.highlightAuto($("#code-area").val()).value);
	});

	$('a').click(function(e){
		var t = e.target;
		$('#code-style').attr('href',"css/styles/"+$(t).attr('id')+".css");
		$('#ch').text($(t).attr('id'));
	});

	$('#download').click(function(e){
		var t = $('.hljs');
		w = $('.hljs').width();
		h = $('.hljs').height();
		$(t).width($('.hljs').prop("scrollWidth"));
		$(t).height($('.hljs').prop("scrollHeight"));

		html2canvas(t,{
			onrendered: function(canvas){
				$('.hljs').width(w);
				$('.hljs').height(h);
				window.open(canvas.toDataURL(),"_newtab");
			}
		});
	});
});
