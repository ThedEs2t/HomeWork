$(document).ready(function () {
	$("#myForm").on('submit', function (event) {
		event.preventDefault();
		$.ajax({
			type: "get",
			url: '/form.php',
			success: function (){
				alert("Ваша заявка принята! Ожидайте нашего ответа!");
			}
		})
	});
});
