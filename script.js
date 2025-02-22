document.addEventListener("DOMContentLoaded", function() {
    // Definir la fecha del evento (23 de febrero de 2025 a las 9:30 PM hora local)
    const fechaEvento = new Date("February 23, 2025 19:30:00").getTime();

    function actualizarCuentaRegresiva() {
        let ahora = new Date().getTime();
        let tiempoRestante = fechaEvento - ahora;

        if (tiempoRestante > 0) {
            let horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
            let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

            let horasElem = document.getElementById("horas");
            let minutosElem = document.getElementById("minutos");
            let segundosElem = document.getElementById("segundos");

            if (horasElem && minutosElem && segundosElem) {
                horasElem.textContent = horas.toString().padStart(2, "0");
                minutosElem.textContent = minutos.toString().padStart(2, "0");
                segundosElem.textContent = segundos.toString().padStart(2, "0");
            }
        } else {
            let cuentaRegresivaElem = document.getElementById("cuentaRegresiva");
            if (cuentaRegresivaElem) {
                cuentaRegresivaElem.textContent = "¡El evento ha comenzado!";
            }
            clearInterval(intervalo);
        }
    }

    let intervalo = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva();

    // Redirección a WhatsApp con datos del formulario
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let whatsapp = document.getElementById("whatsapp").value.trim();
        let interes = document.getElementById("interes").value;
        let asistencia = document.getElementById("asistencia").value;
        let importancia = document.getElementById("importancia").value;
        let rango = document.getElementById("rango").value;

        // Validación de campos
        if (!nombre || !whatsapp || !interes || !asistencia || !importancia || !rango) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Crear el mensaje para WhatsApp
        let mensaje = `👋 ¡Hola! Quiero registrarme al evento. Mis datos son:
        📌 Nombre: *${nombre}*
        📱 WhatsApp: *${whatsapp}*
        📖 Interés: *${interes}*
        🏛 Modalidad de asistencia: *${asistencia}*
        📚 Importancia de la educación: *${importancia} / 5*
        💰 Rango de inversión en educación: *${rango}*`;

        // Número de WhatsApp donde se enviará la información
        let numeroWhatsApp = "573117055243"; // Código de país + número sin espacios

        // Generar enlace de WhatsApp y abrirlo en una nueva pestaña
        let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });
});

/////////////////////////////////////////////////////////////////////////////////

function abrirModal(paquete) {
    document.getElementById("modal-titulo").textContent = paquete;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}




    
// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    let contenido = document.querySelector(".modal-contenido");
    
    // Si el usuario hace clic fuera del contenido del modal, se cierra
    if (event.target === modal) {
        cerrarModal();
    }
};

function abrirModal(paquete) {
    document.getElementById('modal-titulo').textContent = paquete;
    document.getElementById('modal-descripcion').textContent = "¡Aprovecha esta oferta y asegura tu lugar en el evento!";
    
    let comprarBtn = document.getElementById('comprar-btn');
    comprarBtn.onclick = function() {
        window.location.href = `https://wa.me/+573117055243?text=Hola,%20quiero%20comprar%20el%20${encodeURIComponent(paquete)}`;
    };

    document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        cerrarModal();
    }
};



function abrirModal(paquete, precio) {
    document.getElementById('modal-titulo').textContent = paquete;
    document.getElementById('modal-descripcion').innerHTML = `
        ¡Aprovecha esta oferta y asegura tu lugar en el evento!<br><br>
        <strong>Precio: $${precio} USD</strong>
    `;

    let comprarBtn = document.getElementById('comprar-btn');
    comprarBtn.onclick = function() {
        window.location.href = `https://wa.me/+573117055243?text=Hola,%20quiero%20comprar%20el%20${encodeURIComponent(paquete)}%20por%20$${precio}%20USD`;
    };

    document.getElementById('modal').style.display = 'flex';
}


/////////////////////////////////////////////////////////
function abrirModal(paquete, precio) {
    const beneficios = {
        "Paquete INNSIGHT": [
            "Acceso al evento virtual en vivo",
            "Materiales digitales de apoyo",
            "Soporte por WhatsApp"
        ],
        "Paquete INNTREPID": [
            "Acceso presencial al evento",
            "Material exclusivo para asistentes",
            "Certificado de participación",
            "Networking con expertos"
        ],
        "Paquete INNPULSE": [
            "Acceso total presencial y virtual",
            "Sesión privada con expertos",
            "Regalo exclusivo de bienvenida",
            "Asientos preferenciales en el evento",
            "Certificado VIP con firma oficial"
        ],
        "Paquete INNFINITY": [
            "Acceso exclusivo a todas las ediciones del evento",
            "Coaching personalizado con expertos",
            "Acceso a contenido premium",
            "Experiencia VIP en eventos presenciales",
            "Certificado Elite con reconocimiento especial",
            "Regalo exclusivo de lujo"
        ]
    };

    document.getElementById('modal-titulo').textContent = paquete;
    document.getElementById('modal-descripcion').innerHTML = `<strong>Precio: $${precio} USD</strong>`;

    let listaBeneficios = document.getElementById('modal-beneficios');
    listaBeneficios.innerHTML = ""; // Limpiar antes de añadir nuevos beneficios
    beneficios[paquete].forEach(beneficio => {
        let li = document.createElement('li');
        li.textContent = beneficio;
        listaBeneficios.appendChild(li);
    });

    let comprarBtn = document.getElementById('comprar-btn');
    comprarBtn.onclick = function() {
        window.location.href = `https://wa.me/+573117055243?text=Hola,%20quiero%20comprar%20el%20${encodeURIComponent(paquete)}%20por%20$${precio}%20USD`;
    };

    document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    let modal = document.getElementById('modal');
    if (event.target === modal) {
        cerrarModal();
    }
};





/////////////////////////////////////////////////////

function redireccionarWhatsApp(paquete, precio) {
    let mensaje = `Hola, estoy interesado en comprar el ${paquete} por $${precio} USD. ¿Podrían darme más información?`;
    let url = `https://wa.me/+573117055243?text=${encodeURIComponent(mensaje)}`;
    
    // Redirigir a WhatsApp
    window.location.href = url;
}


//////////////////////////////////////////////

function redireccionarWhatsApp(paquete, precio) {
    let mensaje = `Hola, estoy interesado en comprar el ${paquete} por $${precio} USD. ¿Podrían darme más información?`;
    let url = `https://wa.me/+573117055243?text=${encodeURIComponent(mensaje)}`;
    
    // Redirigir a WhatsApp
    window.location.href = url;
}


////////////////////////////////////////////////////////

function redireccionarWhatsApp(paquete, precio) {
    let mensaje = `Hola, estoy interesado en comprar el ${paquete} por $${precio} USD. ¿Podrían darme más información?`;
    let url = `https://wa.me/+573117055243?text=${encodeURIComponent(mensaje)}`;
    
    // Redirigir a WhatsApp
    window.location.href = url;
}


////////////////////////////////////////////////////////////

function redireccionarWhatsApp(paquete, precio) {
    let mensaje = `Hola, estoy interesado en comprar el ${paquete} por $${precio} USD. ¿Podrían darme más información?`;
    let url = `https://wa.me/+573117055243?text=${encodeURIComponent(mensaje)}`;
    
    // Redirigir a WhatsApp
    window.location.href = url;
}
