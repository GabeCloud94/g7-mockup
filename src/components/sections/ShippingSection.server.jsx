import {Suspense} from 'react';

export function ShippingSection() {
  return (
    <Suspense fallback="Loading...">
      <div className="py-8 bg-white h-screen w-full flex flex-col justify-evenly">
        <div className="w-full h-1/2 flex bg-white">
          <div className="bg-[url('../assets/images/Shipping.jpg')] bg-cover bg-center w-full bg-no-repeat" />
          <div className="w-full bg-white flex-col flex justify-center items-center">
            <div className="text-left">
              <h1 className="text-7xl tracking-widest font-optima font-thin">
                SAFE SHIPPING
              </h1>
              <h2 className="text-6xl tracking-widest font-thin pb-8">
                WE PACK IN-HOUSE
              </h2>
              <h3 className="text-4xl tracking-widest font-normal">
                EVERY PACKAGE
                <br />
                IS INSURED!
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 flex bg-white">
          <div className="flex flex-col w-full bg-white justify-center items-center">
            <div className="text-left">
              <h1 className="text-7xl tracking-widest font-optima font-thin pb-8">
                FOR 35+ YEARS
              </h1>
              <h3 className="text-4xl tracking-widest font-normal leading-tight">
                WE HAVE HAD THE PRIVILEGE
                <br />
                TO CREATE ORIGINAL COPPER
                <br />
                WALL ART FOR THOUSANDS OF
                <br />
                HAPPY CUSTOMERS ALL OVER
                <br />
                THE WORLD. LET US HELP YOU
                <br />
                BRING YOUR WALLS TO LIFE.
              </h3>
            </div>
          </div>
          <div className="bg-[url('../assets/images/shipping3.jpeg')] bg-bottom bg-cover w-full bg-no-repeat" />
        </div>
      </div>
    </Suspense>
  );
}
