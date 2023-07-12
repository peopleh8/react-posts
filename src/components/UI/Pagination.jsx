import React from 'react'
import '../../styles/UI/Pagination.css'

const Pagination = ({ pagination, setPagination }) => {
  return (
    <div className='pagination'>
      {
        new Array(pagination.totalPages).fill('', 0, pagination.totalPages).map((_, index) => 
          <div 
            className={`page ${pagination.page === index + 1 ? 'current' : ''}`}
            onClick={() => setPagination({...pagination, page: index + 1})}
          >
            {index + 1}
          </div>
        )
      }
    </div>
  )
}

export default Pagination