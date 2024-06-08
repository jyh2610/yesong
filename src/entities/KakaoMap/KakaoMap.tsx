'use client';

import React, { useEffect, useRef } from 'react';
import { lat, lng } from './contant';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const loadKakaoMapScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export function KakaoMap() {
  const map = useRef<unknown>(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        await loadKakaoMapScript();
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 4
          };
          map.current = new window.kakao.maps.Map(container, options);

          const markerPosition = new window.kakao.maps.LatLng(lat, lng);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition
          });
          marker.setMap(map.current);
        });
      } catch (error) {
        console.error('카카오맵 API 스크립트 로딩 중 오류 발생:', error);
      }
    };

    loadMap();
  }, []);

  return <div id="map" className="w-full h-[550px]"></div>;
}
