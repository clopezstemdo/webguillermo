import "../styles/legal.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AvisoLegal() {
  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);


  return (
    <>
      {/* HERO */}
      <section className="legal-hero">
          <h1>Aviso legal</h1>

          <p>
            Información legal y condiciones de uso del sitio web.
          </p>
        
      </section>

      {/* CONTENIDO LEGAL */}
      <main className="legal-content">

        <p>
        En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y del Comercio Electrónico
        (LSSI-CE), se informa de los siguientes datos:
      </p>

        
<h2>1. Datos del titular del sitio web</h2>
      <p><strong>Titular del sitio web:</strong> Guillermo Expósito Paulano</p>
      <p><strong>NIF:</strong> 77373321X</p>
      <p>
        <strong>Actividad:</strong> Prestación de servicios profesionales de
        criminología, análisis de casos y asesoramiento técnico.
      </p>
      <p>
        <strong>Dirección postal:</strong> Calle San Joaquín, 2 – 45600 Talavera
        de la Reina (Toledo)
      </p>
        <p><strong>Correo electrónico de contacto:</strong> guillermoexpositocriminologo@gmail.com</p>
        <p><strong>Teléfono de contacto:</strong> +34 624 96 92 20 </p>



      <h2>2. Objeto del sitio web</h2>
      <p>
        El presente sitio web tiene como finalidad ofrecer información sobre los
        servicios profesionales prestados por el titular, así como facilitar el
        contacto con personas interesadas en los mismos.
      </p>



      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso, navegación y uso del presente sitio web implica la aceptación
        expresa y sin reservas de las presentes condiciones de uso. El usuario se
        compromete a hacer un uso adecuado de los contenidos y servicios,
        conforme a la legislación vigente, la buena fe y el orden público.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web, incluyendo textos, imágenes,
        diseños, logotipos, archivos, estructuras y demás elementos, se
        encuentran protegidos por la normativa vigente en materia de propiedad
        intelectual e industrial, siendo titularidad del responsable del sitio
        web o de terceros autorizados. Queda prohibida su reproducción,
        distribución o modificación sin la autorización expresa del titular.
      </p>


      <h2>5. Responsabilidad</h2>
      <p>
        El titular del sitio web no se hace responsable del uso indebido que los
        usuarios puedan realizar de la información contenida en el mismo, ni de
        los daños o perjuicios que pudieran derivarse del acceso o uso de la web.
      </p>
      <p>
        Asimismo, el titular no garantiza la inexistencia de errores en el acceso
        al sitio web, en su contenido, ni que éste se encuentre actualizado,
        aunque empleará todos los medios razonables para evitarlos, corregirlos o
        actualizarlos.
      </p>


      <h2>6. Enlaces a terceros</h2>
      <p>
        El sitio web puede incluir enlaces a páginas web de terceros, cuyos
        contenidos son ajenos al titular. En ningún caso se asumirá
        responsabilidad alguna por los contenidos, informaciones o servicios que
        pudieran aparecer en dichos sitios enlazados, ni por los resultados que
        puedan derivarse de su acceso.
      </p>


      <h2 id="proteccion-datos">7. Protección de datos</h2>
      <p>
        Guillermo Expósito Paulano trata la información que le facilita con el fin de prestarle el servicio solicitado 
        o enviare la información requerida. Los datos proporcionados se conservarán mientras no nos solicite el cese 
        de la actividad. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. 
        Usted tiene derecho a obtener información sobre si Guillermo Expósito Paulano está tratando sus datos personales, 
        por lo que puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de datos y oposición y 
        limitación a su tratamiento ante Guillermo Expósito Paulano, Calle San Joaquín, 2 - 45600 Talavera de la Reina 
        (Toledo) o en la dirección electrónica guillermoexpositocriminologo@gmail.com, identificándose suficientemente 
        en su solicitud por medios electrónicos o, en su defecto, mediante solicitud debidamente firmada. No obstante, 
        si el responsable del tratamiento tuviese dudas razonables en relación con la identidad de la persona física 
        que cursa la solicitud podrá solicitar que se facilite información adicional necesaria para confirmar su identidad. 
        Asimismo, y especialmente si considera que no ha obtenido satisfacción plena en el ejercicio de sus derechos, podrá 
        presentar una reclamación ante la autoridad nacional de control dirigiéndose a estos efectos a la Agencia Española 
        de Protección de Datos, C/ Jorge Juan, 6 – 28001 Madrid. 
      </p>


      <h2>8. Política de cookies</h2>
      <p>
        Este sitio web no utiliza cookies propias ni de terceros para recoger
        información personal del usuario. Únicamente se emplean cookies técnicas
        necesarias para el correcto funcionamiento del sitio web, que no
        requieren el consentimiento del usuario conforme a la normativa vigente.
      </p>
      <p>
        En caso de que en el futuro se incorporen servicios externos que utilicen
        cookies, se informará debidamente al usuario y se solicitará el
        correspondiente consentimiento.
      </p>



      <h2>9. Medidas de seguridad</h2>
      <p>
        El titular del sitio web adopta las medidas técnicas y organizativas
        necesarias para garantizar la seguridad, integridad y confidencialidad
        de los datos personales, evitando su alteración, pérdida, tratamiento o
        acceso no autorizado.
      </p>


        <h2>10. Sobre el formulario de contacto</h2>
        <p>
        Los datos personales recogidos a través del formulario de contacto 
serán tratados con la finalidad de
atender las consultas realizadas por el usuario.

La base legal para el tratamiento de los datos es el consentimiento
expreso del usuario al enviar el formulario.

Para el envío de los formularios se utiliza el servicio EmailJS,
que actúa como encargado del tratamiento, limitándose a procesar
los datos conforme a las instrucciones del responsable y sin utilizarlos
para fines propios.

EmailJS puede tratar los datos desde servidores ubicados fuera
del Espacio Económico Europeo, aplicando las garantías adecuadas
conforme a la normativa de protección de datos.
        </p>


      <h2>11. Comunicaciones electrónicas</h2>
      <p>
        No se enviarán comunicaciones comerciales por medios electrónicos sin el
        consentimiento previo del usuario, conforme al artículo 21 de la
        LSSI-CE.
      </p>


      <h2>12. Menores de edad</h2>
      <p>
        Los servicios ofrecidos a través del presente sitio web no están
        dirigidos a menores de 14 años. No se recopilarán datos personales de
        menores sin el consentimiento previo de padres o tutores legales.
      </p>


      <h2>13. Legislación aplicable y jurisdicción</h2>
      <p>
        El presente aviso legal se rige por la legislación española. Para la
        resolución de cualquier controversia que pudiera derivarse del acceso o
        uso del sitio web, las partes se someten a los juzgados y tribunales que
        correspondan conforme a derecho.
      </p>

      </main>
    </>
  );
}