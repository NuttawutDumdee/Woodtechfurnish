'use client';

import { useEffect } from 'react';

export default function FacebookPageEmbed() {
    useEffect(() => {
        if (!document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v17.0';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section className="max-w-4xl mx-auto my-12 p-6 bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-kanit text-center drop-shadow-sm">
                ติดตามเราบน Facebook
            </h2>

            <div
                className="fb-page mx-auto rounded-xl overflow-hidden border border-gray-300 shadow-md"
                data-href="https://www.facebook.com/ExclusiveFurnitureCOLLECTION/"
                data-tabs="timeline"
                data-width="500"
                data-height="700"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                style={{ minWidth: 320 }}
            />
        </section>
    );
}
