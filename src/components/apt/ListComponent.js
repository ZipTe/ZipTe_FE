import React, { useEffect, useState } from 'react';
import { getAptInfo } from "../../api/AptAPI";

const initState = {
    kaptName: '',
    kaptCcompany: '',
    codeStr: '',
    convenientFacility: '',
    educationFacility: '',
    kaptdWtimebus: '',
    kaptdWtimesub: '',
    subwayLine: '',
    subwayStation: '',
    welfareFacility: '',
    kaptdPcnt: 0,
    kaptdPcntu: 0,
    kaptdEcnt: 0,
    undergroundElChargerCnt: 0
};

function ListComponent({ apartment_name }) {
    const [apartmentData, setApartmentData] = useState({ ...initState });

    useEffect(() => {
        getAptInfo(apartment_name).then(data => {
            setApartmentData(data); // JSON 구조에 맞춰 데이터를 설정
            console.log(data);
        });
    }, [apartment_name]);

    return (
        <div>
            <h2>{apartmentData.kaptName}</h2>
            <p><strong>관리 회사:</strong> {apartmentData.kaptCcompany}</p>
            <p><strong>구조:</strong> {apartmentData.codeStr}</p>
            <p><strong>편의시설:</strong> {apartmentData.convenientFacility}</p>
            <p><strong>교육시설:</strong> {apartmentData.educationFacility}</p>
            <p><strong>버스 도착 시간:</strong> {apartmentData.kaptdWtimebus}</p>
            <p><strong>지하철 도착 시간:</strong> {apartmentData.kaptdWtimesub}</p>
            <p><strong>지하철 노선:</strong> {apartmentData.subwayLine}</p>
            <p><strong>지하철역:</strong> {apartmentData.subwayStation}</p>
            <p><strong>복지시설:</strong> {apartmentData.welfareFacility}</p>
            <p><strong>지하 주차장 충전기 수:</strong> {apartmentData.undergroundElChargerCnt}</p>
            <p><strong>주차 가능 대수:</strong> {apartmentData.kaptdPcnt} (지상: {apartmentData.kaptdPcntu})</p>
            <p><strong>엘리베이터 수:</strong> {apartmentData.kaptdEcnt}</p>
        </div>
    );
}

export default ListComponent;
