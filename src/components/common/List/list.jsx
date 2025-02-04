import { useState, useEffect } from "react";
import { S } from "../../../pages/home/homePage/homePage.style";
import ShareList from "../../../components/common/ShareList/shareList";
import { useNavigate } from "react-router-dom";
import { getParticipationList } from "../../../api/participation";
import { getSharingList } from "../../../api/sharing";
import { getMemberInfo } from "../../../api/member";
export const List = () => {
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

    const [participations, setParticipations] = useState([]);

    useEffect(() => {
        const fetchParticipations = async () => {
            try {
                const data = await getParticipationList();
                setParticipations(data.data.participatedPosts); // 참여 목록 저장
            } catch (error) {
                console.error("참여 목록을 불러오는 데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchParticipations();
    }, []);

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
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <ShareList
                            sharingList={participations} // 참여 목록 데이터 전달
                            onClick={handlePostClick}
                        />
                    )}
                </S.SectionWrapper>
            </S.ContentContainer>
        </S.Layout>
    );
};

export const GiveList = () => {
    const menuList = ["전체", "가게", "개인"];
    const colorList = [
        "var(--yellow-90)",
        "var(--yellow-75)",
        "var(--yellow-50)",
    ];
    const [clicked, setClicked] = useState(menuList[0]);
    const [sharingList, setSharingList] = useState([]); // 나눔글 데이터
    const [loading, setLoading] = useState(true); // 로딩 상태

    const [userId, setUserId] = useState(null); // 현재 로그인한 사용자 ID
    const [participations, setParticipations] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    // 현재 사용자 정보와 게시글 데이터를 가져오는 함수
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfoResponse = await getMemberInfo();
                const currentUserNickname = userInfoResponse.data.data.nickname; // 사용자 닉네임 추출

                // 2. 게시글 리스트 가져오기
                const sharingListResponse = await getSharingList(
                    "ALL",
                    37.5618588,
                    126.9468339
                );
                const allPosts = sharingListResponse.data.data.postList;

                const filteredPosts = allPosts.filter(
                    (post) => post.nickname === currentUserNickname
                );
                setMyPosts(filteredPosts);
            } catch (error) {
                console.error("데이터를 가져오는 데 실패했습니다:", error);
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };

        fetchData();
    }, []);

    const handleClick = (item) => {
        setClicked(item);
    };

    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/postdetail/${id}`);
    };

    return (
        <S.Layout>
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
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : myPosts.length > 0 ? (
                        <ShareList
                            sharingList={myPosts}
                            onClick={handlePostClick}
                        />
                    ) : (
                        <p>작성한 나눔글이 없습니다.</p>
                    )}
                </S.SectionWrapper>
            </S.ContentContainer>
        </S.Layout>
    );
};
