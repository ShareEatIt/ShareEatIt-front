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

    const fetchSharingList = async () => {
        setLoading(true);
        try {
            const postType =
                clicked === "전체"
                    ? "ALL"
                    : clicked === "가게"
                    ? "STORE"
                    : "INDIVIDUAL";
            const latitude = currentPosition.latitude; // 예시 위도 (사용자 위치로 교체 가능)
            const longitude = currentPosition.longitude; // 예시 경도 (사용자 위치로 교체 가능)

            const data = await getSharingList(postType, latitude, longitude);
            setSharingList(data);
        } catch (err) {
            console.error("Error fetching sharing list:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSharingList();
    }, [clicked]);

    const handleClick = (item) => {
        setClicked(item);
    };

    const navigate = useNavigate();

    const handlePosetClick = (id) => {
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
                            <S.SerchInput placeholder="검색하세요" />
                        </S.SearchBarContainer>
                    </S.SectionContentContainer>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <ShareList sharingList={sharingList} />
                    )}
                </S.SectionWrapper>
            </S.ContentContainer>
            <S.MapButton onClick={handleMapButtonClick} />
            <S.WriteButton onClick={handleWriteButtonClick} />
        </S.Layout>
    );
};
export default HomePage;
