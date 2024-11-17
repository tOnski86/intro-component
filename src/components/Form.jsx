import Button from './Button';

function Form() {
  return (
    <div className='text-center '>
      <div className='mb-6 '>
        <Button className='bg-violet text-white w-full'>
          <span className='font-medium'>Try it free 7 days</span> then $20/mo.
          thereafter
        </Button>
      </div>

      <form
        action='#'
        className='bg-white rounded-lg p-6 grid grid-cols-1 gap-4 relative after:absolute after:h-full after:w-full after:bg-grey/30 after:top-1.5 after:left-0 after:-z-50 after:rounded-lg'
      >
        <input
          type='text'
          className='border border-grey/20 py-3 px-4 rounded-md'
        />
        <input
          type='text'
          className='border border-grey/20 py-3 px-4 rounded-md'
        />
        <input
          type='text'
          className='border border-grey/20 py-3 px-4 rounded-md'
        />
        <input
          type='text'
          className='border border-grey/20 py-3 px-4 rounded-md'
        />
        <Button className='bg-green text-white uppercase'>
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
