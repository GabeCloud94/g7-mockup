import {Link} from '@shopify/hydrogen';
import {Suspense} from 'react';

export function Faq() {
  return (
    <Suspense>
      <div className="bg-[url('../assets/images/RUST.jpg')] bg-cover bg-center bg-no-repeat flex w-full justify-center items-center flex-col gap-10 py-24">
        <h1 className="text-6xl font-thin font-optima tracking-widest bg-white/80 px-12 py-6 rounded-3xl">
          WILL IT TARNISH OR RUST?
        </h1>
        <Link to={`/faq/`}>
          <button className="py-2 px-6 font-semibold tracking-widest box-border text-center bg-contrast text-white hover:bg-white hover:text-contrast border-2 border-contrast rounded-2xl text-3xl">
            We've Got Answers
          </button>
        </Link>
      </div>
    </Suspense>
  );
}
