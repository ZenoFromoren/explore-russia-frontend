import { FC } from 'react';
import { TPost } from '../../../utils/types';
import styles from './search-page.module.css';
import { Link } from 'react-router-dom';

type TSearchPageUIProps = {
  searchResults: TPost[];
};

export const SearchPageUI: FC<TSearchPageUIProps> = ({ searchResults }) => (
  <main className={styles.main}>
    {searchResults.length ? (
      <>
        <h2 className={styles.searchResultsTitle}>
          Результаты поиска: {searchResults.length}
        </h2>
        <div className={styles.searchResultsList}>
          {searchResults.map((searchResult) => {
            const { id, createdAt, city, title, image, text } = searchResult;

            const parser = new DOMParser();
            const htmlText = parser.parseFromString(text, 'text/html');

            return (
              <Link to={`/posts/${id}`} className={styles.postLink} key={id}>
                <article className={styles.searchResult}>
                  <div className={styles.contentLeft}>
                    <div className={styles.contentTopLeft}>
                      <p
                        className={styles.date}
                      >{`${new Date(createdAt).toLocaleDateString()}`}</p>
                      <p className={styles.cityName}>{city}</p>
                      <p className={styles.title}>{title}</p>
                    </div>
                    <p className={styles.basicText}>
                      {htmlText.querySelector('.basicText')?.textContent}
                    </p>
                  </div>
                  <img
                    className={styles.image}
                    src={image}
                    alt={`Фото статьи ${title}`}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </>
    ) : (
      <h2 className={styles.searchResultsTitle}>Нет результатов</h2>
    )}
  </main>
);
