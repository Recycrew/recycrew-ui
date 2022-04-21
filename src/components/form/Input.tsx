import { FC } from 'react';

interface Props {
  label: string;
  onChange: (e: any) => void;
  type: 'email' | 'password' | 'text';
  value: string;
}

const SignUpForm: FC<Props> = ({ label, onChange, type, value }) => {
  return (
    <div>
      <label htmlFor={type} className="block text-sm font-light">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={type}
          name={type}
          type={type}
          autoComplete={type}
          required
          onChange={(e) => onChange(e.target.value)}
          className="
            block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm 
            focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
          value={value}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
