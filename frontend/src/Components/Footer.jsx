/* 

import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/mylogo.png'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div container className='border border-t-8 border-teal-500' >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link to="/" className='self-center whitespace-nowrap text-lg 
        sm:text-xl font-semibold dark:text-white ' >
             <img className='w-60' src={mylogo} alt="" />
        </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title='About'/>
            <Footer.LinkGroup col>
              <Footer.Link 
              href='/contact'
              target=''
              rel='noopener noreferrer'>
                Contact
              </Footer.Link>
              <Footer.Link 
              href='/about'
              target=''
              rel='noopener noreferrer'>
                About us
              </Footer.Link>  
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Follow us'/>
            <Footer.LinkGroup col>
              <Footer.Link 
              href='http://www.github.com/amanydv11'
              target='_blank'
              rel='noopener noreferrer'>
                Github
              </Footer.Link>
              <Footer.Link 
              href='https://www.linkedin.com/in/aman-singh-890580205/'
              target='_blank'
              rel='noopener noreferrer'>
                Linkdin
              </Footer.Link>  
            </Footer.LinkGroup>
            </div>

            <div>
            <Footer.Title title='Legal'/>
            <Footer.LinkGroup col>
              <Footer.Link 
              href='/privacy'
             >
                Privacy Policy 
              </Footer.Link>
              <Footer.Link 
              href='/terms'
             >
                Terms &amp; Conditions
              </Footer.Link>  
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by="Eduglint" year={new Date().getFullYear()}/>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/share/14FPpNvVj9/?mibextid=LQQJ4d' target='_blank' icon={FaFacebook}/>
            <Footer.Icon href='https://www.instagram.com/i.m.aman24/profilecard/?igsh=MWxlZGhqNHJpOHZ3MQ==' target='_blank'  icon={FaInstagram}/>
            <Footer.Icon href='https://x.com/amanyad4215613?s=21' target='_blank'  icon={FaTwitter}/>
            <Footer.Icon href='http://www.github.com/amanydv11' target='_blank'  icon={FaGithub}/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
*/
import React from 'react'
import { FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      
      <footer className="bg-white py-5 border-t-2 border-gray-300">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Support</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Centre</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">MyCover</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Anti-discrimination</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Disability support</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Cancellation options</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Report neighbourhood concern</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Hosting</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">List your Property</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">AirCover for Hosts</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Hosting resources</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Community forum</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Hosting responsibly</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Find a co-host</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">MyHostel</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Newsroom</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">New features</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Investors</a></li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className='text-gray-400'>&copy;{new Date().getFullYear()} MyHostel, Inc. &middot; <a href="#" className="hover:underline">Privacy</a> &middot; <a href="#" className="hover:underline">Terms</a> &middot; <a href="#" className="hover:underline">Sitemap</a> &middot; <a href="#" className="hover:underline">Company details</a></p>
                            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">English (IN)</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">&#8377; INR</a>
                                <a href="https://www.facebook.com/share/14FPpNvVj9/?mibextid=LQQJ4d" className='rounded-none' target='_blank'><FaFacebook/></a>
                                <a href='https://www.instagram.com/i.m.aman24/profilecard/?igsh=MWxlZGhqNHJpOHZ3MQ==' target='_blank' ><FaInstagram/></a>
                                <a href="https://x.com/amanyad4215613?s=21" target='_blank'><FaTwitter/></a>
                            </div>
                        </div>
                    </div>
                </footer>
    </div>
  )
}

export default Footer
