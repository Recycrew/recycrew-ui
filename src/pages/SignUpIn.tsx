import { FC } from 'react';
import { Icons, SignInForm, SignUpForm } from '../components';

interface Props {
  signUp?: boolean;
}

const SignUpIn: FC<Props> = ({ signUp }) => {
  document.body.style.background = 'white';

  return (
    <div className="flex min-h-screen">
      {signUp ? <SignUpForm /> : <SignInForm />}
      <Icons />
    </div>
  );
};

export default SignUpIn;
