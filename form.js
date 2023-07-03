$(document).ready(function () {
	$("#myForm").on('submit', function (event) {
		event.preventDefault();
		$.ajax({
			method: "post",
			url: '/form.php',
			data: $(this).serialize(),
			success: function (){
				alert("Ваша заявка принята! Ожидайте нашего ответа!");
			}
		})
	});
});
