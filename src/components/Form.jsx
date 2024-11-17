import { useEffect, useState } from 'react';

import Button from './Button';
import Error from './Error';

import iconError from '/icon-error.svg';

const VALID_NAME = str => /^[a-z ,.'-]+$/i.test(str);
const VALID_EMAIL = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

function Form() {
  const [input, setInput] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleValidate(input) {
    const errors = {};

    if (input.first === '') {
      errors.first = 'First name cannot be empty';
    } else if (!VALID_NAME(input.first)) {
      errors.first = 'Invalid first name';
    }

    if (input.last === '') {
      errors.last = 'Last name cannot be empty';
    } else if (!VALID_NAME(input.last)) {
      errors.last = 'Invalid last name';
    }

    if (input.email === '') {
      errors.email = 'Email cannot be empty';
    } else if (!VALID_EMAIL(input.email)) {
      errors.email = 'Looks like this is not an email';
    }

    if (input.password === '') {
      errors.password = 'Password cannot be empty';
    } else if (input.password.length < 8) {
      errors.password = 'Password is too short. Minimum 8 characters.';
    }

    return errors;
  }

  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(handleValidate(input));
    setSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      setSuccess(true);
      setInput({
        first: '',
        last: '',
        email: '',
        password: '',
      });
    }
  }, [errors, submit]);

  return (
    <div className='text-center '>
      <div className='mb-6 '>
        <Button
          disabled
          className='bg-violet text-white w-full outline-none cursor-default'
        >
          {success ? (
            <p className='animate-slideLeft'>
              You have successfully claimed your free trial!
            </p>
          ) : (
            <p>
              <span className='font-medium'>Try it free 7 days</span> then
              $20/mo. thereafter
            </p>
          )}
        </Button>
      </div>

      <form
        onSubmit={handleSubmit}
        className='bg-white rounded-lg p-6 sm:p-10 grid grid-cols-1 gap-4 sm:gap-6 relative after:absolute after:h-full after:w-full after:bg-grey/30 after:top-1.5 after:left-0 after:-z-50 after:rounded-lg'
      >
        <div>
          {/* first name */}
          <div className='relative'>
            <input
              disabled={success}
              placeholder='First Name'
              autoFocus={true}
              type='text'
              name='first'
              value={input.first}
              onChange={handleInput}
              className={`border-2 border-grey/20 py-3 px-4 rounded-md  focus:outline-2 transition-colors placeholder:text-grey w-full ${
                !errors.first
                  ? 'focus:outline-violet/80 '
                  : 'focus:outline-red/80 border-red/80 border-2'
              } ${success ? 'bg-grey/30 placeholder:text-grey/20' : ''}`}
            />
            {errors.first && (
              <img
                src={iconError}
                alt='error icon'
                className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2'
              />
            )}
          </div>
          {errors.first && <Error message={errors.first} />}
        </div>

        {/* last name */}
        <div>
          <div className='relative'>
            <input
              disabled={success}
              placeholder='Last Name'
              type='text'
              name='last'
              value={input.last}
              onChange={handleInput}
              className={`border-2 border-grey/20 py-3 px-4 rounded-md  focus:outline-2 transition-colors placeholder:text-grey w-full ${
                !errors.last
                  ? 'focus:outline-violet/80 '
                  : 'focus:outline-red/80 border-red/80 border-2'
              } ${success ? 'bg-grey/30 placeholder:text-grey/20' : ''}`}
            />
            {errors.last && (
              <img
                src={iconError}
                alt='error icon'
                className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2'
              />
            )}
          </div>
          {errors.last && <Error message={errors.last} />}
        </div>

        {/* email address */}
        <div>
          <div className='relative'>
            <input
              disabled={success}
              placeholder='Email Address'
              type='text'
              name='email'
              value={input.email}
              onChange={handleInput}
              className={`border-2 border-grey/20 py-3 px-4 rounded-md  focus:outline-2 transition-colors placeholder:text-grey w-full ${
                !errors.email
                  ? 'focus:outline-violet/80 '
                  : 'focus:outline-red/80 border-red/80 border-2'
              } ${success ? 'bg-grey/30 placeholder:text-grey/20' : ''}`}
            />
            {errors.email && (
              <img
                src={iconError}
                alt='error icon'
                className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2'
              />
            )}
          </div>
          {errors.email && <Error message={errors.email} />}
        </div>

        {/* password */}
        <div>
          <div className='relative'>
            <input
              disabled={success}
              placeholder='Password'
              type='password'
              name='password'
              value={input.password}
              onChange={handleInput}
              className={`border-2 border-grey/20 py-3 px-4 rounded-md  focus:outline-2 transition-colors placeholder:text-grey w-full ${
                !errors.password
                  ? 'focus:outline-violet/80 '
                  : 'focus:outline-red/80 border-red/80 border-2'
              } ${success ? 'bg-grey/30 placeholder:text-grey/20' : ''}`}
            />
            {errors.password && (
              <img
                src={iconError}
                alt='error icon'
                className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2'
              />
            )}
          </div>
          {errors.password && <Error message={errors.password} />}
        </div>
        <Button
          disabled={success}
          className={`bg-green text-white uppercase focus:ring focus:ring-green/50 outline-none ${
            success ? 'cursor-not-allowed' : ''
          }`}
        >
          Claim your free trial
        </Button>

        <footer className='text-xs text-grey/50'>
          By clicking the button, you are agreeing to our
          <span className='font-semibold text-red'> Terms and Services</span>
        </footer>
      </form>
    </div>
  );
}

export default Form;
