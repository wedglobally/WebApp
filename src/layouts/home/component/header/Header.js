import React from 'react'
import Logo from './components/logo/Logo'
import Menu from './components/navigation/Menu'
import Navigation from './components/navigation/Navigation'

import '../header/Header.css'
import WedGloballyMenu from './menu'

const menuItems = [
    { label: 'Home', href: '/WedGlobally/', className: 'active' },
    { label: 'Our Products', href: '/wedglobally', className: 'active' },
    { label: 'Timeline', href: '#weddingTimeline' },
    { label: 'Gallery', href: '#weddingGallery' },
    {
      label: 'About Us',
      subMenu: [
        { label: 'Vision & Purpose', href: '/WedGlobally/about/vision-purpose' },
        { label: 'Key Journey', href: '/WedGlobally/about/key-journey' },
        { label: 'Key People', href: '/WedGlobally/about/key-people' },
        { label: 'Board of Directors', href: '/WedGlobally/about/board-of-directors' },
        { label: 'Investors', href: '/WedGlobally/about/investors' },
        { label: 'About Us', href: '/WedGlobally/about' },
      ],
    },
    { label: 'Contact Us', href: '/WedGlobally/contactus' },
  ];
export default function WedGloballyHeader() {
    window.onscroll = function (e) {
        const nav = document.querySelector('.navbar')
        // if (window.scrollY > 0) {
        //     nav.classList.add('affix');
        // }
        // if (window.scrollY === 0) {
        //     nav.classList.remove('affix')
        // }
    };
    return (
        <>
         <WedGloballyMenu menuItems={menuItems} />
        </>
    )
}
