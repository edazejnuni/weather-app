import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h4>Explore our app</h4>
        <p>Connect with the I-Weather team:</p>
        <div>
          <a href="#!">
            <img alt="sm-icon" className="sm-icon" src="images/fb.png" />
          </a>
          <a href="#!">
            <img alt="sm-icon" className="sm-icon" src="images/ig.png" />
          </a>
          <a href="#!">
            <img alt="sm-icon" className="sm-icon" src="images/tw.png" />
          </a>
          <a href="#!">
            <img alt="sm-icon" className="sm-icon" src="images/lin.png" />
          </a>
        </div>
        <span className="copyright">Copyright &copy; 2022 I-WEATHER</span>
      </div>
    </div>
  );
};

export default Footer;
