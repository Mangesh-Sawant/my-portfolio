import React, { useState, useRef, useEffect } from 'react';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';
import Button from "../../library/Button/Button.jsx";

const ContactMe = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        if (submitStatus === 'error') {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 5000); // Hide error message after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log('Form data:', new FormData(form.current));

        emailjs.sendForm('service_h034n3m', 'template_hhk2ykp', form.current, 'Hn_Hb0QbVRWlJHkAF')
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div id="contact" className="bg-primary mb-12 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-accent-primary mb-12">Get in Touch</h1>

                <div className="bg-secondary rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-6 md:p-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <IconMail className="text-accent-primary mr-3" size={24} />
                                    <span className="text-primary">mangeshsawant2077@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <IconPhone className="text-accent-primary mr-3" size={24} />
                                    <span className="text-primary">+91 7709626277</span>
                                </div>
                                <div className="flex items-center">
                                    <IconMapPin className="text-accent-primary mr-3" size={24} />
                                    <span className="text-primary">Pune, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 bg-secondary p-6 md:p-8">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-4">
                                    <label htmlFor="from_name" className="block text-sm font-medium text-primary mb-2">Name</label>
                                    <input type="text" id="from_name" name="from_name" className="w-full px-3 py-2 bg-primary text-secondary border border-accent-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="reply_to" className="block text-sm font-medium text-primary mb-2">Email</label>
                                    <input type="email" id="reply_to" name="reply_to" className="w-full px-3 py-2 bg-primary text-secondary border border-accent-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                                    <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-primary text-secondary border border-accent-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary" required></textarea>
                                </div>
                                <Button
                                    onClick={sendEmail}
                                    variant="outline"
                                    size="large"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                                {submitStatus === 'success' && (
                                    <p className="mt-4 text-accent-primary">Message sent successfully!</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;