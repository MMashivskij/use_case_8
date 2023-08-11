// ItemList.js
import React, { useState, useEffect } from 'react';
import store from '../store/store';

import './list.css';

const ItemList = () => {
  const [items, setItems] = useState(store.getState().userData);
  console.log(items);

  useEffect(() => {
    // This function is called whenever the store state changes
    const handleStoreChange = () => {
      setItems(store.getState().userData);
    };

    // Subscribe to the store changes
    const unsubscribe = store.subscribe(handleStoreChange);

    // Cleanup: Unsubscribe from the store changes when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
