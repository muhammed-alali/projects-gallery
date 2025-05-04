import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className=" border-b border-gray-300  w-full shadow-md">
        <div className="md:container xs:mx-4 mx-auto  text-white flex justify-between content-center py-1 ">
          <div>
            {/* <h1 className="font-extrabold text-[40px]">محمد</h1> */}
            <Image src={"/photo/logo2.png"} alt="" width={210} height={200} />
          </div>
          <div className="flex gap-4 h-fit my-auto">
            <div className="group h-fit">
              <div className=" cursor-pointer  p-1 rounded-full h-fit my-auto ">
                <FaInstagram className="text-[25px] text-[rgb(7,112,224)] group-hover:text-[rgb(7,112,224,70%)] duration-300" />
              </div>
            </div>
            <div className="group h-fit">
              <div className=" cursor-pointer  p-1 rounded-full h-fit my-auto ">
                <CiFacebook className="text-[25px] text-[rgb(7,112,224)] group-hover:text-[rgb(7,112,224,70%)] duration-300" />
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
