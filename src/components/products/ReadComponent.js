import { API_SERVER_HOST } from '../../api/ProductAPI';
import './css/ReadComponent.css';

const host = API_SERVER_HOST;

function ReadComponent({ serverData }) {
  return (
    <div className='read-component-container'>
      {/* ReadComponent에서 상품 데이터를 표시 */}
      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>카테고리</div>
          <div className='product-info-value'>
            {serverData.category?.name || '정보 없음'}
          </div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 이름</div>
          <div className='product-info-value'>
            {serverData.product?.pname || '정보 없음'}
          </div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>정상 판매가격</div>
          <div className='product-info-value'>
            {serverData.product?.price || '정보 없음'}
          </div>
          <div className='product-info-label'>할인 퍼센트</div>
          <div className='product-info-value'>
            {serverData.discountRate || '0'}
          </div>
          <div className='product-info-label'>가격</div>
          <div className='product-info-value'>
            {serverData.discountPrice || '정보 없음'}
          </div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 설명</div>
          <div className='product-info-value'>
            {serverData.product?.pdesc || '정보 없음'}
          </div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>재고</div>
          <div className='product-info-value'>
            {serverData.product?.stock || '정보 없음'}
          </div>
        </div>
      </div>

      <div className='image-container'>
        <div className='product-info-label'>사진</div>

        {serverData.product.uploadFileNames.map((imgFile, i) => (
          <img
            alt='product'
            key={i}
            src={`${host}/api/product/view/${imgFile}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ReadComponent;
