
document.addEventListener("DOMContentLoaded", function() {
    // Definir la fecha del evento (18 de febrero a las 7:30 PM hora local)
    const fechaEvento = new Date("February 20, 2025 21:30:00").getTime();

    function actualizarCuentaRegresiva() {
        let ahora = new Date().getTime();
        let tiempoRestante = fechaEvento - ahora;

        if (tiempoRestante > 0) {
            let horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
            let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

            document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
            document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
            document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
        } else {
            document.getElementById("cuentaRegresiva").textContent = "¡El evento ha comenzado!";
            clearInterval(intervalo);
        }
    }

    let intervalo = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva();

    // Redirección a WhatsApp con datos del formulario
    document.getElementById('registroForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let whatsapp = document.getElementById('whatsapp').value;
        let modalidad = document.getElementById('modalidad').value;
        let interes = document.getElementById('interes').value;

        let mensaje = `Hola, mi nombre es ${nombre}. Estoy interesado en el evento y prefiero asistir de forma ${modalidad}. Me interesa especialmente ${interes}. ¿Podrían enviarme la invitación?`;

        let urlWhatsApp = `https://wa.me/123456789?text=${encodeURIComponent(mensaje)}`;

        window.location.href = urlWhatsApp;
    });
});





    
        function enviarFormulario(event) {
            event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const interes = document.getElementById('interes').value;
            const asistencia = document.getElementById('asistencia').value;

            // Crear el mensaje para enviar por WhatsApp
            const mensaje = `Hola, me llamo ${nombre} y mi WhatsApp es ${whatsapp}. Estoy interesado en ${interes} y mi modalidad de asistencia será ${asistencia}.`;

            // Codificar el mensaje para URL
            const mensajeCodificado = encodeURIComponent(mensaje);

            // Enlace a WhatsApp con el número y el mensaje
            const enlaceWhatsApp = `https://wa.me/573117055243?text=${mensajeCodificado}`;

            // Redirigir al usuario a WhatsApp
            window.location.href = enlaceWhatsApp;
        }
