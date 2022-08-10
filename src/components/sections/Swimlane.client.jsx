import {Image} from '@shopify/hydrogen';
import {Suspense} from 'react';

export function Swimlane({products}) {
  return (
    <Suspense>
      <div className="w-full flex">
        <div className="w-full flex flex-row justify-evenly bg-white py-6">
          {products.map((product) => (
            <div
              className="flex flex-col gap-4 justify-evenly items-center h-full"
              key={product.id}
            >
              <Image
                src={product.img}
                width={180}
                height={180}
                alt={product.title}
              />
              <button className="p-2 font-bold tracking-wide box-border text-center bg-contrast text-white hover:bg-white hover:text-contrast border-2 border-contrast w-full rounded-2xl text-xl">
                {product.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
