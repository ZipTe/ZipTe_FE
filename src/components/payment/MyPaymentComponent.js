import React, { useEffect, useState } from 'react';
import { API_SERVER_HOST, getList } from '../../api/ProductAPI';
import './css/ListComponent.css';

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};
const host = API_SERVER_HOST;

function MyPaymentComponent() {
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
      {fetching ? <FetchingModal className='fetching-modal' /> : null}

      <div className='product-list'>
        {serverData.dtoList.map((item, index) => (
          <div
            key={index}
            className='product-card'
            onClick={() => moveToRead(item.product.id)}
          >
            <div className='product-card-content'>
              <div className='product-card-header'>{item.product.id}</div>
              <div className='product-card-details'>
                <div className='product-image'>
                  <img
                    alt='product'
                    className='product-image'
                    src={`${host}/api/product/view/${item.product.uploadFileNames[0]}`}
                  />
                </div>

                <div className='product-info'>
                  <div>이름: {item.product.pname}</div>
                  <div>할인율: {item.discountRate}</div>
                  <div>가격: {item.discountPrice}</div>
                  <div>재고: {item.product.stock}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PageComponent serverData={serverData} movePage={moveToList} />
    </div>
  );
}

export default MyPaymentComponent;
