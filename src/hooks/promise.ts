import { DependencyList, useEffect, useState } from 'react';

const usePromise = <T>(
  callback: () => Promise<T>,
  deps: DependencyList
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [response, setResponse] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        const data = await callback();
        setResponse(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, deps);

  return [response, setResponse];
};

export default usePromise;
