
import Vue from "vue";

Vue.filter("Mayuscula", function (value) {
  return value.toUpperCase();
});
Vue.filter("Minuscula", function (value) {
    return value.toLowerCase();
});

Vue.filter("Codificado", function (value) {
    let nuevoTexto = value.toLowerCase();
    nuevoTexto = nuevoTexto.replace('a', 'u').replace('e', 'o');
    /* nuevoTexto = nuevoTexto.replace('e', 'o')
    nuevoTexto = nuevoTexto.replace('e', 'o')
    nuevoTexto = nuevoTexto.replace('e', 'o') */
    return nuevoTexto;
}); 

Vue.filter("Intercalado", function (value) {
    let cadena = value;
    cadena.array.forEach(element => {
        if (element.index() % 2 != 0) {
            element.toLowerCase();
        } 
    });

    
    return cadena;
}); 