$(document).ready(function () {
	$("#myForm").on('submit', function (event) {
		event.preventDefault();
		$.post("/form.php", $(this).serialize());
	});
});