import Image from "next/image";
import { HiOutlineMail, HiOutlineLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

const CV = () => {
  return (
    <div>
      <section className="">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              src="https://avatars.githubusercontent.com/u/40598819?v=4"
              width={72}
              height={72}
              className="rounded-full"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl">Halit İslam İçli</h1>
            <p className="uppercase">Front End Developer - Ankara</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="flex items-center">
            <HiOutlineMail className="h-5 w-5 text-blue-500 mr-1" />
            <p>halidiislam@gmail.com</p>
          </div>
          <div className="flex items-center">
            <HiOutlineLink className="h-5 w-5 text-blue-500 mr-1" />
            <p>halid.dev</p>
          </div>
          <div className="flex items-center">
            <AiFillGithub className="h-5 w-5 text-blue-500 mr-1" />
            <p>imhalid</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
