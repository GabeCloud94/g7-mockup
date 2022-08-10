import {Link} from '@shopify/hydrogen';
import {Suspense} from 'react';

export function SubHero() {
  return (
    <Suspense fallback="Loading...">
      <div className="bg-[url('../assets/images/SubHeroBG.jpg')] bg-cover bg-no-repeat bg-center w-full py-20">
        <div className="bg-white/80 p-14 pr-24 h-2/3 w-2/5 rounded-r-3xl flex items-start justify-start flex-col ">
          <h1 className="text-left text-5xl tracking-widest font-optima pb-10">
            CREATE A SPACE YOU LOVE TO LIVE IN
          </h1>
          <h2 className="text-left text-4xl tracking-wider pb-10">
            ADD NEW LIFE & ENERGY TO YOUR HOME OR BUSINESS
          </h2>
          <Link to="/collections/all">
            <button className="bg-contrast text-3xl font-semibold tracking-widest text-white hover:text-contrast hover:bg-white border-contrast border-2 py-1 px-4 rounded-2xl">
              SHOP THE ART
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
