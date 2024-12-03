import React, { useEffect, useRef, useState } from "react";
import { getPostDetail } from "../../../api/sharing";
import { useParams } from "react-router-dom";
import { S } from "./map.style";
import axios from "axios";

// 기본 나눔장소 나의 위치
export function Map() {
    const [currentPosition, setCurrentPosition] = useState(null); // 현재 위치 저장
    const [mapList, setMapList] = useState([]);

    const fetchMapList = async (lat, lng) => {
        try {
            const token = JSON.parse(
                localStorage.getItem("token")
            )?.accessToken;
            console.log(lat);
            console.log(lng);
            const response = await axios.get("/map/list", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                params: {
                    latitude: lat,
                    longitude: lng,
                },
            });
            setMapList(response.data.data.mapList || []);
        } catch (error) {
            console.error(
                "나눔글 위치 데이터를 가져오는 데 실패했습니다.",
                error
            );
        }
    };

    // 카카오 API 호출 및 지도 초기화
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(script);

        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                // 현재 위치 가져오기
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const lng = position.coords.longitude;

                            setCurrentPosition({ lat, lng });

                            const container = document.getElementById("map");
                            const options = {
                                center: new window.kakao.maps.LatLng(lat, lng), // 현재 위치를 중심으로 설정
                                level: 3, // 확대 레벨
                            };

                            // 지도 생성
                            const map = new window.kakao.maps.Map(
                                container,
                                options
                            );

                            // 현재 위치 마커 추가
                            new window.kakao.maps.Marker({
                                position: new window.kakao.maps.LatLng(
                                    lat,
                                    lng
                                ),
                                map, // 지도 객체
                                title: "현재 위치", // 마커 제목
                            });
                            fetchMapList(lat, lng).then(() => {
                                // 가져온 나눔글 위치에 마커 추가
                                mapList.forEach((item) => {
                                    const markerPosition =
                                        new window.kakao.maps.LatLng(
                                            item.location.latitude,
                                            item.location.longitude
                                        );

                                    // 마커 생성
                                    const marker = new window.kakao.maps.Marker(
                                        {
                                            position: markerPosition,
                                            map, // 지도 객체
                                            title: item.category, // 마커 제목
                                        }
                                    );

                                    // 인포윈도우 생성
                                    const infoWindow =
                                        new window.kakao.maps.InfoWindow({
                                            content: `<div style="padding:5px;font-size:12px;">${item.location.addressSt}</div>`,
                                        });

                                    // 마커 클릭 시 인포윈도우 열기
                                    window.kakao.maps.event.addListener(
                                        marker,
                                        "click",
                                        () => {
                                            infoWindow.open(map, marker);
                                        }
                                    );
                                });
                            });
                        },

                        (error) => {
                            console.error(
                                "현재 위치를 가져올 수 없습니다.",
                                error
                            );

                            // 기본 위치 설정 (서울)
                            const defaultLat = 37.5665;
                            const defaultLng = 126.978;

                            setCurrentPosition({
                                lat: defaultLat,
                                lng: defaultLng,
                            });

                            const container = document.getElementById("map");
                            const options = {
                                center: new window.kakao.maps.LatLng(
                                    defaultLat,
                                    defaultLng
                                ),
                                level: 3,
                            };

                            // 지도 생성
                            new window.kakao.maps.Map(container, options);
                        }
                    );
                } else {
                    console.error("Geolocation을 지원하지 않습니다.");

                    // 기본 위치 설정 (서울)
                    const defaultLat = 37.5665;
                    const defaultLng = 126.978;

                    setCurrentPosition({ lat: defaultLat, lng: defaultLng });

                    const container = document.getElementById("map");
                    const options = {
                        center: new window.kakao.maps.LatLng(
                            defaultLat,
                            defaultLng
                        ),
                        level: 3,
                    };

                    // 지도 생성
                    new window.kakao.maps.Map(container, options);
                }
            });
        });

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <S.Layout>
            <div
                id="map"
                style={{
                    width: "100vw",
                    height: "100vh",
                    border: "1px solid #ddd",
                }}
            >
                {!currentPosition && <p>현재 위치를 불러오는 중입니다...</p>}
            </div>
        </S.Layout>
    );
}

export const SearchMap = ({ onPlaceSelect }) => {
    const mapRef = useRef(null); // 지도 객체를 저장
    const [keyword, setKeyword] = useState(""); // 검색 키워드 상태
    const [places, setPlaces] = useState([]); // 검색 결과 상태
    const [pagination, setPagination] = useState(null); // 페이지네이션 상태
    const markers = useRef([]); // 마커 리스트를 Ref로 관리
    const geocoder = useRef(null); // Geocoder 객체를 저장

    // 지도 초기화
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false&libraries=services`;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(
                        37.566826,
                        126.9786567
                    ), // 초기 위치: 서울
                    level: 3,
                };
                mapRef.current = new window.kakao.maps.Map(container, options); // 지도 객체 저장
                geocoder.current = new window.kakao.maps.services.Geocoder(); // Geocoder 객체 생성
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    // 키워드 검색 함수
    const searchPlaces = () => {
        if (!mapRef.current || !keyword.trim()) {
            alert("키워드를 입력해주세요!");
            return;
        }

        const placesService = new window.kakao.maps.services.Places();

        placesService.keywordSearch(keyword, (data, status, pagination) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setPlaces(data); // 검색 결과 저장
                setPagination(pagination); // 페이지네이션 저장
                displayPlaces(data); // 검색 결과 표시
            } else if (
                status === window.kakao.maps.services.Status.ZERO_RESULT
            ) {
                alert("검색 결과가 없습니다.");
            } else {
                alert("검색 중 오류가 발생했습니다.");
            }
        });
    };

    // 검색 결과 및 마커 표시
    const displayPlaces = (places) => {
        // 기존 마커 제거
        markers.current.forEach((marker) => marker.setMap(null));
        markers.current = [];

        const bounds = new window.kakao.maps.LatLngBounds();

        places.forEach((place, index) => {
            const position = new window.kakao.maps.LatLng(place.y, place.x);
            const marker = addMarker(position, index, place);

            markers.current.push(marker);
            bounds.extend(position);
        });

        mapRef.current.setBounds(bounds); // 지도의 중심과 확대 레벨 조정
    };

    // 마커 생성 함수
    const addMarker = (position, idx, place) => {
        const imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
        const imageSize = new window.kakao.maps.Size(36, 37);
        const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691),
            spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
            offset: new window.kakao.maps.Point(13, 37),
        };
        const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imgOptions
        );
        const marker = new window.kakao.maps.Marker({
            position,
            image: markerImage,
        });
        marker.setMap(mapRef.current);

        // 마커 클릭 이벤트 추가
        window.kakao.maps.event.addListener(marker, "click", () => {
            // 클릭한 위치의 주소 검색
            geocoder.current.coord2Address(
                position.getLng(),
                position.getLat(),
                (result, status) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const address =
                            result[0]?.road_address?.address_name ||
                            result[0]?.address?.address_name;

                        if (address) {
                            setKeyword(address); // 검색바에 주소 설정
                            if (onPlaceSelect) {
                                onPlaceSelect({
                                    kakaoLocationCode: place.id, // 장소의 고유 ID 추가
                                    title: place.place_name,
                                    address,
                                    latitude: position.getLat(),
                                    longitude: position.getLng(),
                                });
                            }
                        } else {
                            alert("주소를 가져올 수 없습니다.");
                        }
                    }
                }
            );

            // 클릭한 마커에 인포윈도우 표시
            const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="padding:5px;">${place.place_name}</div>`,
            });
            infowindow.open(mapRef.current, marker);
        });

        return marker;
    };

    // 페이지네이션 처리
    const handlePageClick = (page) => {
        if (pagination) {
            pagination.gotoPage(page);
        }
    };

    return (
        <S.Layout>
            <S.SearchBarWrapper className="option">
                <S.SearchForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        searchPlaces(); // 검색 실행
                    }}
                >
                    <S.SerchBarIcon />
                    <S.SearchInput
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)} // 키워드 상태 업데이트
                    />
                </S.SearchForm>
            </S.SearchBarWrapper>

            <S.MapWrapper
                id="map"
                style={{
                    width: "100%",
                    height: "500px",
                    position: "relative",
                    overflow: "hidden",
                }}
            ></S.MapWrapper>
        </S.Layout>
    );
};

//게시글의 지도 표시
export const MapPostDetail = () => {
    const { id } = useParams();
    const [latitude, setLatitude] = useState(null); // 경도
    const [longitude, setLongitude] = useState(null); // 위도

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPostDetail(id); // API 호출
                console.log("불러온 데이터:", response);

                // API 데이터에서 경도/위도 추출
                const location = response?.data?.data?.location;
                console.log("위치 받아옴: ", location.latitude);
                console.log(location);
                console.log(location.latitude);
                console.log(location.longitude);

                if (location) {
                    setLatitude(location.latitude);
                    setLongitude(location.longitude);
                }
            } catch (error) {
                console.error("API 호출 오류:", error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (latitude && longitude) {
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
            document.head.appendChild(script);

            script.onload = () => {
                window.kakao.maps.load(() => {
                    const container = document.getElementById("map");
                    const options = {
                        center: new window.kakao.maps.LatLng(
                            latitude,
                            longitude
                        ), // API 데이터로 중심 설정
                        level: 3, // 확대 레벨
                    };

                    const map = new window.kakao.maps.Map(container, options);

                    // 마커 추가
                    new window.kakao.maps.Marker({
                        position: new window.kakao.maps.LatLng(
                            latitude,
                            longitude
                        ),
                        map,
                        title: "나눔 장소",
                    });
                });
            };

            return () => {
                document.head.removeChild(script); // 메모리 누수 방지
            };
        }
    }, [latitude, longitude]);

    return (
        <div
            id="map"
            style={{
                width: "100%",
                height: "400px",
                border: "1px solid #ddd",
            }}
        >
            {!latitude || !longitude ? (
                <p>지도 데이터를 불러오는 중입니다...</p>
            ) : null}
        </div>
    );
};
