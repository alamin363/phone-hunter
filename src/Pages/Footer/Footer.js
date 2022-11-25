import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="footer m-10">
    <div>
      <span className="footer-title">Services</span>
      <Link to="/" className="link link-hover">
        Samsung
      </Link>
      <Link to="/" className="link link-hover">
        Apple
      </Link>
      <Link to="/" className="link link-hover">
        Huawei
      </Link>
      <Link to="/" className="link link-hover">
        Lg
      </Link>
    </div>
    <div>
      <span className="footer-title">Company</span>
      <Link to="/" className="link link-hover">
        About us
      </Link>
      <Link to="/" className="link link-hover">
        Contact
      </Link>
      <Link to="/" className="link link-hover">
        Jobs
      </Link>
      <Link to="/" className="link link-hover">
        Press kit
      </Link>
    </div>
    <div>
      <span className="footer-title">Legal</span>
      <Link to="/" className="link link-hover">
        Terms of use
      </Link>
      <Link to="/" className="link link-hover">
        Privacy policy
      </Link>
      <Link to="/" className="link link-hover">
        Cookie policy
      </Link>
    </div>
  </footer>
  <div className="text-center mt-10">
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
   </>
  );
};

export default Footer;