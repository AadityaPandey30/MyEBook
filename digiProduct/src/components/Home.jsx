import cover from "../assets/cover.png";
import aadi from "../assets/pacify.png";
import s1 from "../assets/Sym1.png";
import s2 from "../assets/Sym2.png";
import s3 from "../assets/Sym3.png";

const Home = () => {
  return (
    <>
      <div className="bg-[#fffdfa] py-8">
        <div className="w-fit m-auto py-[5%] px-2 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-x-7 self-stretch">
            <div className="self-stretch">
              <img
                src={aadi}
                className="w-[50%] mt-[4%] mb-[6%] border border-black border-dotted"
              ></img>
              <div className=" flex flex-col pb-3">
                <span className="font-normal text-[48px] py-5 leading-[54px] capitalize">
                  Elevate your mind level
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-normal text-[32px] leading-[48px] text-black">
                  This weekly workout planner is the best starting point for
                  busy parents
                </span>
              </div>
              <div className="flex flex-wrap">
                <div className="flex flex-col justify-center w-full md:basis-2/3 my-5">
                  <button className="font-normal text-[24px] leading-[39px] text-center text-white items-center bg-[#4a5d52] border border-solid border-[#4a5d52] px-[10%] py-[5%]">
                    GRAB THE OFFER NOW
                  </button>
                </div>
              </div>
            </div>
            <img
              src={cover}
              className="md:w-[400px] md:h-[554px] book"
            ></img>
          </div>
        </div>
      </div>

      <div className="bg min-h-[120vh] relative h-fit">
        <div className="bg-[#00000094] min-h-[120vh] py-8">
          <h2 className="font-normal text-[48px] leading-[54px] text-center text-white pt-16 pb-8">
            USE THIS MENTAL HEALTH BOOK FOR:
          </h2>

          <div className="flex flex-col md:flex-row justify-center mt-16 gap-8 md:gap-4 max-w-5xl m-auto p-7">
            <div className="grow bg-white p-[2%] w-full md:w-[5%] min-h-[50vh] h-fit rounded-md">
              <img src={s3} className="font-black text-5xl text-[#4a5d52] mb-6" />
              <div className=" flex flex-col pb-[7px]">
                <span className="font-normal text-[28px] leading-[31.5px] underline text-black mb-4">
                  Set your intentions.
                </span>
              </div>
              <div className=" flex flex-col">
                <span className="font-normal text-[20px] leading-[30px] text-black">
                  From setting goals to time- blocking, this planner will help
                  you be more intentional with your workouts. You’ll feel
                  confident, committed—and stronger.
                </span>
              </div>
            </div>
            <div className="grow bg-white p-[2%] w-full md:w-[5%] min-h-[50vh] h-fit">
              <img src={s1} className="font-black text-5xl text-[#4a5d52] mb-6" />
              <div className=" flex flex-col pb-[7px]">
                <span className="font-normal text-[28px] leading-[31.5px] underline text-black mb-4">
                  Track your progress.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-normal text-[20px] leading-[30px] text-black">
                  Keeping a record of each workout and your accomplishments is
                  the easiest way to motivate yourself. Knowing how far you’ve
                  come will only push you further!
                </span>
              </div>
            </div>
            <div className="grow bg-white p-[2%] w-full md:w-[5%] min-h-[50vh] h-fit">
              <img src={s2} className="font-black text-5xl text-[#4a5d52] mb-6" />
              <div className=" flex flex-col pb-[7px]">
                <span className="font-normal text-[28px] leading-[31.5px] underline text-black mb-4">
                  Stay accountable.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-normal text-[20px] leading-[30px] text-black">
                  It’s hard to find time for fitness between work and kids, but
                  creating a routine will keep you on track, and you’ll see real
                  results when you become consistent.
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="font-normal text-[24px] leading-[39px] text-center text-white items-center border border-solid border-[#4a5d52] px-[10%] py-[1.3%] my-12 backdrop-blur-sm hover:border-green-500 hover:border-2">
              GRAB THE OFFER NOW
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#4A5D52] h-[40vh]">
        <div className="text-center m-auto w-fit relative top-[7em]">
          <img src={aadi} className="w-[200px] m-auto pb-4"></img>
          <div className="text-center">
            <p className="font-normal text-base text-center text-[#fef9f1]">
              ©2025 Pacify. All rights reserved.
            </p>
            <p className="font-normal text-base text-center text-[#fef9f1]">
              Privacy Policy | Created with Leadpages
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
