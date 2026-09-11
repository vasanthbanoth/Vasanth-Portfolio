import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
            <div className="flex items-center gap-1.5 h-12">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                        animate={{
                            height: ["20%", "100%", "20%"],
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                        style={{
                            height: "20%" // Initial height
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
