import { ChangeEvent, useCallback, useState } from 'react';

type Hook = {
  text: string;
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

export default function useInput(initialValue?: string): Hook {
  const [text, setText] = useState(initialValue);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }, []);
  const onClear = useCallback((): void => {
    setText('');
  }, []);
  return { text, onChange, onClear };
}
