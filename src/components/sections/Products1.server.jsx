import {Swimlane} from './Swimlane.server';
import Product1 from '../../assets/images/product1.png';
import Product2 from '../../assets/images/product2.png';
import Product3 from '../../assets/images/product3.png';
import Product4 from '../../assets/images/product4.png';
import Product5 from '../../assets/images/product5.png';
import Product6 from '../../assets/images/product6.jpg';

export function Products1() {
  const products = [
    {img: Product1, title: 'Single Panel', id: 1},
    {img: Product2, title: 'Multi-Panel', id: 2},
    {img: Product3, title: 'Ribbon', id: 3},
    {img: Product4, title: 'Sconce', id: 4},
    {img: Product5, title: 'Plates', id: 5},
    {img: Product6, title: 'Float Panel', id: 6},
  ];
  return (
    <>
      <Swimlane products={products} />
    </>
  );
}
