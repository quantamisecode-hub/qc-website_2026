import { ShieldCheck } from 'lucide-react';

export default function ContactPrivacy() {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 animate-pulse">
                    <ShieldCheck className="w-8 h-8 text-[#10b981]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#3A0F67] mb-4">
                    Your Data Is Safe with Us
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    We follow industry-standard data protection and security practices. All inquiries are handled confidentially and protected under NDA upon request.
                </p>
            </div>
        </section>
    );
}
