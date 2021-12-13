import { useCallback, useEffect, useRef } from 'react';

export default function Page() {
  const workerRef = useRef();

  useEffect(() => {
    workerRef.current = new Worker(new URL('../worker.js', import.meta.url));

    workerRef.current.onmessage = (e) => console.log(e.data);

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const handleWork = useCallback(async () => {
    workerRef.current?.postMessage(Date.now());
  }, []);

  return <button onClick={handleWork}>Run</button>;
}
