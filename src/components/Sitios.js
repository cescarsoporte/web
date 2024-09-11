import React from 'react';

const Sitios = () => {
      return(
            <div className="w-auto">
            <h5>SITIOS DE INTERES</h5>
            <ul className="bg-white px-1 shadow-lg text-start">
                <li>            <div id="accordion-2" className="accordion" role="tablist">
      <div className="accordion-item">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed px-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-2 .item-1"
            aria-expanded="true"
            aria-controls="accordion-2 .item-1"
          >
            Aleks
          </button>
        </h2>
        <div
          className="accordion-collapse collapse item-1"
          role="tabpanel"
          data-bs-parent="#accordion-2"
        >
          <div className="">
                   <ul className="px-1 text-start">
                   <li><a href="https://www.youtube.com/watch?v=K1u8bKx13ok"                                                     target="_blank" title="ALEKS | ¿Cómo funciona?">VIDEO 1</a></li>
                    <li><a href="https://www.youtube.com/watch?v=B0rAd0QQgK8"                                                     target="_blank" title="ALEKS | ¿Cómo funciona una Verificación de Conocimientos?">VIDEO 2</a></li>
                    <li><a href="https://latam.aleks.com/"                                                                        target="_blank" title="Pagina principal de ALEKS">IR A ALEKS</a></li>
                    <li><a href="https://docs.google.com/spreadsheets/d/1Uk5NTB6y1xGl4EZV4ts_xGxXcNiwP2EaUkcTw16q_YI/edit#gid=0"  target="_blank" title="Encuesta aleks">ENCUESTA</a></li>
                   </ul>                
          </div>
        </div>
      </div>
      </div></li>
                <li><a href="https://www.canva.com/" target="_blank" title="">Canva</a></li>	  
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
                <li><a href="https://quizizz.com/join/" target="_blank" title="es una web/app gratuita que permite crear cuestionarios online de manera lúdica y divertida, que los estudiantes pueden responder de tres maneras distintas: En un juego en directo, como tareas, o de manera individual.">Quizizz</a></li>
                <li><a href="https://dle.rae.es/" target="_blank" title="El Diccionario de la lengua española es la obra lexicográfica de referencia de la Academia. Es fruto de la colaboración de las veintidós corporaciones integradas en la Asociación de Academias de la Lengua Española (ASALE).">Real Academia Española</a></li>
                <li><a href="https://www.thatquiz.org/es/" target="_blank" title="Herramienta web, que nos permite plantear exámenes, o actividades, para realizarlos online, permitiendo conocer los resultados de dicha evaluación instantáneamente.">that quiz</a></li>
                <li><a href="https://www.uptodown.com/android" target="_blank" title="Es un marketplace centrado en la distribución de software de escritorio y aplicaciones móviles.">Uptodown</a></li>
                <li><a href="https://es.wikipedia.org/wiki/Wikipedia:Portada" target="_blank" title="La enciclopedia de contenido libre.">Wikipedia</a></li>
                <li><a href="https://wordwall.net/" target="_blank" title="crear juegos interactivos y materiales impresos para sus alumnos. ">Wordwall</a></li>
                <li><a className="btn btn-primary shadow" href="https://ee.kobotoolbox.org/x/CUbATOVh" target="_blank" title="">Aplicacion de PreTest</a></li>
            </ul>
        </div>
      );
}

export default Sitios;