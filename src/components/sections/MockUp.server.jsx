import {Link} from '@shopify/hydrogen';
import {Suspense} from 'react';

export function MockUp() {
  return (
    <Suspense>
      <div className="bg-[url(../assets/images/mock-it-up.jpeg)] bg-auto bg-no-repeat bg-[#B5A296] bg-center h-full w-full p-10 pb-44">
        <h1 className="text-white font-thin text-8xl tracking-wider pb-4 font-optima">
          WILL IT LOOK GOOD IN MY SPACE?
        </h1>
        <h2 className="text-white text-6xl font-light tracking-widest pb-24">
          WE'LL{' '}
          <Link to="/mock-it-up/" className="underline hover:text-contrast">
            MOCK-IT-UP
          </Link>{' '}
          FOR YOU
        </h2>
        <ol className="pb-24 text-white font-normal text-5xl tracking-wider flex flex-col gap-4">
          <li>1. Measure</li>
          <li>2. Snap a Pic</li>
          <li>3. We Mock it Up</li>
          <li>4. Pick your favorite!</li>
        </ol>
        <Link to="/mock-it-up/">
          <button className="bg-white text-5xl tracking-wider hover:bg-[#b5a296] hover:text-white border-2 rounded-xl text-[#B5A296] py-2 px-6">
            MOCK IT UP!
          </button>
        </Link>
      </div>
    </Suspense>
  );
}
