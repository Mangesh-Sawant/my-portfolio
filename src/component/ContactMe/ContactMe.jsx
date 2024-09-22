import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../../assets/email-sent-animation.json'; // Adjust the path as needed
import { IconPhone, IconMapPin, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';
import Button from "../../library/Button/Button.jsx";

const ContactMe = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showLottie, setShowLottie] = useState(false);

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

        emailjs.sendForm('service_h034n3m', 'template_fr9xl89', form.current, 'J5FEtBjmVxB2-5DPu')
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setShowLottie(true);
                form.current.reset();
                setTimeout(() => setShowLottie(false), 3000); // Hide Lottie after 3 seconds
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleClick = () => {
        window.open('https://www.linkedin.com/in/mangesh-sawant-47554024a/', "_blank")
    };

    return (
        <div id="contact" className="bg-primary mb-12 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-accent-primary mb-12">Get in Touch</h1>
                <div className="bg-secondary rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <IconMail className="text-accent-primary mr-3" size={24}/>
                                    <span className="text-primary">mangeshsawant2077@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <IconPhone className="text-accent-primary mr-3" size={24}/>
                                    <span className="text-primary">+91 7709626277</span>
                                </div>
                                <div className="flex items-center">
                                    <IconMapPin className="text-accent-primary mr-3" size={24}/>
                                    <span className="text-primary">Pune, India</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button variant="outline"
                                        size="large"
                                        onClick={handleClick}>
                                    <div className="flex gap-2 whitespace-nowrap items-center w-full justify-center">
                                        Connect On <IconBrandLinkedin className="mr-2" size={24}/>
                                    </div>
                                </Button>
                            </div>
                        </div>

                        <div className="md:w-1/2 bg-secondary p-6 md:p-8 relative">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-4">
                                    <label htmlFor="from_name"
                                           className="block text-sm font-medium text-primary mb-2">Name</label>
                                    <input type="text" id="from_name" name="from_name"
                                           className="w-full px-3 py-2 bg-primary text-secondary border border-accent-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                           required/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="reply_to"
                                           className="block text-sm font-medium text-primary mb-2">Email</label>
                                    <input type="email" id="reply_to" name="reply_to"
                                           className="w-full px-3 py-2 bg-primary text-secondary border border-accent-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                           required/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message"
                                           className="block text-sm font-medium text-primary mb-2">Message</label>
                                    <textarea id="message" name="message" rows="4"
                                              className="w-full px-3 py-2 bg-primary text-secondary border border-accent-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                              required></textarea>
                                </div>
                                <Button
                                    type="submit"
                                    variant="outline"
                                    size="large"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Email'}
                                </Button>
                                {submitStatus === 'error' && (
                                    <p className="mt-4 text-red-600 absolute text-base -bottom-3 right-4">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showLottie && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-64 h-64">
                        <Lottie
                            animationData={successAnimation}
                            loop={false}
                            autoplay={true}
                            onComplete={() => setShowLottie(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactMe;