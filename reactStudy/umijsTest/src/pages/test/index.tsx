import React from 'react';

export default (props) => {

  return (
    <div>
      <h1>Page test</h1>
      <>
        {props.children}
      </>
    </div>
  );
}
