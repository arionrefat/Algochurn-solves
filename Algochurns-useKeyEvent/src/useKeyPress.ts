import { useState, useEffect } from 'react';

export default function useKeyPress(targetKey: any) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', ({ key }: any) => {
      if (key == targetKey) {
        setKeyPressed(true);
      }
    });
    document.addEventListener('keyup', ({ key }: any) => {
      if (key == targetKey) {
        setKeyPressed(false);
      }
    });

    return () => {
      // cleanup function to make sure there is not eventLister added before
      document.removeEventListener('keydown', ({ key }: any) => {
        if (key == targetKey) {
          setKeyPressed(true);
        }
      });
      document.removeEventListener('keyup', ({ key }: any) => {
        if (key == targetKey) {
          setKeyPressed(false);
        }
      });
    };
  });
  return keyPressed;
}
