import {Suspense} from 'react';

import Product1 from '../assets/images/product1.png';
import Product2 from '../assets/icons/product2.png';
import Product3 from '../assets/icons/product3.png';
import Product4 from '../assets/icons/product4.png';
import Product5 from '../assets/icons/product5.png';
import Product6 from '../assets/images/product6.jpg';
import Product7 from '../assets/images/product7.png';
import Product8 from '../assets/images/product8.png';
import Product9 from '../assets/images/product9.png';
import Product10 from '../assets/images/product10.png';
import Product11 from '../assets/images/product11.png';
import Product12 from '../assets/images/product12.png';

import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useShopQuery,
} from '@shopify/hydrogen';

import {Swimlane} from '../components/index';

import {
  Hero,
  Layout,
  SubHero,
  Cascade,
  PictureSplit,
  Faq,
  ShippingSection,
  CallToAction,
} from '~/components/index.server';
import {MockUp} from '../components/sections/MockUp.server';

export default function Homepage() {
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {
  // fill in the hero banners with placeholders if they're missing
  const products = [
    {img: Product1, title: 'Single Panel', id: 1},
    {img: Product2, title: 'Multi-Panel', id: 2},
    {img: Product3, title: 'Ribbon', id: 3},
    {img: Product4, title: 'Sconce', id: 4},
    {img: Product5, title: 'Plates', id: 5},
    {img: Product6, title: 'Float Panel', id: 6},
  ];
  const products2 = [
    {img: Product7, title: 'Single Panel', id: 7},
    {img: Product8, title: 'Multi-Panel', id: 8},
    {img: Product9, title: 'Ribbon', id: 9},
    {img: Product10, title: 'Sconce', id: 10},
    {img: Product11, title: 'Plates', id: 11},
    {img: Product12, title: 'Float Panel', id: 12},
  ];
  return (
    <>
      <Hero />
      <Swimlane products={products} />
      <SubHero />
      <Cascade />
      <MockUp />
      <PictureSplit />
      <Swimlane products={products2} />
      <Faq />
      <ShippingSection />
      <CallToAction />
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: name,
        description,
        titleTemplate: '',
      }}
    />
  );
}

/**
 * The homepage content query includes a request for custom metafields inside the alias
 * `heroBanners`. The template loads placeholder content if these metafields don't
 * exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_seconary   File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

const HOMEPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
