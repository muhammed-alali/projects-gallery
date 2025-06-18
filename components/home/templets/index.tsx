"use client";

import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "تصميم متجر إلكتروني",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1074&q=80",
    desc: "تصميم واجهة متجر إلكتروني متكامل مع تجربة مستخدم متميزة",
  },
  {
    id: 2,
    title: "تطبيق توصيل طعام",
    category: "app",
    image:
      "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=687&q=80",
    desc: "تطبيق جوال لتوصيل الطعام مع نظام متكامل للمطاعم والعملاء",
  },
  {
    id: 3,
    title: "موقع شركة تقنية",
    category: "development",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1169&q=80",
    desc: "تصميم وتطوير موقع شركة تقنية مع عرض الخدمات والمشاريع",
  },
  {
    id: 4,
    title: "حملة تسويقية",
    category: "marketing",
    image:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1170&q=80",
    desc: "حملة تسويقية متكاملة لعلامة تجارية جديدة في السوق",
  },
  {
    id: 5,
    title: "واجهة تطبيق بنك",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1171&q=80",
    desc: "إعادة تصميم واجهة تطبيق بنكي لتحسين تجربة المستخدم",
  },
  {
    id: 6,
    title: "نظام إدارة محتوى",
    category: "development",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
    desc: "نظام متكامل لإدارة محتوى المواقع الإلكترونية",
  },
];

const categories = [
  { label: "الكل", value: "all" },
  { label: "تصميم", value: "design" },
  { label: "تطوير", value: "development" },
  { label: "تسويق", value: "marketing" },
  { label: "تطبيقات", value: "app" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          معرض <span className="text-teal-600">أعمالنا</span>
        </h2>

        <Tabs value={activeTab} className="mb-12">
          <TabsHeader
            className="flex  justify-center gap-2"
            indicatorProps={{ className: "bg-teal-600 text-white" }}
          >
            {categories.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className="rounded-full px-6 py-2 font-semibold text-gray-700 transition-all hover:bg-teal-100"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel
              value={activeTab}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-500"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[320px] object-cover transform group-hover:scale-105 duration-500 transition-transform"
                  />
                  <div className="absolute  inset-0 bg-teal-600 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center items-center text-white p-4 transition-opacity">
                    <div className="translate-y-8  group-hover:translate-y-0 duration-500">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="mb-4">{project.desc}</p>
                      <a
                        href="#"
                        className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-teal-600 duration-500 transition"
                      >
                        عرض التفاصيل
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}
