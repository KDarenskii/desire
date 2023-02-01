import React from 'react';
import RingLoader from "react-spinners/RingLoader";

import "./styles.scss";

const PageLoader: React.FC = () => {
  return (
    <div className="page-loader">
        <RingLoader 
            className='page-loader__spinner'
            color='#000'
            size={90}
        />
    </div>
  )
}

export default PageLoader