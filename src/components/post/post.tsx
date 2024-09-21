import { FC, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../services/thunks/postsThunks';
import { useDispatch, useSelector } from '../../services/store';
import { postsSelectors } from '../../services/slices/postsSlice';
import { Preloader } from '../ui/preloader/preloader';

export const Post: FC = () => {
  const params = useParams();
  const postId = Number(params.postId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, []);

  const post = useSelector(postsSelectors.selectCurrentPost);

  if (!post) {
    return <Preloader />;
  }

  const htmlString = post?.text!;
  const sanitizedHtml = DOMPurify.sanitize(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>;
};
