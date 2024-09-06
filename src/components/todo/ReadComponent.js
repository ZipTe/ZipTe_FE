import React, { useEffect, useState } from 'react';
import { getOne } from '../../api/todoApi';
import useCustomMove from '../../hooks/UseCustomMove';

const initState = {
  tno: 0,
  title: '',
  content: '',
  localDate: null,
  complete: false,
};

function ReadComponent(tno) {
  const [todo, setTodo] = useState(initState);
  const { moveToList } = useCustomMove();
  const { moveToModify } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div className='border-2 bg-white mt-10 m-2 p-4'>
      {makeDiv('Tno', todo.tno)}
      {makeDiv('Title', todo.title)}
      {makeDiv('content', todo.content)}
      {makeDiv('Local Date', todo.localDate)}
      {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}

      {/* buttons.........start */}
      <div className='flex justify-end p-4'>
        <button
          type='button'
          className='rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
          onClick={() => moveToList()}
        >
          List
        </button>
        <button
          type='button'
          className='rounded p-4 m-2 text-xl w-32 text-white bg-red-500'
          onClick={() => moveToModify(tno.tno)}
        >
          Modify
        </button>
      </div>
    </div>
  );
}

const makeDiv = (title, value) => {
  return (
    <div className='flex justify-center'>
      <div className='relative mb-4 flex w-full max-w-4xl items-stretch'>
        {/* 왼쪽 텍스트: 고정된 너비 설정 */}
        <div
          className='p-6 text-right font-bold bg-gray-200 border-r border-gray-300'
          style={{ width: '200px' }}
        >
          {title}
        </div>
        {/* 오른쪽 값: 나머지 공간을 차지 */}
        <div className='flex-1 p-6 rounded-r border border-solid shadow-md'>
          {value}
        </div>
      </div>
    </div>
  );
};

export default ReadComponent;
