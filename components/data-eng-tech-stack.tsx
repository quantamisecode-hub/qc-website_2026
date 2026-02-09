import React from "react";
import {
    SiPython, SiScala, SiApachespark,
    SiSnowflake, SiDatabricks, SiGooglebigquery, SiAmazonredshift,
    SiApachekafka, SiAmazon, SiRabbitmq,
    SiApache, SiDbt, SiPostgresql, SiTableau, SiDotnet
} from "react-icons/si";
import { ArrowRight } from "lucide-react";

const techCategories = [
    {
        title: "Processing & Compute",
        description: "High-performance distributed computing for batch and streaming data.",
        techs: [
            { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
            { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Scala", icon: SiScala, color: "#DC322F" },
        ]
    },
    {
        title: "Data Warehousing",
        description: "Scalable cloud data warehouses for analytics and reporting.",
        techs: [
            { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
            { name: "BigQuery", icon: SiGooglebigquery, color: "#4285F4" },
            { name: "Redshift", icon: SiAmazonredshift, color: "#232F3E" },
        ]
    },
    {
        title: "Ingestion & Streaming",
        description: "Real-time data ingestion and event streaming architectures.",
        techs: [
            { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
            { name: "Kinesis", icon: SiAmazon, color: "#FF9900" },
            { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
            { name: "Fivetran", icon: SiPostgresql, color: "#0071BC" },
        ]
    },
    {
        title: "Orchestration & BI",
        description: "Workflow scheduling and business intelligence visualization.",
        techs: [
            { name: "Airflow", icon: SiApache, color: "#017CEE" },
            { name: "dbt", icon: SiDbt, color: "#FF694B" },
            { name: "Tableau", icon: SiTableau, color: "#E97627" },
            { name: "Power BI", icon: SiDotnet, color: "#F2C811" },
        ]
    }
];

export default function DataEngTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-left mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Modern Data <br />
                        <span className="text-[#6366f1]">Technology Stack</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        We use best-in-class tools to build scalable, reliable, and cost-effective data platforms.
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
