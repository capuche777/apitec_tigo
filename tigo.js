alert ('Bienvenido al sistema de pagos\n TIGO');

var plan_usuario = Number(prompt('¿Cual es tu paquete de datos?'));
var minutos_consumidos = Number(prompt('¿Cuantos minutos has consumido de tu paquete?'));
var datos_consumidos = Number(prompt('¿Cuantos datos has consumido de tu paquete?'));
var mensajes_enviados = Number(prompt('¿Cuantos mensajes has enviado?'));
var paquetes_adquiridos = confirm('Has adiquirido algún paquete');
var total = 0;


if (plan_usuario == 1) {
    if (minutos_consumidos > 100) {
        total = (total + (minutos_consumidos - 100) * 4);
        if (datos_consumidos > 100) {
            total = (total + (datos_consumidos - 100));
            if (mensajes_enviados > 10) {
                total = (total + (mensajes_enviados - 10)* 0.5);
                if (paquetes_adquiridos) {
                    total = (total + 25)
                }
            }
        }
    }
    alert(`El total a pagar es:\n Q.${total}`);
} else if (plan_usuario == 2) {
    if (minutos_consumidos > 200) {
        total = (total + (minutos_consumidos - 200) * 4);
        if (datos_consumidos > 1000) {
            total = (total + (datos_consumidos - 1000));
            if (mensajes_enviados > 100) {
                total = (total + (mensajes_enviados - 100) * 0.5);
            }
        }
    }
}