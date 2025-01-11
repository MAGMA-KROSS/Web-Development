import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About Us" />
    <div className='container my-3'>
      <TextForm text = "Enter your text" />
    </div>
    </>
  );
}

export default App;