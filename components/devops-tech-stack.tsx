import React from "react";
import {
    SiDocker, SiKubernetes, SiAnsible, SiTerraform,
    SiJenkins, SiGitlab, SiGithubactions, SiCircleci,
    SiPrometheus, SiGrafana, SiDatadog, SiNewrelic,
    SiAmazon, SiGooglecloud,
    SiPython, SiGo, SiGnubash
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { ArrowRight } from "lucide-react";

const techCategories = [
    {
        title: "Containerization & Orchestration",
        description: "Standardizing environments for consistent deployment and scaling.",
        techs: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
            { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
        ]
    },
    {
        title: "CI/CD & Version Control",
        description: "Automating integration and delivery pipelines for speed and reliability.",
        techs: [
            { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
            { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
            { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
            { name: "CircleCI", icon: SiCircleci, color: "#343434" },
        ]
    },
    {
        title: "Monitoring & Observability",
        description: "Real-time insights into system health and performance.",
        techs: [
            { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
            { name: "Grafana", icon: SiGrafana, color: "#F46800" },
            { name: "Datadog", icon: SiDatadog, color: "#632CA6" },
            { name: "New Relic", icon: SiNewrelic, color: "#008C99" },
        ]
    },
    {
        title: "Cloud & Scripting",
        description: "Cloud-native infrastructure and automation scripting.",
        techs: [
            { name: "AWS", icon: SiAmazon, color: "#FF9900" },
            { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
            { name: "Azure", icon: VscAzure, color: "#0078D4" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Go", icon: SiGo, color: "#00ADD8" },
            { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
        ]
    }
];

export default function DevOpsTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-left mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Comprehensive DevOps <br />
                        <span className="text-[#6366f1]">Technology Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        We leverage industry-leading tools to build robust, automated, and secure infrastructure.
                    </p>
                </div>

                <div className="flex flex-col gap-12 lg:gap-16">
                    {techCategories.map((category) => (
                        <div key={category.title} className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start border-b border-slate-100 pb-12 last:border-0 last:pb-0">
                            {/* Left: Category Title */}
                            <div className="lg:col-span-1 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center shrink-0">
                                    <ArrowRight className="text-[#6366f1] w-5 h-5 -rotate-45" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#3A0F67]">{category.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1">{category.description}</p>
                                </div>
                            </div>

                            {/* Right: Tech List */}
                            <div className="lg:col-span-3 flex flex-wrap gap-4">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:bg-slate-50 transition-all duration-300 group cursor-default"
                                    >
                                        <tech.icon
                                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: tech.color }}
                                        />
                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-[#3A0F67] transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
