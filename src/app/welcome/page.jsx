'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Page = () => {
    const form = useRef();
    async function sendWelcomeEmail(formData) {

        const serviceID = 'service_9gtnauf'
        const templateID = 'template_vqt22fi'
        const publicKey = 'lRsEVNEUzqsCVFhDF'
        const name = formData.get('fullName')
        const email = formData.get('email')

        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <form ref={form} action={sendWelcomeEmail}>
                <div className="p-2 m-2">
                    <input
                        name="from_name"
                        className="w-full max-w-xs input input-bordered"
                        type="text"
                        placeholder='Full Name'
                    />
                </div>
                <div className="p-2 m-2">
                    <input
                        name="email"
                        className="w-full max-w-xs input input-bordered"
                        type="email"
                        placeholder='Email'
                    />
                </div>
                <div className="p-2 m-2">
                    <button className="btn btn-primary">Send Email  </button>
                </div>

            </form>

        </div>
    )
}

export default Page
