import { useState, useEffect } from "react";
import BackButton from "../../../components/common/BackButton/backButton";
import BottomButton from "../../../components/common/BottomButton/bottomButton";
import NavigationBar from "../../../components/common/Navigition/navigationBar";
import ImgSlider from "../../../components/home/ImgSlider";
import { S } from "./homePage.style";
import ShareList from "../../../components/common/ShareList/shareList";
import { useNavigate } from "react-router-dom";
import { getSharingList } from "../../../api/sharing";
import { getCurrentPosition } from "../../../api/map";
const HomePage = () => {
    const menuList = ["전체", "가게", "개인"];
    const colorList = [
        "var(--yellow-90)",
        "var(--yellow-75)",
        "var(--yellow-50)",
    ];
    const [clicked, setClicked] = useState(menuList[0]);
    const [sharingList, setSharingList] = useState([]); // 나눔글 데이터
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [currentPosition, setCurrentPosition] = useState(null);

    const [postType, setPostType] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [searchText, setSearchText] = useState(""); // 검색 텍스트
    const [filteredSharingList, setFilteredSharingList] = useState([]); // 검색 결과 데이터

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const position = await getCurrentPosition();
                setCurrentPosition(position);
                console.log("현재 위치:", position);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchLocation();
    }, []);

    useEffect(() => {
        if (currentPosition) {
            fetchSharingList();
        }
    }, [clicked, currentPosition]);
    //유저 정보조회 API
    const fetchSharingList = async () => {
        setLoading(true);
        console.log("fetchSharingList: 함수 호출됨");
        console.log("fetchSharingList: 현재 위치:", currentPosition);
        try {
            const postType =
                clicked === "전체"
                    ? "ALL"
                    : clicked === "가게"
                    ? "STORE"
                    : "INDIVIDUAL";

            setLatitude(currentPosition.latitude);
            setLongitude(currentPosition.longitude);

            console.log("fetchSharingList: API 호출");
            console.log("파라미터:", { postType, latitude, longitude });
            console.log("경도:", longitude);
            const response = await getSharingList(
                postType,
                currentPosition.latitude,
                currentPosition.longitude
            );

            console.log("나눔글 조회 결과 호출:", response);
            // 데이터 설정
            const postList = response.data.data.postList || [];
            setSharingList(postList);
            setFilteredSharingList(postList);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);

        if (searchValue.trim() === "") {
            setFilteredSharingList(sharingList);
        } else {
            const filtered = sharingList.filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredSharingList(filtered);
        }
    };

    useEffect(() => {
        fetchSharingList();
    }, [clicked]);

    const handleClick = (item) => {
        setClicked(item);
    };

    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/postdetail/${id}`);
    };

    const handleWriteButtonClick = () => {
        navigate("/createpost"); // 글 작성 페이지로 이동
    };

    const handleMapButtonClick = () => {
        navigate("/mappage"); // 글 작성 페이지로 이동
    };

    return (
        <S.Layout>
            <NavigationBar />
            <ImgSlider />
            <S.ContentContainer>
                <S.SectionContainer>
                    {menuList.map((item, index) => (
                        <S.SectionClassificationButton
                            key={index}
                            onClick={() => handleClick(item)}
                            $isActive={clicked === item}
                            style={{ backgroundColor: colorList[index] }}
                        >
                            {item}
                        </S.SectionClassificationButton>
                    ))}
                </S.SectionContainer>
                <S.SectionWrapper>
                    <S.SectionContentContainer>
                        <S.SearchBarContainer>
                            <S.SerchBarIcon />
                            <S.SerchInput
                                placeholder="검색하세요"
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                        </S.SearchBarContainer>
                    </S.SectionContentContainer>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <ShareList
                            sharingList={filteredSharingList}
                            onClick={handlePostClick}
                        />
                    )}
                </S.SectionWrapper>
            </S.ContentContainer>
            <S.MapButton onClick={handleMapButtonClick} />
            <S.WriteButton onClick={handleWriteButtonClick} />
        </S.Layout>
    );
};
export default HomePage;
