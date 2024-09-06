import React from 'react';
import PropTypes from 'prop-types';

function PageComponent({ serverData, movePage }) {
  PageComponent.propTypes = {
    serverData: PropTypes.shape({
      prev: PropTypes.any,
      prevPage: PropTypes.any,
      pageNumList: PropTypes.arrayOf(PropTypes.number), // 예시로 숫자 배열
      current: PropTypes.any,
      next: PropTypes.any,
      nextPage: PropTypes.any,
    }).isRequired,
    movePage: PropTypes.func.isRequired,
  };

  return (
    <div className='m-6 flex justify-center'>
      {serverData.prev ? (
        <div
          className='m-2 p-2 w-16 text-center cursor-pointer font-bold text-blue-400 '
          onClick={() => movePage({ page: serverData.prevPage })}
        >
          Prev{' '}
        </div>
      ) : (
        <></>
      )}

      {serverData.pageNumList.map((pageNum) => (
        <div
          key={pageNum}
          className={`cursor-pointer m-2 p-2 w-12  text-center rounded shadow-md text-white ${serverData.current === pageNum ? 'bg-gray-500' : 'bg-blue-400'}`}
          onClick={() => movePage({ page: pageNum })}
        >
          {pageNum}
        </div>
      ))}

      {serverData.next ? (
        <div
          className='m-2 p-2 w-16 text-center cursor-pointer font-bold text-blue-400'
          onClick={() => movePage({ page: serverData.nextPage })}
        >
          Next
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PageComponent;
