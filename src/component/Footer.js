import React from 'react';

const Footer = () => {
 return <div className="footer-container">
  <div className="social-conatainer">
   <div className="social-icon"><a href="#"><img src="/images/social/facebook.svg" alt="" /></a></div>
   <div className="social-icon"><a href="#"><img src="/images/social/instagram.svg" alt="" /></a></div>
   <div className="social-icon"><a href="#"><img src="/images/social/tiktok.svg" alt="" /></a></div>
   <div className="social-icon"><a href="#"><img src="/images/social/twitter.svg" alt="" /></a></div>
  </div>
  <div className="copyright">Copyrights &copy; 2022</div>
  <div className="footer-pages">
  <div className="page-link">
   <a href="/about">About</a>
   <a href="/privacy">Privacy</a>
   <a href="/contact">Contact</a>
   <a href="/testimonials">Testimonials</a>
   </div>
   <p className="visitor-counter">Visitor Counter: <span>23</span></p>
  </div>
 </div>;
}

export default Footer;