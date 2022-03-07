function Contact() {
  return (
    <section className="contact" id="contact">
      <h4 className="contact__title">Contacto:</h4>

      <ul className="contact__icons">
        <li className="contact__icons--each">
          <a
            href="https://github.com/AlejandraMejiaP"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="contact__icons--each">
          <a
            href="https://www.linkedin.com/in/alejandra-mejia-p/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="contact__icons--each">
          <a
            href="https://twitter.com/Alejandraemepe"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="contact__icons--each">
          <a href="mailto:alejandramejiaperez0@gmail.com">
            <i class="fa-solid fa-paper-plane"></i>
            <i class="fa-solid fa-badge-check"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
