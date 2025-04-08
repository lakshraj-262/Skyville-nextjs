"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';
import { WhatsappHeader } from "../assets";
import Image from 'next/image';
const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsApp = () => {
        window.open('https://wa.me/9468578138', '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:+919468578138';
    };

    return (
        <div className="fixed bottom-5 z-50 right-5 flex items-center shadow-lg">
            {/* Contact options on the left */}
            <div className="relative flex z-10">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            transition={{ 
                                duration: 0.3,
                                ease: "easeOut",
                                staggerChildren: 0.1
                            }}
                            className="flex gap-4"
                        >
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={handleWhatsApp}
                                className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                aria-label="Contact on WhatsApp"
                            >
                                <Image src={WhatsappHeader} alt="WhatsApp" className="w-7 h-7 md:w-8 md:h-8" />
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={handleCall}
                                className="bg-color-1 p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300 flex items-center justify-center"
                                aria-label="Call us"
                            >
                                <Phone className="w-6 h-6 md:w-8 md:h-7 text-white" />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Toggle button on the right */}
            <div className="relative z-20 ml-4">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-color-1 p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300"
                    aria-label={isOpen ? "Close contact options" : "Open contact options"}
                >
                    {isOpen ? (
                        <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    ) : (
                        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default FloatingContact; 