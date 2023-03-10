import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useKeyPress from './useKeyPress';
import './App.css';

export default function App() {
  const shiftKey = useKeyPress('Shift');
  const enterKey = useKeyPress('Enter');

  const showToast = () => {
    toast.success('Enter and Shift key pressed');
    console.log('hello')
  };

  // using use effect here because of
  useEffect(() => {
    if (shiftKey && enterKey) {
      showToast();
    }
  }, [shiftKey, enterKey]);

  return (
    <div>
      <Toaster />
      <div className='container'>
        <h1>useKeyPress</h1>
        <span>Algochurn</span>
        <p>Read the description for more information</p>
      </div>
    </div>
  );
}
