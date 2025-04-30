import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="bg-black  w-full">
        <div className="md:container xs:mx-4 mx-auto text-white flex justify-between content-center py-6">
          <div>
            <h1 className="font-extrabold text-[40px]">محمد</h1>
          </div>
          <div className="flex gap-4 h-fit my-auto">
            <div className="group h-fit">
              <div className="border cursor-pointer border-[rgb(255,255,255,62%)] p-1 rounded-full h-fit my-auto group-hover:border-white duration-300">
                <FaInstagram className="text-[23px] text-[rgb(255,255,255,62%)] group-hover:text-white duration-300" />
              </div>
            </div>
            <div className="group h-fit">
              <div className="border cursor-pointer border-[rgb(255,255,255,62%)] p-1 rounded-full h-fit my-auto group-hover:border-white duration-300">
                <CiFacebook className="text-[23px] text-[rgb(255,255,255,62%)] group-hover:text-white duration-300" />
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
