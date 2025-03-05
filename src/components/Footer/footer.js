// Footer.js
import React from 'react';

const Footer = () => {
    const footerNavs = [
        {
            href: 'javascript:void(0)',
            name: 'Terms'
        },
        {
            href: 'javascript:void(0)',
            name: 'License'
        },
        {
            href: 'javascript:void(0)',
            name: 'Privacy'
        },
        {
            href: 'javascript:void(0)',
            name: 'About us'
        }
    ];

    return (
        <footer className="pt-10  bg-custom-pink">
            <div className="max-w-screen-xl mx-auto px-5 text-white md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    
                    <p>
                        From Skilled Hands to Your Home,
                        <br />
                        Handmade with Love, Delivered with Care
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <a href="Home" className="block py-2 px-4 text-center text-custom-copper font-medium bg-black-600 border border-custom-copper duration-150 hover:border-black-900 active:bg-black-9700 rounded-lg shadow-lg hover:shadow-none">
                            Let's View
                        </a>
                       
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© Lance Kaluhi 2024. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <li key={idx} className="text-white hover:text-gray-500 duration-150">
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
