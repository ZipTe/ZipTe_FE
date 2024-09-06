import React from 'react';
// import { useCallBack } from 'react-router-dom';
import {
  // createSearchParams,
  // useNavigate,
  useParams,
  // useSearchParams,
} from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

function ReadPage() {
  const { tno } = useParams();

  // const [queryParams] = useSearchParams();
  //
  // const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
  // const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;
  //
  // const queryStr = createSearchParams({ page: page, size: size }).toString();
  //
  // const navigate = useNavigate();
  //
  // const moveToModify = useCallback((tno) => {
  //   navigate({
  //     pathname: `/todo/modify/${tno}`,
  //     search: queryStr,
  //   });
  // });
  //
  // const moveToList = useCallback(() => {
  //   navigate({ pathname: `/todo/list`, search: queryStr });
  // }, [page, size]);

  return (
    <div>
      <div className={'text-3xl'}> Todo Read Page{tno} </div>

      <ReadComponent tno={tno} />
    </div>
  );
}

export default ReadPage;
