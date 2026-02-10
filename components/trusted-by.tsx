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
    { name: "Toyota", logo: toyotaLogo, size: "90px" },
    { name: "Tata Advanced Systems", logo: tataLogo, size: "90px" },
    { name: "Mumbai Monorail", logo: mumbaiMonorailLogo, size: "180px" },
    { name: "BECIL", logo: becilLogo, size: "110px" },
    { name: "ACR", logo: acrLogo, size: "85px" },
    { name: "Freya", logo: freyaLogo, size: "70px" },
    { name: "Lavendel Consulting", logo: lavendelLogo, size: "140px" },
];

export default function TrustedBy() {
    return (
        <section className="pb-10 pt-0 bg-[#6267f1] h-[250px] overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 pt-12">
                    <p className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                        Trusted by Startups & Enterprises
                    </p>
                </div>

                <div className="relative w-full">
                    <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">

                        {/* First Set */}
                        <div className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
                            {clients.map((client, index) => (
                                <div key={`logo-1-${index}`} className="flex items-center justify-center shrink-0">
                                    <div className="relative h-28 w-auto min-w-[150px] sm:min-w-[200px] flex items-center justify-center filter brightness-0 invert opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer">
                                        <Image
                                            src={client.logo}
                                            alt={`${client.name} Logo`}
                                            style={{ maxHeight: client.size }}
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
                                    <div className="relative h-28 w-auto min-w-[150px] sm:min-w-[200px] flex items-center justify-center filter brightness-0 invert opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300 cursor-pointer">
                                        <Image
                                            src={client.logo}
                                            alt={`${client.name} Logo`}
                                            style={{ maxHeight: client.size }}
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
