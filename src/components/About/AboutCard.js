import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! Soy <span className="purple">Aritz Jaber</span> de{" "}
            <span className="purple">Bilbao, España</span>.
            <br />
            <br />
            Hace unos años decidí dejar una carrera que no me llenaba y
            apostar por la programación. Desde entonces, he encontrado en el
            software una forma de unir mi curiosidad por entender cómo
            funcionan las cosas con mi deseo de crear algo útil para los
            demás.
            <br />
            <br />
            Empecé como desarrollador freelance, creando soluciones a medida
            para pequeñas empresas, y con el tiempo cofundé{" "}
            <span className="purple">TenBeltz</span>, donde ayudamos a
            negocios a automatizar procesos, reducir trabajo manual y tomar
            decisiones con más claridad gracias a la inteligencia artificial.
            <br />
            <br />
            Más recientemente, he cofundado{" "}
            <span className="purple">Biiak</span> junto a{" "}
            <span className="purple">Óscar Pérez-Muga</span>, un proyecto que
            nace con la misión de aplicar{" "}
            <b className="purple">IA privada</b> al ámbito de la{" "}
            <b className="purple">protección social</b>. Queremos que los
            datos sirvan para cuidar mejor, ayudando a familias y personas en
            programas de apoyo sin perder de vista el enfoque humano.
            <br />
            <br />
            También formo parte de{" "}
            <span className="purple">Irontec</span> como investigador en
            inteligencia artificial, desarrollando soluciones que optimizan la
            comunicación multicanal en entornos empresariales.
            <br />
            <br />
            Me mueve la idea de que la tecnología no solo resuelva problemas,
            sino que{" "}
            <b className="purple">
              permita a las personas centrarse en lo que realmente importa
            </b>
            . Por eso, mi trabajo se basa en unir automatización, datos e
            inteligencia artificial con empatía y propósito.
            <br />
            <br />
            Fuera del trabajo, me gusta seguir aprendiendo y explorando:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Leer sobre ciencia, filosofía y psicología 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Volar drones y descubrir nuevos lugares desde el aire 🚁
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar a juegos de mesa con amigos 🎲
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La tecnología más poderosa es la que mejora la vida de las
            personas."{" "}
          </p>
          <footer className="blockquote-footer">Aritz Jaber</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;