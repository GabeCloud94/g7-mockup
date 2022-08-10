import Product7 from '../../assets/images/product7.png';
import Product8 from '../../assets/images/product8.png';
import Product9 from '../../assets/images/product9.png';
import Product10 from '../../assets/images/product10.png';
import Product11 from '../../assets/images/product11.png';
import Product12 from '../../assets/images/product12.png';
import {Swimlane} from './Swimlane.server';

export function Products2() {
  const products2 = [
    {img: Product7, title: 'Single Panel', id: 7},
    {img: Product8, title: 'Multi-Panel', id: 8},
    {img: Product9, title: 'Ribbon', id: 9},
    {img: Product10, title: 'Sconce', id: 10},
    {img: Product11, title: 'Plates', id: 11},
    {img: Product12, title: 'Float Panel', id: 12},
  ];
  return <Swimlane products={products2} />;
}
