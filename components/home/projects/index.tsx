// import Image from "next/image";
// import Link from "next/link";

const data = [
  { id: 6, title: "عقارات", imageName: "/photo/proje4.png" },
  { id: 1, title: "التدقيق المستقل", imageName: "/photo/proje1.png" },
  { id: 2, title: "مطعم", imageName: "/photo/proje2.png" },
  { id: 4, title: "التدقيق المستقل", imageName: "/photo/proje1.png" },
  { id: 5, title: "مطعم", imageName: "/photo/proje2.png" },
  { id: 3, title: "عقارات", imageName: "/photo/proje4.png" },
];

// export default function ProjectsGallery() {
//   return (
//     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {data.map((item) => (
//         <div key={item.id} className="text-center ">
//           <Link href="#">
//             <div className=" w-[400px] h-[500px] overflow-hidden relative">
//               <Image
//                 src={item.imageName}
//                 alt={item.title}
//                 width={400}
//                 height={700}
//                 className="  object-top hover:object-bottom   duration-[4000ms] ease-in-out"
//               />
//             </div>
//           </Link>
//           <h1 className="mt-4 text-lg font-semibold">{item.title}</h1>
//         </div>
//       ))}
//     </div>
//   );
// }

// components/HoverImageEffect.tsx
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ProjectsGallery() {
  return (
    <div className="md:container mx-4 md:mx-auto py-[50px] md:py-[60px]">
      <div className="mb-12 text-center mx-auto w-full md:w-[600px]">
        <h1 className="mb-5 text-[25px] md:text-[40px] font-semibold">
          مشاريعنا
        </h1>
        <p className="!leading-[1.4rem] md:!leading-7 xs:text-sm">
          نعرض لكم مجموعة مختارة من مواقع الويب التي قمنا بتصميمها وتطويرها
          باحترافية عالية. نركز على تقديم تجارب مستخدم سلسة، تصميمات حديثة،
          وأداء تقني قوي يلبي تطلعات عملائنا. تصفح مشاريعنا لاكتشاف تنوع الحلول
          التي قدمناها لمختلف القطاعات والأنشطة التجارية عبر شبكة الإنترنت.
        </p>
      </div>
      <div className=" grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {data.map((item) => (
          <div className=" md:mx-auto mb-4 md:mb-8  ">
            <Link href={"/"}>
              <div
                key={item.id}
                className="group relative w-full h-[400px] md:w-[360px] lg:w-[320px] xl:w-[400px] md:h-[515px] overflow-hidden  shadow-cardShadow content-center"
              >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:-translate-y-14">
                  <Image
                    src={item.imageName}
                    alt="Example"
                    width={400}
                    height={515}
                    className="object-cover object-top group-hover:object-bottom"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t group-hover:bg-[#000000] to-transparent opacity-[0.6] transition-opacity duration-300 z-10" />

                <div className="w-[63px] h-[64px] border-2 border-white hover:bg-white text-white hover:text-black  rounded-full relative -z-10 group-hover:z-20 content-center m-auto duration-300">
                  <HiArrowNarrowRight className=" m-auto text-[25px]" />
                </div>
              </div>

              <div className="bg-white shadow-cardShadow w-full md:w-[400px]  lg:w-[320px] xl:w-[400px]  px-4 py-4">
                <h1 className="text-black  text-[17px] font-semibold">
                  {item.title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
