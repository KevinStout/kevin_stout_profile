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
        {/* <div className="clouds z-40">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill cloud1"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill cloud2"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill cloud3"
            ></path>
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill cloud4"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill cloud5"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill cloud6"
            ></path>
          </svg>
        </div> */}
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop"></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle"></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom"></div>
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
