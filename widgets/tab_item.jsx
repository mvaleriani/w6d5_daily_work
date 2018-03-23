import React from 'react';

const TabItem = ({title, content}) => {
  return (
    <div className="tab">
      <h1 className={title}>
        {title}
      </h1>
      <p>{content}</p>
    </div>
  );
};


export default TabItem;
