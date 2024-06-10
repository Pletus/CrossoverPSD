import cakepng from "../assets/sweetberrypie.jpeg";
import gift from "../assets/meaningfulgift.jpeg";

function Body() {
  return (
    <>
      <div>
        <p className='text-center text-2xl text-gray-800 font-semibold'>
          Enjoy the holidays with your family and friends <br />
          with these festive recipes and gift ideas!
        </p>

        <div className='flex flex-row mt-10 justify-center gap-20'>
          <div className='flex flex-col items-center'>
            <div className='border bg-rose-700 w-96'>
              <img className='' src={cakepng} alt='Berry pie' />
              <div className='p-3'>
                <h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-white'>
                  sweet berry pie
                </h5>
                <p className='mb-3 font-normal text-lg text-center text-slate-200'>
                  the sweetest and easiest <br /> berry pie perfect for the{" "}
                  <br />
                  Holidays!
                </p>
              </div>
            </div>
            <button
              className='mt-3 px-3 py-1 text-md font-medium text-center text-rose-700 bg-white border-4 border-red-800 rounded-lg
            hover:bg-rose-100'
            >
              Read more
            </button>
          </div>
          <div className='flex flex-col items-center'>
            <div className='border bg-rose-700 w-96'>
              <img className='' src={gift} alt='Gift' />
              <div className='p-3'>
                <h5 className='mb-2 text-2xl font-bold text-white text-center tracking-tight'>
                  10 meaningful gifts
                </h5>
                <p className='mb-3 font-normal text-lg text-center text-slate-200 font'>
                  worry no more with <br /> these gifts that your <br /> family
                  will love!
                </p>
              </div>
            </div>
            <button className='mt-3 px-5 py-1 text-md font-medium text-center text-rose-700 bg-white border-4 border-red-800 rounded-lg hover:bg-rose-100'>
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
