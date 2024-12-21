import { API_SERVER_HOST } from '../../api/ProductAPI';
import './css/ReadComponent.css';

const host = API_SERVER_HOST;

function ReadComponent({ product }) {
  return (
    <div className='read-component-container'>
      {/* ReadComponent에서 상품 데이터를 표시 */}
      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 이름</div>
          <div className='product-info-value'>{product.pname}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>가격</div>
          <div className='product-info-value'>{product.price}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 설명</div>
          <div className='product-info-value'>{product.pdesc}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>재고</div>
          <div className='product-info-value'>{product.stock}</div>
        </div>
      </div>

      <div className='image-container'>
        <div className='product-info-label'>사진</div>

        {product.uploadFileNames.map((imgFile, i) => (
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
