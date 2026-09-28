// Datos y funciones del blog

// Entradas del blog por defecto
const entradasIniciales = [
  {
    id: 1,
    titulo: "Rapa Nui, Isla de Pascua: un viaje inolvidable",
    fecha: "3 de agosto de 2026",
    pais: "Chile",
    resumen: "Rapa Nui, Isla de Pascua, Chile. Un viaje inolvidable: los moáis, el mar y una isla que parece estar en otro mundo.",
    contenido: [
      "Rapa Nui, o Isla de Pascua, es uno de esos lugares que uno ve en fotos durante años y no termina de creer que existe. Está en medio del océano Pacífico, muy lejos del continente, y solo llegar ya se siente como una pequeña aventura.",
      "Lo que más me impresionó fueron los moáis, esas enormes figuras de piedra que miran hacia la isla. Verlos de cerca, uno por uno, y pensar en cómo los hicieron y los movieron hace tantos siglos, me dejó sin palabras.",
      "Además de los moáis, me encantó la isla en sí: los caminos de tierra, los caballos sueltos, el mar de un azul muy fuerte y los atardeceres. Es un lugar tranquilo donde el tiempo parece pasar más despacio.",
      "Si tienes la oportunidad de ir, tómate varios días y no te apures. Es un viaje que se disfruta mejor con calma. Para mí fue, sin duda, un viaje inolvidable."
    ]
  },
  {
    id: 2,
    titulo: "El Chorro de Girón: quiero volver para acampar",
    fecha: "16 de agosto de 2026",
    pais: "Ecuador",
    resumen: "El Chorro, Girón, Ecuador. Quiero volveeer para acampar 🏕!!",
    contenido: [
      "En Ecuador también hay lugares increíbles, y uno de ellos es El Chorro, en Girón. Es una cascada enorme rodeada de naturaleza, y solo por el paisaje ya vale la pena el viaje.",
      "Fui por el día y me quedé con muchas ganas de más. El sonido del agua, el aire fresco y el verde por todas partes hacen que uno se olvide de la ciudad y de las prisas.",
      "Mientras caminaba por ahí pensaba lo bien que se debe dormir en una carpa con ese ruido de fondo. Por eso ya tengo el plan: volver con una carpa, un buen abrigo y tiempo para quedarme una noche o dos.",
      "Quiero volveeer para acampar 🏕!! Cuando lo haga, les cuento cómo me fue."
    ]
  },
  {
    id: 3,
    titulo: "Montevideo, puro encanto",
    fecha: "29 de agosto de 2026",
    pais: "Uruguay",
    resumen: "Montevideo, Uruguay. Montevideo, puro encanto. 🫶❤️",
    contenido: [
      "Montevideo me conquistó desde el primer paseo. Es una ciudad tranquila, amable y con muchísimo encanto, de esas en las que uno se siente cómodo enseguida.",
      "Lo mejor fue caminar por la rambla, ese paseo largo junto al mar donde la gente sale a caminar, a correr o simplemente a sentarse a ver el atardecer. Muchas personas llevan su mate y se quedan conversando por horas.",
      "También recorrí la Ciudad Vieja, con sus calles antiguas, sus edificios de otra época y sus cafés pequeños. Cada esquina tiene algo para mirar.",
      "Me fui con ganas de volver y de conocer más de Uruguay. Montevideo, puro encanto. 🫶❤️"
    ]
  },
  {
    id: 4,
    titulo: "Las islas flotantes de los Uros, en el lago Titicaca",
    fecha: "10 de septiembre de 2026",
    pais: "Perú",
    foto: "uros",
    resumen: "Uros Islands, Puno. En mi visita a la Isla de los Uros en el lago Titicaca, donde las casas flotantes y las coloridas artesanías cuentan historias milenarias.",
    contenido: [
      "En mi visita a la Isla de los Uros, en el lago Titicaca, conocí uno de los lugares más curiosos que he visto: islas que flotan. Están hechas de totora, una planta que crece en el lago, y hasta las casas se construyen con ella.",
      "Las familias que viven ahí nos explicaron cómo arman las islas y cómo las van renovando poco a poco, agregando capas nuevas de totora. Caminar encima se siente diferente, como pisar algo blando que se mueve un poquito.",
      "Las casas flotantes y las coloridas artesanías cuentan historias milenarias. Los tejidos y los bordados tienen colores muy vivos, y cada pieza tiene detrás muchas horas de trabajo.",
      "Fue una experiencia que me hizo valorar la forma de vida de estas comunidades y su cultura. Si vas a Puno, no te pierdas esta visita."
    ]
  },
  {
    id: 5,
    titulo: "Un poquito de Panamá",
    fecha: "21 de septiembre de 2026",
    pais: "Panamá",
    resumen: "Panama City. Un poquito de Panamá! ❤️🫶",
    contenido: [
      "Panamá fue una parada corta, pero me llevé un buen recuerdo. La Ciudad de Panamá mezcla edificios muy modernos con barrios antiguos, y esa combinación se ve muy bien.",
      "Me gustó mucho ver los rascacielos junto al mar y después caminar por el casco antiguo, con sus calles pequeñas y sus casas de colores. Es como estar en dos ciudades a la vez.",
      "Como fue poco tiempo, solo pude ver un poquito, pero me quedaron ganas de conocer más, especialmente el canal y sus alrededores.",
      "Un poquito de Panamá! ❤️🫶 Espero volver con más días para recorrerlo con calma."
    ]
  },
  {
    id: 6,
    titulo: "Montaña de Colores: hermosa, pero casi muero en la subida",
    fecha: "27 de septiembre de 2026",
    pais: "Perú",
    foto: "colores",
    resumen: "Montaña de Colores, Perú. Un lugar hermoso, aunque casi muero a la subida. 🫶❤️",
    contenido: [
      "La Montaña de Colores fue uno de los lugares más lindos que he visto en mi vida, y también uno de los que más me costaron. Un lugar hermoso, aunque casi muero a la subida. 🫶❤️",
      "El camino es largo y está a mucha altura, más de 5.000 metros. Con tan poco oxígeno cada paso se siente el doble de pesado, y tuve que parar muchas veces a respirar y tomar agua.",
      "Cuando por fin llegué arriba y vi los colores de la montaña, con sus franjas rojas, amarillas y verdes, se me olvidó todo el cansancio. Valió la pena cada paso.",
      "Un consejo para quien quiera ir: aclimátate un par de días antes, camina despacio, toma mucha agua y lleva abrigo, porque arriba hace mucho frío."
    ]
  }
];

// Función leer
function leer(clave, porDefecto) {
  try {
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor === null ? porDefecto : valor;
  } catch (error) {
    return porDefecto;
  }
}

 // Función guardar
function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    // Si no se guarda el blog sigue funcionando
  }
}

// Nuevas entradas(las más recientes primero) y luego las iniciales
function obtenerEntradas() { 
  return leer("entradasNuevas", []).concat(entradasIniciales);
}

// La foto de cada entrada se llama como el país, en minúsculas y sin tilde:
// Chile -> img/chile.jpeg, Panamá -> img/panama.jpeg

function fotoDe(entrada) {
  const nombre = entrada.foto || entrada.pais.toLowerCase().replace("ú", "u").replace("á", "a");
  return "img/" + nombre + ".jpeg";
}
