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
  const propuestasCourseraLinks = [
    { href: "https://www.coursera.org/learn/fundamentos-de-la-ciberseguridad", title: "En este primer curso del Certificado de Ciberseguridad de Google conocerás el mundo de la ciberseguridad a través de un plan de estudios interactivo, desarrollado por Google. \n\nIdentificarás los eventos significativos que llevaron al desarrollo del campo de la ciberseguridad, conocerás su importancia para las operaciones comerciales actuales y explorarás las responsabilidades y habilidades laborales de un/a analista de ciberseguridad de nivel inicial. \n\nTe guiarán especialistas de Google, que actualmente trabajan en ciberseguridad, con actividades prácticas y ejemplos que simulan tareas comunes y frecuentes de este campo. \n\nTodo esto te ayudará a desarrollar tus habilidades y prepararte para trabajar. \n\n\n\nLos/las estudiantes que completen este certificado estarán preparados/as para solicitar trabajo en el área de la ciberseguridad, en un nivel inicial. \n\nNo se necesita experiencia previa.", text: "Fundamentos de la ciberseguridad" },
    { href: "https://www.coursera.org/learn/fundamentos-de-la-ciberseguridad", title: "La transformación digital es un tema de gran interés, pero ¿qué es exactamente y qué significa para las compañías? En este curso, desarrollado en la Darden School of Business en la Universidad de Virginia y dirigido por los mejores profesores de Darden y expertos en gestión global de Boston Consulting Group, hablamos de transformación digital de dos maneras. \n\nPrimero discutimos el ritmo del cambio y el imperativo que crea para las empresas. \n\nLuego, brindamos el contexto para esta transformación y lo que se necesita para ganar en la era digital. \n\nA continuación, analizamos el marco patentado de BCG, que lo ayuda a identificar áreas clave para digitalizar, incluida la estrategia, los procesos centrales y la tecnología. \n\nAl final de este curso, podrá: -describir la economía subyacente de la innovación, la tecnología y las disrupciones del mercado -sopesar los pros y los contras de las tecnologías digitales actuales que impulsan el avance -utilizar el marco de transformación digital de BCG como una «guía práctica» para digitalizar su organización", text: "Transformacion Digital" },
    { href: "https://www.coursera.org/learn/gen-ai-apps-transform-your-work-es", title: "Transform Your Work With Gen AI Apps is the fourth course of the Gen AI Leader learning path. \n\nThis course introduces Google's gen AI applications, such as Gemini for Workspace and NotebookLM. \n\nIt guides you through concepts like grounding, retrieval augmented generation, constructing effective prompts and building automated workflows.", text: "Apps de IA generativa: transforma tu trabajo" },
    { href: "https://www.coursera.org/learn/cybersecurity-for-managers", title: "En el mundo empresarial, los managers suelen ser el principal objetivo de un ciberataque, ya que tienen acceso a información confidencial, a cuentas o a transacciones económicas. \n\nAdemás, sus relaciones con múltiples contactos de interés como clientes, proveedores o personas de la misma organización los convierten en objetivos especialmente atractivos para los ciberdelincuentes. \n\nPor ello, en este curso trataremos las temáticas más relevantes en el ámbito de la ciberseguridad que debes conocer. \n\nDesde los riesgos a los que estamos expuestos, pasando por la importancia de la defensa personal y hasta cómo las organizaciones deben gestionar las crisis de seguridad o el diseño de procesos seguros. \n\nAnímate a adentrarte en el mundo de la ciberseguridad de la mano de este curso diseñado especialmente para managers. \n\n¡Adelante!", text: "cybersecurity-for-managers" },
    { href: "https://www.coursera.org/learn/cybersecurity-for-managers", title: "La relevancia de apoyar a empresas de menor tamaño con capacitación en transformación digital radica en lo crítica que resulta esta materia, en el contexto actual, para su desarrollo y competitividad. \n\nEste MOOC fue diseñado para empresarios, cubriendo los temas claves a considerar en el proceso de transformación digital. \n\nSe abordará la necesidad de tener una estrategia digital y cómo elaborarla, la digitalización de procesos y sus factores críticos para el éxito, el marketing en un entorno digital, la implementación de canales digitales y sus implicancias, cómo enfrentar esta transformación desde la perspectiva de las personas, la gestión de sus competencias y el cambio cultural requerido. \n\nLa metodología de este MOOC contempla una combinación de video clases y test auto-evaluables de selección múltiple, los cuales entregan retroalimentación a los alumnos para que puedan conocer su estado de avance en cuanto al aprendizaje esperado.  \n\nSe dicta en modalidad online, en formato masivo, pudiendo llegar a distintos lugares del mundo a través de la plataforma de Coursera.", text: "claves-para-el-exito-de-la-transformacion-digital-en-pymes" },
    { href: "https://www.coursera.org/learn/gen-ai-agents-transform-your-organization-es", title: "Agentes de IA generativa: transforma tu organización es el quinto y último curso de la ruta de aprendizaje de Líder de IA generativa. \n\nEn este curso, se explora cómo las organizaciones pueden utilizar los agentes de IA generativa personalizados para abordar desafíos empresariales específicos. \n\nPuedes obtener experiencia práctica a través de la creación de un agente de IA básico mientras exploras los componentes de estos agentes, como los modelos, los bucles de razonamiento y las herramientas.", text: "Agentes de IA generativa: transforma tu organización" },
    { href: "https://www.coursera.org/learn/administracion-tecnologias-informacion", title: "Este curso presenta una introducción a las operaciones de una empresa y sus procesos de negocio, así como a los sistemas de información que deben soportarlos, con el objeto de materializar y potenciar la estrategia de negocio.", text: "Administración de las Tecnologías de la Información" },
    { href: "https://www.coursera.org/learn/ai-for-everyone-es", title: "La IA no es solo para ingenieros. \n\nSi desea que su organización esté mejor preparada en el uso de la IA, este es el curso que todos deberían hacer, especialmente sus colegas no técnicos.", text: "IA Para Todos (Español)" }
  ];
  const smvLinks = [
    { href: "https://docs.google.com/forms/d/153vrDPnSX-x4zQeEs0z_tTlwiHbFzwQ22-kEUl0pCgo/edit", title: "Servicio Militar Voluntario", text: "Cuestionario A-D" }
  ];
  const sapceLinks = [
    { href: "https://onedrive.live.com/login/", title: "English For A Better Life", text: "SAPCE" }
  ];
  const prueba2025Links = [
    { href: "https://sites.google.com/fictionexpress.co.uk/pruebasinternacionales2025rd/3er-grado-primaria?authuser=0", title: "Prueba internacional 2025 RD", text: "3er grado de primaria" },
    { href: "https://sites.google.com/fictionexpress.co.uk/pruebasinternacionales2025rd/6%C2%BA-grado-primaria?authuser=0", title: "Prueba internacional 2025 RD", text: "6to grado de primaria" },
    { href: "https://sites.google.com/fictionexpress.co.uk/pruebasinternacionales2025rd/2%C2%BA-ciclo-secundaria?authuser=0", title: "Prueba internacional 2025 RD", text: "2do ciclo de secundaria" }
  ];
  const pisaLinks = [
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS601-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "01 - Piscicultura sostenible." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS637-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "02 - Investigación sobre las ladera." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CS641-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "03 - Meteoroides y cráteres" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA2018-CR548-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "04 - Foro sobre aves." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA2018-CR571-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "05 - Las islas Galápagos - Un tesoro natural." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-L1210-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "06 - El regalo." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1224-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "07 - Barcos de vela." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CM012-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "08 - Vallas." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CM010-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "09 - Gráficos." },
    { href: "https://pisa2022-questions.oecd.org/platform/index.html?user=&unit=MAT/MA159-Spinners&lang=esp-CHL", title: "Contenidos basado en las unidades liberadas de PISA.", text: "10 - Ruletas." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorRP-C101a-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "11 - La visita." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorC-CS633-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "12 - Casa de bajo consumo." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISAordenadorC-CS623-JS/index.html", title: "Contenidos basado en las unidades liberadas de PISA.", text: "13 - Correr en dias de calor." },
    { href: "https://pisa2022-questions.oecd.org/platform/index.html?user=&domain=CRT&unit=T200-SCienceFairPoster&lang=esp-ESP", title: "Contenidos basado en las unidades liberadas de PISA.", text: "14 - Cartel de la exposicion de ciencias." },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1227-JS/index.html", title: "Items liberado de prueba pisa del area de Matematica", text: "15 - Puerta giratoria" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1235-JS/index.html", title: "Items liberado de prueba pisa del area de Matematica", text: "16 - Estatura" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1243-JS/index.html", title: "Items liberado de prueba pisa del area de Matematica", text: "17 - Que coche" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1224-JS/index.html", title: "Items liberado de prueba pisa del area de Matematica", text: "18 - Barco de vela" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1212-JS/index.html", title: "Items liberado de prueba pisa del area de Matematica", text: "19 - La ciclista" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-M1206-JS/index.html", title: "Items liberado de prueba pisa del area de Matematica", text: "20 - Bicicleta" },
    { href: "https://proyectodescartes.org/competencias/materiales_didacticos/PISA-REDDescartes-CM010-JS/index.html", title: "Items liberado de prueba pisa del area de Matematica", text: "21 - Graficos" },
    { type: "separator" }, // Separador
    { href: "https://cescarsoporte.github.io/pisa/English/index.html", title: "Items elaborado de prueba pisa del area de lengua extranjera", text: "22 - English" },
    { href: "https://proyectodescartes.org/competencias/", title: "Esta web recoge objetos de aprendizaje interactivos cuyo objetivo es la formación y evaluación competencial. Sus contenidos se basan en las unidades liberadas de PISA.", text: "PROYECTO DESCARTES" },
    { href: "https://pisa2022-questions.oecd.org/", title: "Contenidos basado en las unidades liberadas de PISA.", text: "UNIDADES LIBERADAS DE PISA" }
  ];

  const aleksLinks = [
    { href: "https://www.youtube.com/watch?v=K1u8bKx13ok", title: "ALEKS | ¿Cómo funciona?", text: "VIDEO 1" },
    { href: "https://www.youtube.com/watch?v=B0rAd0QQgK8", title: "ALEKS | ¿Cómo funciona una Verificación de Conocimientos?", text: "VIDEO 2" },
    { href: "https://latam.aleks.com/", title: "Pagina principal de ALEKS", text: "IR A ALEKS" },
    { href: "https://docs.google.com/spreadsheets/d/1Uk5NTB6y1xGl4EZV4ts_xGxXcNiwP2EaUkcTw16q_YI/edit#gid=0", title: "Encuesta aleks", text: "ENCUESTA" }
  ];

  const otrosLinks = [
    { href: "https://www.elegircarrera.net/test-vocacional/", title: "Averigua en 5 minutos que estudios son los mas adecuado para ti", text: "Test Vocacional" },
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
            <AccordionItem id="1" title="Propuestas Coursera" links={propuestasCourseraLinks} />
            <AccordionItem id="2" title="SMV" links={smvLinks} />
            <AccordionItem id="3" title="ENGLISH" links={sapceLinks} />
            <AccordionItem id="4" title="PRUEBA 2025" links={prueba2025Links} />
            <AccordionItem id="5" title="PISA 2025" links={pisaLinks} />
            <AccordionItem id="6" title="Aleks" links={aleksLinks} />
            <AccordionItem id="7" title="Otros Sitios" links={otrosLinks} />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sitios;