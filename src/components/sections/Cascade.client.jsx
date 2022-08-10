import {Suspense} from 'react';
import NotAlone from '../../assets/images/Not-Alone.jpg';
import Passage from '../../assets/images/Passage.jpg';
import {Image, Link} from '@shopify/hydrogen';

export function Cascade() {
  return (
    <Suspense fallback="Loading...">
      <div className="py-8 bg-white h-screen w-full flex flex-col justify-evenly">
        <div className="w-full h-1/2 flex bg-white">
          <div className="bg-[url('../assets/images/cascade1.jpg')] bg-cover w-1/2 bg-no-repeat" />
          <div className="flex flex-col items-center justify-center w-1/2">
            <Image
              alt="Image of collection Copper on Fire"
              src={NotAlone}
              height="300rem"
              width="300rem"
            />

            <h1 className="text-center text-6xl tracking-widest font-optima">
              COPPER ON FIRE
            </h1>
            <Link to="/collections/copper on fire/">
              <button className="py-2 px-6 font-semibold tracking-widest box-border text-center bg-contrast text-white hover:bg-white hover:text-contrast border-2 border-contrast w-full rounded-2xl text-3xl">
                MORE FROM THIS COLLECTION
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-1/2 flex bg-white">
          <div className="flex flex-col items-center justify-center w-1/2">
            <Image
              alt="Image of Claymoon Copper collection"
              src={Passage}
              height="550rem"
              width="550rem"
            />

            <h1 className="text-center text-6xl tracking-widest font-optima">
              CLAYMOON COPPER
            </h1>
            <Link to="/collections/claymoon copper">
              <button className="py-2 px-6 font-semibold tracking-widest box-border text-center bg-contrast text-white hover:bg-white hover:text-contrast border-2 border-contrast w-full rounded-2xl text-3xl">
                MORE FROM THIS COLLECTION
              </button>
            </Link>
          </div>
          <div className="bg-[url('../assets/images/cascade2.jpg')] bg-cover w-1/2 bg-no-repeat" />
        </div>
      </div>
    </Suspense>
  );
}
