import React, { useEffect, useState } from 'react';
import useCustomMove from '../../hooks/UseCustomMove';
import FetchingModal from '../common/FetchingModal';
import PageComponent from '../common/PageComponent';
import { API_SERVER_HOST, getList } from '../../api/ProductAPI';
import './css/ListComponent.css';

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDto: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};
const host = API_SERVER_HOST;

function ListComponent() {
  const { moveToList, moveToRead, page, size } = useCustomMove();

  const [serverData, setServerData] = useState(initState);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    getList({ page, size }).then((response) => {
      const data = response.data;
      const mergedData = { ...initState, ...data };
      console.log(mergedData);
      setServerData(mergedData);
      setFetching(false);
    });
  }, [page, size]);

  return (
    <div className='list-container'>
      {fetching ? <FetchingModal className='fetching-modal' /> : <></>}

      <div className='product-list'>
        {serverData.dtoList.map((product) => (
          <div
            key={product.id}
            className='product-card'
            onClick={() => moveToRead(product.id)}
          >
            <div className='product-card-content'>
              <div className='product-card-header'>{product.id}</div>
              <div className='product-card-details'>
                <div className='product-image'>
                  <img
                    alt='product'
                    className='product-image'
                    src={`${host}/api/product/view/${product.uploadFileNames[0]}`}
                  />
                </div>

                <div className='product-info'>
                  <div>이름: {product.pname}</div>
                  <div>가격: {product.price}</div>
                  <div>재고: {product.stock}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PageComponent
        serverData={serverData}
        movePage={moveToList}
      ></PageComponent>
    </div>
  );
}

export default ListComponent;
