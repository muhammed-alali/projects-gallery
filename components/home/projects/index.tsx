// app/components/ProjectsGallery.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Pages from "./pages";

// بيانات المشاريع
const data = [
  {
    id: 1,
    title: "عقارات",
    imageName: "/photo/proje4.png",
    pages: [
      { pageName: "/photo/page2.png" },
      { pageName: "/photo/page1.png" },
      { pageName: "/photo/page3.png" },
    ],
  },
  {
    id: 2,
    title: "التدقيق المستقل",
    imageName: "/photo/proje2.png",
    pages: [
      { pageName: "/photo/page1.png" },
      { pageName: "/photo/page3.png" },
      { pageName: "/photo/page2.png" },
      { pageName: "/photo/page1.png" },
    ],
  },
  {
    id: 3,
    title: "عقارات",
    imageName: "/photo/proje3.png",
    pages: [
      { pageName: "/photo/page2.png" },
      { pageName: "/photo/page1.png" },
      { pageName: "/photo/page3.png" },
      { pageName: "/photo/page2.png" },
    ],
  },
  {
    id: 4,
    title: "التدقيق المستقل",
    imageName: "/photo/proje4.png",
    pages: [
      { pageName: "/photo/page3.png" },
      { pageName: "/photo/page2.png" },
      { pageName: "/photo/page3.png" },
      { pageName: "/photo/page1.png" },
    ],
  },
  {
    id: 5,
    title: "التدقيق المستقل",
    imageName: "/photo/proje5.png",
    pages: [
      { pageName: "/photo/page3.png" },
      { pageName: "/photo/page2.png" },
      { pageName: "/photo/page1.png" },
    ],
  },
];

export default function ProjectsGallery() {
  return (
    <div className="md:container mx-4 md:mx-auto py-[50px] md:py-[60px]">
      {/* العنوان والوصف */}
      <div className="mb-12 text-center mx-auto w-full md:w-[600px]">
        <h1 className="mb-5 text-[25px] md:text-[40px] font-bold">مشاريعنا</h1>
        <p className="!leading-[1.4rem] md:!leading-7 xs:text-sm">
          نعرض لكم مجموعة مختارة من مواقع الويب التي قمنا بتصميمها وتطويرها
          باحترافية عالية. نركز على تقديم تجارب مستخدم سلسة، تصميمات حديثة،
          وأداء تقني قوي يلبي تطلعات عملائنا. تصفح مشاريعنا لاكتشاف تنوع الحلول
          التي قدمناها لمختلف القطاعات والأنشطة التجارية عبر شبكة الإنترنت.
        </p>
      </div>

      {/* الشبكة الخاصة بالمشاريع */}
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="md:mx-auto mb-8">
            {/* صورة المشروع مع هوفر */}
            <div className="group relative w-full h-[400px] md:w-[360px] lg:w-[320px] xl:w-[400px] md:h-[515px] overflow-hidden shadow-cardShadow">
              <Link href={"/"}>
                <Image
                  src={item.imageName}
                  alt={item.title}
                  width={400}
                  height={515}
                  className="object-cover h-[515px] object-top group-hover:object-bottom duration-[4000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10 group-hover:z-10" />
              </Link>

              {/* أيقونة السهم بالوسط */}
              <div className="absolute top-[42%] left-[42%] w-[63px] h-[64px] border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black -z-10 group-hover:z-20 transition-all duration-300">
                <HiArrowNarrowRight className="text-[25px]" />
              </div>
            </div>

            {/* عنوان المشروع والسلايدر */}
            <div className="shadow-cardShadow relative">
              <div className="bg-white w-full md:w-[360px] lg:w-[320px] xl:w-[400px] px-4 py-4">
                <h1 className="text-black text-[17px] font-semibold">
                  {item.title}
                </h1>
              </div>

              {/* عرض الصفحات الخاصة بالمشروع */}
              <div className="!h-[300px]">
                <Pages pages={item.pages} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
