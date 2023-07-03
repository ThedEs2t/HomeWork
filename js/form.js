$(document).ready(function () {
	$("#myForm").submit(function (e) {
		e.preventDefault();
		var form = $(this);
		var actionUrl = form.attr('action');
		$.ajax({
			type: "POST",
			url: actionUrl,
			data: form.serialize(),
			success: function (data) {
				alert("Спасибо за заявку! Скоро мы с вами свяжемся!");
				return false;
			}
		});
	});
}); 