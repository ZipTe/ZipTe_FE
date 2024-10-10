import React from 'react';
import BasicLayout from '../layouts/BasicLayout';

function AboutPage() {
  return (
    <BasicLayout>
      <div className='w-full font-extrabold text-3xl'>AboutPage</div>
      <div>
        {' '}
        ZIpTE는 집 값이 비싸진 요즘 세상에, 본인과 가장 비슷하게 최적의 거주지를
        추천하고자 만든 웹사이트 입니다.
      </div>
    </BasicLayout>
  );
}

export default AboutPage;
