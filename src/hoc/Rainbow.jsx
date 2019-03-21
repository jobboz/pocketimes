import React from 'react';


const Rainbow = (WrappedComponent) => {
    const colours = ['pink', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomColours = colours[Math.floor(Math.random()* 5)]
    const className = randomColours + '-text';
    //math.floor used for converting decimal numbers to even or whole numbers

     return (props) => {
         return (
         <div className={className}>
          <WrappedComponent {...props} />
         </div>
         )
     }
}


export default Rainbow;