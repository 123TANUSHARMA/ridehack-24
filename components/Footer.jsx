'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import {
  FaPhoneAlt,
  FaLinkedin,
  FaSquareFacebook,
  FaGithubSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { socials } from '../constants';
import './Footer.css';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      {/* <div className="footer-gradient" /> */}

      <div
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8 footerMain`}
      >
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          </h4>
          <div
            className="apply-button"
            data-hackathon-slug="hackstreet24"
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4 resp">
            
          
            <div className="font-bold text-[100%] text-white opacity-50 flex flex-row">
              <IoLocationSharp className="text-3xl" />
              <div>
                <p> SmartMed</p>
                
              </div>
            </div>

            <div className="font-bold text-[100%]  text-white opacity-50 contact">
              <div className="flex flex-row gap-3 items-center">
                <FaPhoneAlt />
                <p className='text-[15px]'>
                  Aman Garg:{' '}
                  <a href="tel:+916378432315">+91 63784 32315</a>
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaPhoneAlt />
                <p className='text-[15px]'>
                  Vaibhav Vinayak :{' '}
                  <a href="tel:+91 7761910979">+91 77619 10979</a>
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaPhoneAlt />
                <p className='text-[15px]'>
                  Priyanshu Bansal :{' '}
                  <a href="tel:+91 9024022426">+91 90240 22426</a>
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdEmail />
                <a href="mailto:SmartMed@gmail.com" id="gmail">
                  SmartMed@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col font-bold text-[24px] text-white gap-4">
              
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  // eslint-disable-next-line react/button-has-type
                  <button className="social-btn" key={index}>
                    <a href={social.href} target="_main">
                      <img
                        key={social.name}
                        src={social.url}
                        alt={social.name}
                        className="w-[24px] h-[24px] object-contain cursor-pointer"
                      />
                    </a>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
