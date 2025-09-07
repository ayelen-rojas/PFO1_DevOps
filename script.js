const form = document.getElementById("form-perfil");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const data = new FormData(form);

	fetch("perfil.php", {
		method: "POST",
		body: data,
	})
		.then((res) => res.text())
		.then((msg) => {
			document.getElementById("respuesta").innerText = msg;
		})
		.catch((err) => {
			document.getElementById("respuesta").innerText =
				"Error en la comunicación con el servidor.";
		});
});
