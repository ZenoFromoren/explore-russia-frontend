import { FC, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../services/thunks/postsThunks';
import { useDispatch, useSelector } from '../../services/store';
import { postsSelectors } from '../../services/slices/postsSlice';
import { Preloader } from '../ui/preloader/preloader';
import { userSelectors } from '../../services/slices/userSlice';
import styles from './post.module.css';
import { LeaveACommentButton } from '../leave-a-comment-button/leave-a-comment-button';
import { Link } from 'react-router-dom';
import { leaveAComment } from '../../services/thunks/userThunks';
import { TComment } from '../../utils/types';
import { Comment } from '../ui/comment/comment';

export const Post: FC = () => {
  const params = useParams();
  const postId = Number(params.postId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, []);

  const post = useSelector(postsSelectors.selectCurrentPost);
  const comments = post?.comments;
  console.log(comments)

  const isAuth = useSelector(userSelectors.selsectIsAuthenticated);
  const userId = useSelector(userSelectors.selectUserData)!?.id;

  const [commentText, setCommentText] = useState('');

  const textarea = document.querySelector<HTMLTextAreaElement>('textarea');

  const minHeight = 20;
  const maxHeight = 260;

  const constrain = (n: number, low: number, high: number) => {
    return Math.max(Math.min(n, high), low);
  };

  if (textarea !== null) {
    textarea.addEventListener('input', () => {
      textarea.style.setProperty('height', '0');
      textarea.style.setProperty(
        'height',
        constrain(textarea.scrollHeight, minHeight, maxHeight) + 'px'
      );
    });
  }

  const htmlString = post?.text!;
  const sanitizedHtml = DOMPurify.sanitize(htmlString);

  const handleLeaveAComment = () => {
    dispatch(leaveAComment({ text: commentText, userId, postId }));
  };

  if (!post) {
    return <Preloader />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
        {isAuth ? (
          <div className={styles.textareaBlock}>
            <textarea
              placeholder='Написать комментарий'
              className={styles.textarea}
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
            />
            <LeaveACommentButton onClick={handleLeaveAComment} />
          </div>
        ) : (
          <div className={styles.authBlock}>
            <p className={styles.authBlock__text}>
              Оставлять комментарии могут только авторизованные пользователи
            </p>
            <div className={styles.authBlock__buttons}>
              <Link to='/login'>
                <button type='button' className={styles.loginButton}>
                  Войти
                </button>
              </Link>
              <Link to='/register'>
                <button type='button' className={styles.registerButton}>
                  Зарегистрироваться
                </button>
              </Link>
            </div>
          </div>
        )}
        {comments!.length ? (
          <>
            <h3 className={styles.comments__title}>
              Комментарии: {comments!.length}
            </h3>
            <section className={styles.comments__block}>
              {comments?.map((commentData: TComment) => {
                return <Comment commentData={commentData} key={commentData.id}/>;
              })}
            </section>
          </>
        ) : (
          <p className={styles.comments__title}>Нет комментариев</p>
        )}
      </div>
    </main>
  );
};
