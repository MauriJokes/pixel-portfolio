import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

export default function Contact() {
  return (
    <div className="flex h-screen flex-col items-center justify-start overflow-hidden p-20 px-4">
      <div className="flex min-h-[300px] w-full max-w-[400px] flex-col gap-4 rounded-lg bg-[#2e2e2e] p-6">
        <div>
          <label className="font-montserrat block text-base font-medium tracking-widest text-white/60">
            Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="mt-2 block w-full rounded-md bg-[#3e3e42] px-4 py-3 text-base text-white/60 placeholder:font-light placeholder:tracking-widest placeholder:text-gray-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="font-montserrat block text-base font-medium tracking-widest text-white/60">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-2 block w-full rounded-md bg-[#3e3e42] px-4 py-3 text-base text-white/60 placeholder:font-light placeholder:tracking-widest placeholder:text-gray-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="font-montserrat block text-base font-medium tracking-widest text-white/60">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="mt-2 block w-full resize-none rounded-md bg-[#3e3e42] px-4 py-3 text-base text-white/60 placeholder:font-light placeholder:tracking-widest placeholder:text-gray-500 focus:outline-none"
            placeholder="Write your message here..."
          />
        </div>
        <div className="mt-4 flex justify-center">
          <button className="font-montserrat w-full rounded-md bg-[#98c379] py-2 text-base font-bold tracking-widest text-white/80 transition hover:bg-[#52585a]">
            Send
          </button>
        </div>
      </div>

      <div className="mt-8 flex w-85 items-center justify-center gap-10">
        <FaGithub className="text-5xl text-white transition duration-300 hover:text-gray-600" />
        <TbMailFilled className="text-5xl text-white transition duration-300 hover:text-gray-600" />
        <FaLinkedinIn className="text-5xl text-white transition duration-300 hover:text-gray-600" />
      </div>
    </div>
  );
}
