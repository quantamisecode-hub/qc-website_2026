import * as motion from "framer-motion/client";
import Image from "next/image";

// Import Logos
import acrLogo from "@/public/Clients-Logos/ACRLogoImage.png";
import becilLogo from "@/public/Clients-Logos/BECILLogoImage.png";
import freyaLogo from "@/public/Clients-Logos/FreyaLogoImage.png";
import lavendelLogo from "@/public/Clients-Logos/LavendelConsultingLogoImage.png";
import mumbaiMonorailLogo from "@/public/Clients-Logos/MumbaiMonorailLogoImage.png";
import tataLogo from "@/public/Clients-Logos/TataAdvanceSystemLogoImage.png";
import toyotaLogo from "@/public/Clients-Logos/ToyotaLogoImage.png";

/**
 * size = max height of logo
 * Adjust individually until visually balanced
 */
const clients = [
    { name: "Toyota", logo: toyotaLogo, size: "60px" },
    { name: "Tata Advanced Systems", logo: tataLogo, size: "60px" },
    { name: "Mumbai Monorail", logo: mumbaiMonorailLogo, size: "80px" },
    { name: "BECIL", logo: becilLogo, size: "70px" },
    { name: "ACR", logo: acrLogo, size: "65px" },
    { name: "Freya", logo: freyaLogo, size: "55px" },
    { name: "Lavendel Consulting", logo: lavendelLogo, size: "75px" },
];

export default function TrustedBy() {
    return (
        <section className="pt-0 bg-[#6267f1] h-[140px] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-1 pt-3">
                    <p className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                        Trusted by Startups & Enterprises
                    </p>
                </div>

                <div className="relative w-full">
                    <div className="flex w-max pt-2 animate-marquee items-center hover:[animation-play-state:paused]">

                        {/* First Set */}
                        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
                            {clients.map((client, index) => (
                                <div key={`logo-1-${index}`} className="flex items-center justify-center shrink-0">
                                    <div className="relative w-auto min-w-[150px] sm:min-w-[200px] flex items-center justify-center filter brightness-0 invert opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer">
                                        <Image
                                            src={client.logo}
                                            alt={`${client.name} Logo`}
                                            height={parseInt(client.size)}
                                            style={{ maxHeight: client.size, height: 'auto' }}
                                            className="w-auto object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate Set */}
                        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
                            {clients.map((client, index) => (
                                <div key={`logo-2-${index}`} className="flex items-center justify-center shrink-0">
                                    <div className="relative w-auto min-w-[150px] sm:min-w-[200px] flex items-center justify-center filter brightness-0 invert opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer">
                                        <Image
                                            src={client.logo}
                                            alt={`${client.name} Logo`}
                                            height={parseInt(client.size)}
                                            width={300}
                                            style={{ maxHeight: client.size, height: 'auto' }}
                                            className="w-auto object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
