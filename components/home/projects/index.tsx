"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Pages from "./pages";

const data = [
  {
    id: 1,
    title: "عقارات",
    imageName: "/photo/proje4.png",
    link: "https://realty-xi.vercel.app/",
  },
  {
    id: 2,
    title: "مطعم",
    imageName: "/photo/proje2.png",
    link: "https://resturant-brown-sigma.vercel.app/",
  },

  {
    id: 3,
    title: "طلبات",
    imageName: "/photo/proje5.png",
    link: "https://qu-ckeat.vercel.app/",
  },
  {
    id: 4,
    title: "التدقيق المستقل",
    imageName: "/photo/proje1.png",
    link: "https://a-denetim.vercel.app/",
  },
];
// className="object-cover h-[515px] object-top group-hover:object-bottom !duration-[4000ms] "
export default function ProjectsGallery() {
  return (
    <div className="md:container mx-4 md:mx-auto py-[50px] md:py-[60px]">
      <div className="mb-12 text-center mx-auto w-full md:w-[600px]">
        <h1 className="mb-5 text-[25px] md:text-[40px] font-bold text-[#0b0448]">
          مشاريعنا
        </h1>
        <p className="!leading-[1.4rem] md:!leading-7 xs:text-sm">
          نعرض لكم مجموعة مختارة من مواقع الويب التي قمنا بتصميمها وتطويرها
          باحترافية عالية. نركز على تقديم تجارب مستخدم سلسة، تصميمات حديثة،
          وأداء تقني قوي يلبي تطلعات عملائنا. تصفح مشاريعنا لاكتشاف تنوع الحلول
          التي قدمناها لمختلف القطاعات والأنشطة التجارية عبر شبكة الإنترنت.
        </p>
      </div>

      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="md:mx-auto mb-8">
            <div className="group rounded-xl relative w-full h-[400px] md:w-[360px] lg:w-[320px] xl:w-[400px] md:h-[515px] overflow-hidden shadow-cardShadow">
              <Link href={item.link}>
                <Image
                  src={item.imageName}
                  alt={item.title}
                  width={400}
                  height={515}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:-translate-y-4 object-top"
                />
                <div className="absolute inset-0 bg-[rgba(18,18,18,0.8)] transition-all duration-500 -z-10 group-hover:z-10" />
                <div className="absolute inset-0 -z-10 group-hover:z-20  border border-[rgba(255,255,255,.3)] border-dotted m-7 !duration-300"></div>
              </Link>
              <Link href={item.link}>
                <div className="cursor-pointer transform transition-transform duration-500 translate-y-12 group-hover:translate-y-0 flex gap-2 absolute top-[42%] left-[33%] w-[150px] h-[47px] rounded-full items-center justify-center bg-white text-black -z-10 group-hover:z-20">
                  <HiArrowNarrowRight className="text-[20px] text-[#0b0448]" />
                  <span className="text-[15px] text-[#0b0448]">
                    View Demo
                  </span>{" "}
                </div>
              </Link>
            </div>
            <div>
              <Link href={item.link}>
                <h1 className="text-[20px] mt-4 text-center text-[#0b0448]">
                  {item.title}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
