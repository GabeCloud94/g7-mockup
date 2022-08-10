import {Link, useUrl, Image} from '@shopify/hydrogen';
import {useWindowScroll} from 'react-use';

import {IconMenu} from '~/components';

import Logo from '../../assets/images/G7 Logo-Recreate.png';

import {MenuDrawer} from './MenuDrawer.client';
import {useDrawer} from './Drawer.client';

/**
 * A client component that specifies the content of the header on the website
 */
export function Header({menu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  return (
    <>
      <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      <DesktopHeader countryCode={countryCode} isHome={isHome} menu={menu} />
      <MobileHeader
        countryCode={countryCode}
        isHome={isHome}
        openMenu={openMenu}
      />
    </>
  );
}

function MobileHeader({isHome, openMenu}) {
  const {y} = useWindowScroll();

  const styles = {
    button: 'relative flex items-center justify-center w-8 h-8',
    container: `${
      isHome
        ? 'bg-white/80 text-contrast dark:text-primary shadow-darkHeader'
        : 'bg-white/80 text-primary'
    } ${
      y > 50 && !isHome ? 'shadow-lightHeader ' : ''
    }flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`,
  };

  return (
    <header role="banner" className={styles.container}>
      <Link
        className="flex justify-start items-center self-stretch leading-[3rem] md:leading-[4rem] flex-grow w-full h-full"
        to="/"
      >
        <Image src={Logo} alt="G7 Logo" height={12} width={12} />
      </Link>
      <div className="flex items-center justify-end">
        <button onClick={openMenu} className={styles.button}>
          <IconMenu />
        </button>
      </div>
    </header>
  );
}

function DesktopHeader() {
  return (
    <header
      role="banner"
      className="leading-none gap-8 px-12 py-8  bg-white/80 text-primary lg:flex h-nav items-center fixed transition duration-300 w-full z-40 top-0 "
    >
      <div className="flex w-full gap-12 items-center">
        <div className="fixed top-2 left-28">
          <Link className={`font-bold`} to="/">
            <Image src={Logo} alt="G7 Logo" height={70} width={70} />
          </Link>
        </div>
        <nav className="flex ml-28 gap-10 justify-evenly items-center w-full">
          <Link
            to="/"
            className="tracking-wider text-primary font-bold hover:text-contrast"
          >
            HOME
          </Link>
          <Link
            to="/story/"
            className="tracking-wider text-primary font-bold hover:text-contrast"
          >
            OUR STORY
          </Link>
          <Link
            to="/art/"
            className="tracking-wider text-primary font-bold hover:text-contrast"
          >
            THE ART
          </Link>
          <Link
            to="/scrapbook/"
            className="tracking-wider text-primary font-bold hover:text-contrast"
          >
            SCRAPBOOK
          </Link>
          <Link
            to="/schedule/"
            className="tracking-wider text-primary font-bold hover:text-contrast"
          >
            SCHEDULE
          </Link>
          <Link
            to="/contact-us/"
            className="tracking-wider text-primary font-bold hover:text-contrast"
          >
            CONTACT US
          </Link>
          <Link to="/collections/all">
            <button className="text-xl font-semibold tracking-widest text-white hover:text-contrast bg-contrast hover:bg-white border-contrast border-2 py-1 px-4 rounded-2xl">
              SHOP THE ART
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
