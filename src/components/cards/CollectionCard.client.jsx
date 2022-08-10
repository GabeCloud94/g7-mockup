import {Image, Link} from '@shopify/hydrogen';

export function CollectionCard({collection}) {
  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center gap-2 pb-4">
      {collection && (
        <>
          <Image
            alt={`Image of collection ${collection.title}`}
            src={collection.image}
            height={collection.size}
            width={collection.size}
            id={collection.id}
          />

          <h1 className="text-center text-6xl tracking-widest font-optima">
            {collection.title}
          </h1>
          <Link to={`/collections/${collection.title}`}>
            <button className="py-2 px-6 font-semibold tracking-widest box-border text-center bg-contrast text-white hover:bg-white hover:text-contrast border-2 border-contrast w-full rounded-2xl text-3xl">
              MORE FROM THIS COLLECTION
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
