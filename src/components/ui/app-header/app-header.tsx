import { FC, SyntheticEvent } from 'react';
import styles from './app-header.module.css';
import logo from '../../../images/logo.svg';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type TAppHeaderUIProps = {
  userName: string;
  searchSubmit: (e: SyntheticEvent) => void;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({
  userName,
  searchSubmit,
  setQuery,
}) => (
  <header className={styles.header}>
    <div className={styles.content}>
      <Link to='/'>
        <img src={logo} alt='Лого' className={styles.headerLogo} />
      </Link>
      <div className={styles.contentLeft}>
        <p className={styles.description}>Сайт о городах России и не только</p>
        <nav className={styles.navMenu}>
          <Link to='/'>
            <p className={styles.navListItem}>Главная</p>
          </Link>
          <p className={styles.navListItem}>Карта</p>
          <p
            className={clsx(
              styles.navListItem,
              styles.navListItem_dropdown
            )}
          >
            Статьи
            <svg
              width='11'
              height='6'
              viewBox='0 0 11 6'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g className={styles.arrow}>
                <path
                  d='M1 1L5.24264 5.24264'
                  stroke='currentColor'
                  strokeLinecap='round'
                  className={styles.arrow}
                />
                <path
                  d='M9.53564 1L5.293 5.24264'
                  stroke='currentColor'
                  strokeLinecap='round'
                  className={styles.arrow}
                />
              </g>
            </svg>
          </p>
        </nav>
      </div>
      <div className={styles.contentRight}>
        <Link to='/profile'>
          <div className={styles.account}>
            <svg
              width='15'
              height='28'
              viewBox='0 0 15 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 27V27C2.68787 20.1772 12.4242 20.1585 14.0345 27V27'
                stroke='black'
                strokeLinecap='round'
              />
              <circle cx='7.51722' cy='16.7586' r='3.22425' stroke='black' />
            </svg>
            <p className={styles.accountText}>{userName || 'Войти'}</p>
          </div>
        </Link>
        <form className={styles.search} onSubmit={searchSubmit}>
          <input
            className={styles.searchBar}
            type='text'
            placeholder='Например: Иваново'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' className={styles.searchButton}>
            Поиск
          </button>
        </form>
      </div>
    </div>
  </header>
);
