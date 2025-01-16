import React from 'react';

const AccordionItem = ({ id, title, links }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" role="tab">
      <button
        className="accordion-button collapsed px-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#accordion-2 .item-${id}`}
        aria-expanded="true"
        aria-controls={`accordion-2 .item-${id}`}
      >
        {title}
      </button>
    </h2>
    <div
      className={`accordion-collapse collapse item-${id}`}
      role="tabpanel"
      data-bs-parent="#accordion-2"
    >
      <div className="">
        <ul className="px-1 text-start">
          {links.map((link, index) => (
            <li key={index}><a href={link.href} target="_blank" title={link.title}>{link.text}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Sitios = () => {
  const pisaLinks = [
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS601-JS/index.html", title: "ALEKS | ¿Cómo funciona?", text: "01 - Piscicultura sostenible." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS637-JS/index.html", title: "ALEKS | ¿Cómo funciona una Verificación de Conocimientos?", text: "02 - Investigación sobre las ladera." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS641-JS/index.html", title: "Pagina principal de ALEKS", text: "03 - Meteoroides y cráteres" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA2018-CR548-JS/index.html", title: "Encuesta aleks", text: "04 - Foro sobre aves." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA2018-CR571-JS/index.html", title: "Encuesta aleks", text: "05 - Las islas Galápagos - Un tesoro natural." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-L1210-JS/index.html", title: "Encuesta aleks", text: "06 - El regalo." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1224-JS/index.html", title: "Encuesta aleks", text: "07 - Barcos de vela." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CM012-JS/index.html", title: "Encuesta aleks", text: "08 - Vallas." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CM010-JS/index.html", title: "Encuesta aleks", text: "09 - Gráficos." },
    { href: "https://pisa2022-questions.oecd.org/platform/index.html?user=&unit=MAT/MA159-Spinners&lang=esp-CHL", title: "Encuesta aleks", text: "10 - Ruletas." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorRP-C101a-JS/index.html", title: "Encuesta aleks", text: "11 - La visita." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorC-CS633-JS/index.html", title: "Encuesta aleks", text: "12 - Casa de bajo consumo." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorC-CS623-JS/index.html", title: "Encuesta aleks", text: "13 - Correr en dias de calor." },
    { href: "https://pisa2022-questions.oecd.org/platform/index.html?user=&domain=CRT&unit=T200-SCienceFairPoster&lang=esp-ESP", title: "Encuesta aleks", text: "14 - Cartel de la exposicion de ciencias." }
  ];

  const aleksLinks = [
    { href: "https://www.youtube.com/watch?v=K1u8bKx13ok", title: "ALEKS | ¿Cómo funciona?", text: "VIDEO 1" },
    { href: "https://www.youtube.com/watch?v=B0rAd0QQgK8", title: "ALEKS | ¿Cómo funciona una Verificación de Conocimientos?", text: "VIDEO 2" },
    { href: "https://latam.aleks.com/", title: "Pagina principal de ALEKS", text: "IR A ALEKS" },
    { href: "https://docs.google.com/spreadsheets/d/1Uk5NTB6y1xGl4EZV4ts_xGxXcNiwP2EaUkcTw16q_YI/edit#gid=0", title: "Encuesta aleks", text: "ENCUESTA" }
  ];

  return (
    <div className="w-auto">
      <h5>SITIOS DE INTERES</h5>
      <ul className="bg-white px-1 shadow-lg text-start">
        <li>
          <div id="accordion-2" className="accordion" role="tablist">
            <AccordionItem id="1" title="PISA 2025" links={pisaLinks} />
            <AccordionItem id="2" title="Aleks" links={aleksLinks} />
          </div>
        </li>
        <li><a href="https://www.canva.com/" target="_blank" title="">Canva</a></li>
        <li><a href="https://www.youtube.com/channel/UCkqxIMNp8yLL1gclqMJnGLw" target="_blank" title="">YouTube</a></li>
        <li><a href="https://kahoot.it/" target="_blank" title="Permite la creación de cuestionarios de evaluación. Es una herramienta por la que el profesor crea concursos en el aula para aprender o reforzar el aprendizaje y donde los alumnos son los concursantes. Los alumnos eligen su alias o nombre de usuario y contestan a una serie de preguntas por medio de un dispositivo móvil. Existen 2 modos de juego: en grupo o individual. Las partidas de preguntas, una vez creadas, son accesibles por todos los usuarios de manera que pueden ser reutilizadas e incluso modificadas para garantizar el aprendizaje. Se puede modificar el tiempo de cuenta atrás, las posibles respuestas y se pueden añadir fotos o vídeos. Finalmente gana quien obtiene más puntuación.">Kahoot</a></li>
        <li><a href="https://lihuen.linti.unlp.edu.ar/index.php/Freemind_-_Editor_de_Mapas_Mentales" target="_blank" title="Herramienta para crear mapas mentales, útiles para cualquier área de estudio.">FreeMind</a></li>
        <li><a href="https://www.geogebra.org/?lang=es" target="_blank" title="Herramientas digitales gratuitas para clases, graficar, geometría, pizarra interactiva y más.">GeoGebra</a></li>
        <li><a href="https://graspablemath.com/" target="_blank" title="Asigne tareas de álgebra a sus alumnos y vea comentarios en vivo de su trabajo paso a paso. Descubra, cree y comparta actividades matemáticas interesantes para estudiantes de 4to de primaria hasta 6to de secundaria.">Graspable Math</a></li>
        <li><a href="https://icell.hudsonalpha.org/" target="_blank" title="Simulación interactiva que permite a los estudiantes y profesores explorar el funcionamiento interno de una célula animal, vegetal o bacteriana típica.">iCell</a></li>
        <li><a href="https://es.khanacademy.org/" target="_blank" title="Ofrece educación gratuita de primer nivel, para cualquier persona en cualquier lugar.">Khan Academy</a></li>
        <li><a href="https://math.microsoft.com/es" target="_blank" title="Herramienta para Obtenga soluciones paso a paso a tus problemas matemáticos.">Math Solver-Microsoft</a></li>
        <li><a href="https://education.minecraft.net/es-es" target="_blank" title="Aprendizaje basado en juegos">Minecraft</a></li>
        <li><a href="https://es.bignox.com/" target="_blank" title="Emulador o simulador del sistema operativo Android. El cual puede utilizarse en u n ordenador para acceder a las aplicaciones que solo son compatibles con Android.">Nox Player</a></li>
        <li><a href="https://phet.colorado.edu/es/" target="_blank" title="Simulaciones interactivas de ciencias y matemáticas que se basan en la investigación.">Phiet</a></li>
        <li><a href="https://proyectodescartes.org/competencias/" target="_blank" title="Esta web recoge objetos de aprendizaje interactivos cuyo objetivo es la formación y evaluación competencial. Sus contenidos se basan en las unidades liberadas de PISA.">Proyecto Descartes</a></li>
        <li><a href="https://quizizz.com/join/" target="_blank" title="es una web/app gratuita que permite crear cuestionarios online de manera lúdica y divertida, que los estudiantes pueden responder de tres maneras distintas: En un juego en directo, como tareas, o de manera individual.">Quizizz</a></li>
        <li><a href="https://dle.rae.es/" target="_blank" title="El Diccionario de la lengua española es la obra lexicográfica de referencia de la Academia. Es fruto de la colaboración de las veintidós corporaciones integradas en la Asociación de Academias de la Lengua Española (ASALE).">Real Academia Española</a></li>
        <li><a href="https://www.thatquiz.org/es/" target="_blank" title="Herramienta web, que nos permite plantear exámenes, o actividades, para realizarlos online, permitiendo conocer los resultados de dicha evaluación instantáneamente.">that quiz</a></li>
        <li><a href="https://pisa2022-questions.oecd.org/" target="_blank" title="Contenidos basado en las unidades liberadas de PISA.">Unidades liberadas de PISA</a></li>
        <li><a href="https://www.uptodown.com/android" target="_blank" title="Es un marketplace centrado en la distribución de software de escritorio y aplicaciones móviles.">Uptodown</a></li>
        <li><a href="https://es.wikipedia.org/wiki/Wikipedia:Portada" target="_blank" title="La enciclopedia de contenido libre.">Wikipedia</a></li>
        <li><a href="https://wordwall.net/" target="_blank" title="crear juegos interactivos y materiales impresos para sus alumnos. ">Wordwall</a></li>
        <li><a className="btn btn-primary disabled shadow" href="https://ee.kobotoolbox.org/x/CUbATOVh" target="_blank" title="">Aplicacion de PreTest</a></li>
      </ul>
    </div>
  );
}

export default Sitios;