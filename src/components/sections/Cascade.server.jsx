import {Suspense} from 'react';
import NotAlone from '../../assets/images/Not-Alone.jpg';
import Passage from '../../assets/images/Passage.jpg';

import {CollectionCard} from '../index.server';

export function Cascade() {
  const Collection1 = {
    image: NotAlone,
    title: 'COPPER ON FIRE',
    size: '300rem',
    id: 1,
  };
  const Collection2 = {
    image: Passage,
    title: 'CLAYMOON COPPER',
    size: '550rem',
    id: 2,
  };
  return (
    <Suspense fallback="Loading...">
      <div className="py-8 bg-white h-screen w-full flex flex-col justify-evenly">
        <div className="w-full h-1/2 flex bg-white">
          <div className="bg-[url('../assets/images/cascade1.jpeg')] bg-cover w-full no-repeat" />
          <CollectionCard collection={Collection1} />
        </div>
        <div className="w-full h-1/2 flex bg-white">
          <CollectionCard collection={Collection2} />
          <div className="bg-[url('../assets/images/cascade2.jpeg')] bg-cover w-full no-repeat" />
        </div>
      </div>
    </Suspense>
  );
}
