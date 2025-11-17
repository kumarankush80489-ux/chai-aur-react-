import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                       
                        

                        <div className="text-gray-700 overflow-y-auto max-h-96">
                            <p>
                                Your privacy is important to us. This Privacy Policy explains how
                                we collect, use, and protect your personal information when you use
                                our website.
                            </p>
                            
                            
                        </div>
                        

                        <div className="flex justify-center sm:justify-start text-gray-700">
                            <p>keeping it simple, consistent, and easy to navigate, 
                                and legal requirements such as having a privacy policy, 
                                terms and conditions, and a cookie consent notice. For design, 
                                ensure the site is responsive and uses clear, legible fonts, 
                                while for content, write clearly, avoid jargon, 
                                and ensure it's search engine-friendly. </p>

                            
                        </div> 
                       
                        
                    </div>
                </div>
            </aside>
        </div>
        

    );
}
