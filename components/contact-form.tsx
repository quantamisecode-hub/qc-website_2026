"use client";

import { motion } from 'framer-motion';
import RequirementForm from './requirement-form';

export default function ContactForm() {
    return (
        <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <RequirementForm />
        </motion.div>
    );
}
