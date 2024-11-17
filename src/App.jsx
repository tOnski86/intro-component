import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-6 md:max-w-4xl md:items-center md:gap-6 mt-24 md:mt-0 mb-16 md:mb-0'>
      <Header />
      <Form />
    </div>
  );
}

export default App;
