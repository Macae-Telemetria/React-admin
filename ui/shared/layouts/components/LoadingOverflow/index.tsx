import React from 'react'
import "./styles.css";


export type LoadingOverflowProps = {
  fill?: boolean 
}
const LoadingOverflow: React.FC<LoadingOverflowProps> = (props) => {


  const { fill = false } = props;

  return (
    <div className={`loading-overflow ${fill ? "fill" : ""}`}>
      <span></span>
    </div>
  );
};

export default LoadingOverflow
