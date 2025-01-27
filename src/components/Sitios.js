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
  <React.Fragment key={index}>
    {link.type === "separator" ? (
      <div className="my-2 border-top"></div> // Separador con borde y margen
    ) : (
      <li>
        <a
          href={link.href}
          target="_blank"
          title={link.title}
          className={link.text === "Aplicacion de PreTest" ? "btn btn-primary disabled shadow w-100" : ""}
        >
          {link.text}
        </a>
      </li>
    )}
  </React.Fragment>
))}
        </ul>
      </div>
    </div>
  </div>
);

const Sitios = () => {
const pisaLinks = [
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS601-JS/index.html"				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "01 - Piscicultura sostenible." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS637-JS/index.html"				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "02 - Investigación sobre las ladera." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS641-JS/index.html"				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "03 - Meteoroides y cráteres" },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA2018-CR548-JS/index.html"		  				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "04 - Foro sobre aves." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA2018-CR571-JS/index.html"		  				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "05 - Las islas Galápagos - Un tesoro natural." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-L1210-JS/index.html"				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "06 - El regalo." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1224-JS/index.html"				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "07 - Barcos de vela." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CM012-JS/index.html"				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "08 - Vallas." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CM010-JS/index.html"				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "09 - Gráficos." },
  { href: "https://pisa2022-questions.oecd.org/platform/index.html?user=&unit=MAT/MA159-Spinners&lang=esp-CHL"	  				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "10 - Ruletas." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorRP-C101a-JS/index.html"  				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "11 - La visita." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorC-CS633-JS/index.html"	  				, title: "Contenidos basado en las unidades liberadas de PISA.", text: "12 - Casa de bajo consumo." },
  { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorC-CS623-JS/index.html"					, title: "Contenidos basado en las unidades liberadas de PISA.", text: "13 - Correr en dias de calor." },
  { href: "https://pisa2022-questions.oecd.org/platform/index.html?user=&domain=CRT&unit=T200-SCienceFairPoster&lang=esp-ESP"	, title: "Contenidos basado en las unidades liberadas de PISA.", text: "14 - Cartel de la exposicion de ciencias." },	
  { type: "separator" }, // Separador
  { href: "https://cescarsoporte.github.io/pisa/English/index.html", title: "Items elaborado de prueba pisa del area de lengua extranjera", text: "15 - English" },
  { href: "https://proyectodescartes.org/competencias/", title: "Esta web recoge objetos de aprendizaje interactivos cuyo objetivo es la formación y evaluación competencial. Sus contenidos se basan en las unidades liberadas de PISA.", text: "Proyecto Descartes" },
  { href: "https://pisa2022-questions.oecd.org/", title: "Contenidos basado en las unidades liberadas de PISA.", text: "Unidades liberadas de PISA" }  
];

  const aleksLinks = [
    { href: "https://www.youtube.com/watch?v=K1u8bKx13ok", title: "ALEKS | ¿Cómo funciona?", text: "VIDEO 1" },
    { href: "https://www.youtube.com/watch?v=B0rAd0QQgK8", title: "ALEKS | ¿Cómo funciona una Verificación de Conocimientos?", text: "VIDEO 2" },
    { href: "https://latam.aleks.com/", title: "Pagina principal de ALEKS", text: "IR A ALEKS" },
    { href: "https://docs.google.com/spreadsheets/d/1Uk5NTB6y1xGl4EZV4ts_xGxXcNiwP2EaUkcTw16q_YI/edit#gid=0", title: "Encuesta aleks", text: "ENCUESTA" }
  ];
  
  const otrosLinks = [
    { href: "https://www.canva.com/", title: "Es una herramienta online de diseño gráfico de uso gratuito. Utilízala para crear publicaciones para redes sociales, presentaciones, carteles, vídeos, logos y mucho más.", text: "Canva" },
    { href: "https://lihuen.linti.unlp.edu.ar/index.php/", title: "Herramienta para crear mapas mentales, útiles para cualquier área de estudio.", text: "FreeMind" },
    { href: "https://www.geogebra.org/?lang=es", title: "Herramientas digitales gratuitas para clases, graficar, geometría, pizarra interactiva y más.", text: "GeoGebra" },
    { href: "https://graspablemath.com/", title: "Asigne tareas de álgebra a sus alumnos y vea comentarios en vivo de su trabajo paso a paso. Descubra, cree y comparta actividades matemáticas interesantes para estudiantes de 4to de primaria hasta 6to de secundaria.", text: "Graspable Math" },
    { href: "https://icell.hudsonalpha.org/", title: "Simulación interactiva que permite a los estudiantes y profesores explorar el funcionamiento interno de una célula animal, vegetal o bacteriana típica.", text: "iCell" },
    { href: "https://es.khanacademy.org/", title: "Ofrece educación gratuita de primer nivel, para cualquier persona en cualquier lugar.", text: "Khan Academy" },
    { href: "https://kahoot.it/", title: "Permite la creación de cuestionarios de evaluación. Es una herramienta por la que el profesor crea concursos en el aula para aprender o reforzar el aprendizaje y donde los alumnos son los concursantes. Los alumnos eligen su alias o nombre de usuario y contestan a una serie de preguntas por medio de un dispositivo móvil. Existen 2 modos de juego: en grupo o individual. Las partidas de preguntas, una vez creadas, son accesibles por todos los usuarios de manera que pueden ser reutilizadas e incluso modificadas para garantizar el aprendizaje. Se puede modificar el tiempo de cuenta atrás, las posibles respuestas y se pueden añadir fotos o vídeos. Finalmente gana quien obtiene más puntuación.", text: "Kahoot" },
    { href: "https://math.microsoft.com/es", title: "Herramienta para Obtenga soluciones paso a paso a tus problemas matemáticos.", text: "Math Solver-Microsoft" },
    { href: "https://education.minecraft.net/es-es", title: "Aprendizaje basado en juegos", text: "Minecraft" },
    { href: "https://es.bignox.com/", title: "Emulador o simulador del sistema operativo Android. El cual puede utilizarse en u n ordenador para acceder a las aplicaciones que solo son compatibles con Android.", text: "Nox Player" },
    { href: "https://phet.colorado.edu/es/", title: "Simulaciones interactivas de ciencias y matemáticas que se basan en la investigación.", text: "Phiet" },
    { href: "https://quizizz.com/join/", title: "es una web/app gratuita que permite crear cuestionarios online de manera lúdica y divertida, que los estudiantes pueden responder de tres maneras distintas: En un juego en directo, como tareas, o de manera individual.", text: "Quizizz" },
    { href: "https://dle.rae.es/", title: "El Diccionario de la lengua española es la obra lexicográfica de referencia de la Academia. Es fruto de la colaboración de las veintidós corporaciones integradas en la Asociación de Academias de la Lengua Española (ASALE).", text: "Real Academia Española" },
    { href: "https://www.thatquiz.org/es/", title: "Herramienta web, que nos permite plantear exámenes, o actividades, para realizarlos online, permitiendo conocer los resultados de dicha evaluación instantáneamente.", text: "that quiz" },
    { href: "https://www.uptodown.com/android", title: "Es un marketplace centrado en la distribución de software de escritorio y aplicaciones móviles.", text: "Uptodown" },
    { href: "https://es.wikipedia.org/wiki/Wikipedia:Portada", title: "La enciclopedia de contenido libre.", text: "Wikipedia" },
    { href: "https://wordwall.net/", title: "crear juegos interactivos y materiales impresos para sus alumnos.", text: "Wordwall" },
    { href: "https://www.youtube.com/channel/UCkqxIMNp8yLL1gclqMJnGLw", title: "Canal interno del centro educativo Santo Cura de Ars para evidenciar las actividades", text: "YouTube" },
    { href: "https://ee.kobotoolbox.org/x/CUbATOVh", title: "", text: "Aplicacion de PreTest" }	
  ];

  return (
    <div className="w-auto">
      <h5>SITIOS DE INTERES</h5>
      <ul className="bg-white px-1 shadow-lg text-start">
        <li>
          <div id="accordion-2" className="accordion" role="tablist">
            <AccordionItem id="1" title="PISA 2025" links={pisaLinks} />
            <AccordionItem id="2" title="Aleks" links={aleksLinks} />
            <AccordionItem id="3" title="Otros Sitios" links={otrosLinks} />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sitios;