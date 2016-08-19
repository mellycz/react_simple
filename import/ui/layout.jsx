//
import React from 'react';

var Layout = function({content}) {
  return (
    <div>
{content()}
    </div>
  )
};

export default Layout;
