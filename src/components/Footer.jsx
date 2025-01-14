import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div data-aos="fade-right">
          <h2 className="text-xl font-bold mb-4">Physiocare</h2>
          <p className="text-sm">
            Physiocare offers high-quality physiotherapy services at your convenience.
            Contact us today to get the care you deserve!
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services/neurological" className="hover:text-teal-300 transition-all">
                Neurological Physiotherapy
              </Link>
            </li>
            <li>
              <Link to="/services/orthopaedic" className="hover:text-teal-300 transition-all">
                Orthopaedic Physiotherapy
              </Link>
            </li>
            <li>
              <Link to="/services/sports-injury" className="hover:text-teal-300 transition-all">
                Sports Injury Physiotherapy
              </Link>
            </li>
            <li>
              <Link to="/services/post-surgery" className="hover:text-teal-300 transition-all">
                Post-Surgery Physiotherapy
              </Link>
            </li>
            <li>
              <Link to="/services/pediatric" className="hover:text-teal-300 transition-all">
                Pediatric Physiotherapy
              </Link>
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about-us" className="hover:text-teal-300 transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-teal-300 transition-all">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-teal-300 transition-all">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/book-appointment" className="hover:text-teal-300 transition-all">
                Book An Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div data-aos="fade-left" data-aos-delay="300">
          <h2 className="text-xl font-bold mb-4">24/7 Support</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <span>physiocare290@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>+977 9841675370</span>
              <span>+977 9848758698</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              <span>Kupondol,Lalitpur, Nepal</span>
            </li>
          </ul>
          <a
            href="#"
            className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
          >
            Book An Appointment
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-teal-600 mt-8 pt-4 text-center text-sm" data-aos="fade-up">
        © 2025 Physiocare. All Rights Reserved. Designed by <span className="font-bold">Clouds Nepal Web</span>.
      </div>
    </footer>
  );
};

export default Footer;
