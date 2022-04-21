import { FC } from 'react';
import { PostForm } from '../components';

const Wall: FC = () => {
  document.body.style.background = '#f3f4f6';

  return (
    <div className="my-8">
      <PostForm />
    </div>
  );
};

export default Wall;
