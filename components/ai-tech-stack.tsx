import React from "react";
import {
    SiPytorch, SiTensorflow, SiKeras, SiScikitlearn,
    SiOpenai, SiHuggingface,
    SiPandas, SiNumpy, SiApachespark, SiApachekafka,
    SiAmazon, SiGooglecloud, SiGooglegemini,
    SiDocker, SiKubernetes, SiMlflow
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { Bot, Brain, Database, ArrowRight } from "lucide-react";

const techCategories = [
    {
        title: "AI & ML Frameworks",
        description: "Deep Learning, Neural Networks, Computer Vision Models",
        techs: [
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Keras", icon: SiKeras, color: "#D00000" },
            { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        ]
    },
    {
        title: "LLMs & Generative AI",
        description: "Large Language Models, NLP, Prompt Engineering, RAG",
        techs: [
            { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
            { name: "Gemini API", icon: SiGooglegemini, color: "#8E75B2" },
            { name: "Llama 3", icon: Brain, color: "#0467DF" },
            { name: "LangChain", icon: Bot, color: "#1C3C3C" },
        ]
    },
    {
        title: "Data Engineering & MLOps",
        description: "Data Processing, Pipelines, Model Deployment & Monitoring",
        techs: [
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
            { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
            { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
            { name: "AWS SageMaker", icon: SiAmazon, color: "#FF9900" },
            { name: "Azure AI", icon: VscAzure, color: "#0078D4" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
        ]
    }
];

export default function AiTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-left mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Cutting-Edge <br />
                        <span className="text-[#6366f1]">AI Technology Stack</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        We leverage the most advanced AI frameworks and models to build intelligent, scalable, and future-proof solutions.
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
