import { useState, useCallback } from 'react';

const usePlanState = () => {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleDateChange = useCallback((e) => {
    setDate(e.target.value);
  }, [setDate]);

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, [setText]);

  const handleAddItem = useCallback(() => {
    if (date && text) {
      setItems((prevItems) => [...prevItems, { date, text }]);
      setDate('');
      setText('');
    }
  }, [date, text, setItems, setDate, setText]);

  return {
    date,
    text,
    items,
    setDate,
    setText,
    setItems,
    handleDateChange,
    handleTextChange,
    handleAddItem,
  };
};

export default usePlanState;