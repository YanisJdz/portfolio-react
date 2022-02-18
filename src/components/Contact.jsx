export default function Contact() {
  // This component if fine, but you could use pure CSS to achieve the same effect withouth making nested divs.
  return (
    <section
      id="contact"
      className="container-fluid"
      style={{ backgroundColor: "#525252" }}
    >
      <div className="container">
        <div className="row">
          <h2 className="col-12">Contact</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            Here are my contact informations if you are interested.
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <a  href="mailto:yanisjdz@outlook.fr">
              <i className="fas fa-envelope m-1"></i>
                yanisjdz@outlook.fr
              </a>
            </div>
            <div className="row text-dark">
              <a href="tel:+33634992739">
              <i className="fas fa-phone-square m-1"></i>
                +33(0) 6 34 99 27 39
              </a>
            </div>
            <div className="row text-dark">
              <a
              
                href="http://maps.google.com/?q=Paris, France" target="_blank"
              >
              <i className="fas fa-map-marker-alt m-1"></i>
                Paris, France
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
