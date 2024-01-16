
import React, { useState } from 'react';


const Pagination = () => {
   const [page, setPage] = useState(1);
    const Previous = () => {
        if (page !== 1) {
            setPage(page - 1);
          } else {
            setPage(page);
          }
    }
    const Next = () => {
        if (page < 10) {
          setPage(page + 1);
        }
      };
  return (
    <div className='flex justify-center  gap-4'>
        <button
        onClick={Previous()}
         className='border-2 border-purple-600 rounded px-4 py-2 text-white'>Previous</button>
        <button 
        onClick={Next()}
        className='border-2 border-purple-600 rounded px-4 py-2 text-white'>Next</button>
    </div>
  )
}

export default Pagination;