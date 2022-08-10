import {Link} from '@shopify/hydrogen';
import {Suspense} from 'react';

export function PictureSplit() {
  return (
    <Suspense>
      <div className="w-full h-screen flex flex-col gap-8 bg-white">
        <div className="bg-[url('../assets/images/PictureSplitBG.jpg')] bg-cover bg-no-repeat bg-center w-full h-3/5 flex justify-end">
          <div className="bg-gradient-to-l from-zinc-400 bg-cover w-1/2 h-full"></div>
        </div>
        <div className="w-full h-2/5 flex flex-row gap-8 justify-evenly">
          <div className="bg-[url('../assets/images/cleanmodern2.png')] bg-no-repeat bg-cover bg-center w-full h-full flex justify-center items-center">
            <Link to="/collections/claymoon copper/">
              <button className="bg-white/80 hover:bg-primary hover:opacity-80 hover:text-white rounded-3xl text-4xl tracking-widest text-center py-4 px-8">
                CLEAN & MODERN
              </button>
            </Link>
          </div>
          <div className="bg-[url('../assets/images/wildrugged.jpg')] bg-no-repeat bg-cover bg-center w-full h-full flex justify-center items-center">
            <Link to="/collections/copper on fire/">
              <button className="bg-white/80 hover:bg-primary hover:opacity-80 hover:text-white rounded-3xl text-4xl tracking-widest text-center py-4 px-8">
                WILD & RUGGED
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
