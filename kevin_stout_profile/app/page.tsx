import Image from "next/image";
import ProfilePic from "../public/images/KevinStout.png";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="stars z-20"></div>
        <div className="twinkling z-20"></div>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <Image src={ProfilePic} alt="Picture of Kevin Stout" className="z-50 w-80 h-80 rounded-full p-3" />
          <div className="z-50 w-full max-w-5xl font-mono">
            <div className="text-5xl text-center tracking-tight">Kevin Stout</div>
            <div className="text-2xl text-center tracking-normal">Software Engineer</div>
            <div className="p-4" />
            <div className="text-xl text-center">Finding solutions to complex problems</div>
          </div>
        </div>
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop"></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle"></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom"></div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="bg-slate-800">
        <h1 className="p-5">Nice Curves 1</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section className="primary-background-color">
        <h1>Nice Curves 2</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section className="secondary-background-color">
        <h1>Nice Curves 3</h1>
        <p>
          Lorem, ipsum dolor sit amet hello consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam
          blanditiis. Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section className="accent-background-color">
        <h1>Nice Curves 4</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section className="primary-background-color secondary-text-color">
        <h1>Nice Curves 5</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section className="secondary-background-color secondary-text-color">
        <h1>Nice Curves 6</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section className="accent-background-color secondary-text-color">
        <h1>Nice Curves 7</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section>
        <h1>Nice Curves 8</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
      <section>
        <h1>Nice Curves 9</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quibusdam odio beatae vero corporis omnis minus doloremque distinctio ipsam blanditiis.
          Soluta, obcaecati voluptatem. Totam quo veritatis rem, corrupti sequi expedita.
        </p>
      </section>
    </main>
  );
}
