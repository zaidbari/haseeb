$(function () {
	var $write = $('#write'),
		count = 0,
		color = $("#keyboard").data("color"),
		pairs = $("#keyboard").data("pairs")

	$('#reset').click(function () {
		$('.letter').removeClass('disable').css('background-color', '')
		$write.html('')
		count = 0
	})

	$('#keyboard .letter').click(function () {
		if (count < pairs) count++
		else {
			count = 1
			color = `hsla(${ Math.random() * 360 }, 90%, 60%, 1)`
			$write.html($write.html() + " &nbsp; ")
		}

		$(this).css("background-color", color).addClass('disable')
		$write.html($write.html() + $(this).html().toUpperCase())
	})

	$('input[name=options]').change(function () {
		$('#imageInput').toggleClass('d-none')
		$('#stringInput').toggleClass('d-none')
	})

})