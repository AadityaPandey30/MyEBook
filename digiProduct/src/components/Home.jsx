import cover from "../assets/cover.png"
import aadi from '../assets/pacify.png'

const Home = () => {
  return (
    <div className="bg-[#fffdfa]">
      <div className="w-fit m-auto py-[5%] px-2 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-x-7 self-stretch">
          <div className="self-stretch">
            <img src={aadi} className="w-[50%] mt-[4%] mb-[6%] border border-black border-dotted"></img>
            <div className=" flex flex-col pb-3">
              <span className="font-normal text-[48px] py-5 leading-[54px] capitalize">
                Finding a balance 
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-normal text-[32px] leading-[48px] text-black">
                This weekly workout planner is the best starting point for busy
                parents
              </span>
            </div>
            <div className="flex flex-wrap">
              <div className="flex flex-col justify-center w-full md:basis-2/3 my-5">
                <button className="font-normal text-[24px] leading-[39px] text-center text-white items-center bg-[#4a5d52] border border-solid border-[#4a5d52] px-[10%] py-[5%]">
                  GRAB THE OFFER NOW
                </button>
              </div>
              <div className="w-[127.94999694824219px] h-12"></div>
            </div>
          </div>
          <img src={cover} className="md:w-[400px] md:h-[554px] shadow-lg"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
