import React from 'react';
import '../App.css';

const CustomerList = ({ customerList = [], onItemPress, handleChangeCheckbox }) => {
  return (
    <div style={{height: '500px', overflowY: 'scroll'}}>
      {customerList.map((data, index) => {
        return (
          <div key={data.name + '_' + index} className="list-item" onClick={() => onItemPress(data, index)}>
            <input
              type="checkbox"
              checked={data.isSelected}
              onChange={handleChangeCheckbox}
            />
            <h3>{data.name} (Spent amount $ {data.dollar_spent})</h3>
          </div>
        )
      })}
    </div>
  );
}

export default CustomerList