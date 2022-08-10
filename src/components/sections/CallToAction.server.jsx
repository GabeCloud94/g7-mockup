import {Suspense} from 'react';
import {Link} from '@shopify/hydrogen';

export function CallToAction() {
  return (
    <Suspense>
      <div className="flex w-full justify-end bg-[url('../assets/images/form.jpg')] bg-cover bg-bottom">
        <div className="flex w-4/5 flex-col justify-center items-center text-center pt-24 pb-48">
          <h1 className="font-optima text-5xl font-thin leading-tight tracking-widest pb-10">
            WE'RE SURROUNDED BY WALLS
            <br />
            SHOULDN'T THEY BE BEAUTIFUL?
          </h1>
          <h2 className="text-3xl font-normal tracking-widest pb-10">
            LIFE IS TOO SHORT TO HAVE ORDINARY WALLS
          </h2>
          <Link to={`/form/`}>
            <button className="py-2 px-6 font-semibold tracking-widest box-border text-center bg-contrast text-white hover:bg-white hover:text-contrast border-2 border-contrast rounded-2xl text-3xl">
              LET US HELP
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
