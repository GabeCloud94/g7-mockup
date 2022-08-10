import {Image} from '@shopify/hydrogen';
import {Suspense} from 'react';
import Logo from '../../assets/images/G7 Logo-Recreate.png';

export function Hero() {
  return (
    <Suspense fallback="Loading...">
      <div className="bg-[url('../assets/images/hero1.jpg')] top-0 min-h-screen bg-cover items-end">
        <div className="flex min-h-screen w-full flex-col items-end justify-center">
          <div className="w-2/5 flex flex-col items-center justify-center">
            <Image src={Logo} alt="G7 Logo" height={250} width={250} />
            <div className="py-6 bg-white/80 rounded-l-3xl w-full">
              <h1 className="text-center text-6xl tracking-widest font-optima">
                COPPER WALL ART
              </h1>
              <h3 className="text-center text-base tracking-wide">
                TRANSFORMING ORDINARY WALLS INTO WORKS OF ART
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
