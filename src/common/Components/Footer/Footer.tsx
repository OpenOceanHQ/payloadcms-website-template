import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

import Image from 'next/image';

function Footer({
  items,
  socialProfiles,
  logo,
  storeName,
  copyright,
}: {
  items: string[];
  socialProfiles: any;
  logo: any;
  storeName: any;
  copyright: string;
}) {
  return (
    <>
      <div className="bg-white border-t py-14 px-4 mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center justify-center">
          {items.length > 0 && (
            <div className="flex-[3]">
              <div className="flex flex-col items-center justify-center md:items-start">
                <header className="text-xl font-bold mb-4">Links</header>
                <ul className="flex items-center flex-wrap gap-4 mt-2">
                  {items.map((item, idx) => (
                    <li key={'footer-top-link' + idx}>
                      <a href={item} className="link link-hover">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex-[5]">
            <div
              className={`container flex flex-col ${
                items && items.length > 0 ? 'items-end' : 'items-center'
              } justify-center  h-full gap-2`}
            >
              <div className={'flex flex-wrap gap-4 items-center'}>
                {socialProfiles.email && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={`mailto:${socialProfiles.email}`}
                  >
                    <MdEmail className="w-6 h-6" />
                  </a>
                )}
                {socialProfiles.phone && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={`tel:${socialProfiles.phone}`}
                  >
                    <MdPhone className="w-6 h-6" />
                  </a>
                )}
                {socialProfiles.facebook && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={socialProfiles.facebook}
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                )}
                {socialProfiles.twitter && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={socialProfiles.twitter}
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                )}
                {socialProfiles.instagram && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={socialProfiles.instagram}
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                )}
                {socialProfiles.linkedIn && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={socialProfiles.linkedIn}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                )}
                {socialProfiles.youtube && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={socialProfiles.youtube}
                  >
                    <FaYoutube className="w-6 h-6" />
                  </a>
                )}
                {socialProfiles.pinterest && (
                  <a
                    className={
                      'text-gray-500 hover:text-gray-800 cursor-pointer w-8 h-8 flex items-center justify-center'
                    }
                    href={socialProfiles.pinterest}
                  >
                    <FaPinterest className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            'container mx-auto my-2 flex flex-row gap-3 items-center justify-center py-5 mt-5'
          }
        >
          {logo && (
            <div className={'block relative h-8'}>
              <Image src={logo} alt="Logo" className={`h-full w-full`} width={100} height={100} />
            </div>
          )}
          {storeName && <h3 className={'text-xl font-bold'}>{storeName}</h3>}
        </div>
        {copyright && <p className="text-center">{copyright}</p>}
      </div>
    </>
  );
}

export default Footer;
