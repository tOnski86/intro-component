import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-6 md:max-w-5xl md:items-center md:gap-8 mt-24 md:mt-6 mb-16 md:mb-6 z-1'>
      <Header />
      <Form />
    </div>
  );
}

export default App;
