import ProfilePic from "../public/images/KevinStout.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-slate-800 flex min-h-screen flex-col items-center justify-center">
      <Image src={ProfilePic} alt="Picture of Kevin Stout" className="w-80 h-80 rounded-full p-3" />
      <div className="z-10 w-full max-w-5xl font-mono">
        <div className="text-5xl text-center ">Kevin Stout</div>
        <div className="text-xl text-center">Finding solutions to complex problems</div>
      </div>
    </main>
  );
}
