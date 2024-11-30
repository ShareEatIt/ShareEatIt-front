import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import { ReactComponent as Emoji1 } from "../../assets/my/drink.svg";
import { ReactComponent as Emoji2 } from "../../assets/my/drink.svg";
import { ReactComponent as Emoji3 } from "../../assets/my/drink.svg";
import { ReactComponent as Emoji4 } from "../../assets/my/drink.svg";
import { ReactComponent as Emoji5 } from "../../assets/my/drink.svg";
import { ReactComponent as Pen } from "../../assets/my/pen.svg";
import { ReactComponent as Trash } from "../../assets/my/trash.svg";

import { M, S } from "./shareDetail";
import { getPostDetail } from "../../api/sharing";
import ImageContainer from "../../components/common/ImageList/imageContainer ";

const ShareDetailPage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("게시글 제목");
    const [category, setCategory] = useState("빵");
    const [type, setType] = useState("완제품");
    const [name, setName] = useState("파리바게트 초코소라빵");
    const [edate, setEdate] = useState("2024/09/15");
    const [bdate, setBdate] = useState("2024/09/10");
    const [place, setPlace] = useState("서울역");
    const [endDate, setEndDate] = useState("2024/09/07");
    const [writer, setWriter] = useState("이승진");
    const [num, setNum] = useState("4");
    const [postDate, setPostDate] = useState("2024/09/20");
    const [page, setPage] = useState("home");
    const [reaction, setReaction] = useState(
        <Emoji1 style={{ width: "30px", height: "30px" }} />
    );
    const [status, setStatus] = useState("나눔중");
    const [detail, setDetail] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPostDetail(id); // API 호출
                console.log("불러온 데이터:", data);

                const res = data.data.data;

                // 상태 업데이트
                setTitle(res.title);
                setCategory(res.category || "");
                setType(res.foodType || "");
                setName(res.foodName || "");
                setEdate(res.expDate || "");
                setBdate(res.purchaseDate || "");
                setPlace(res.addressSt || "");
                setEndDate(res.endAt || "");
                setWriter(res.writer.nickname || "");
                setNum(res.transactionCount || 0);
                setPostDate(res.createdAt || "");
                setDetail(res.description || "");
            } catch (err) {
                console.error("데이터를 불러오지 못했습니다:", err);
            }
        };

        fetchData();
    }, [id]);

    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    const handleEmojiClick = (emoji) => {
        setReaction(emoji);
        setPage("done");
    };
    const content = () => {
        if (page === "home") {
            return (
                <M.Layout>
                    <M.DetailContainer2>
                        <M.DetailTitleWrapper>추가설명</M.DetailTitleWrapper>
                        <M.Textarea onChange={handleDetailChange}></M.Textarea>
                    </M.DetailContainer2>
                    <M.DetailContainer>
                        <M.DetailTitleWrapper>위치</M.DetailTitleWrapper>
                        <M.DetailWrapper></M.DetailWrapper>
                    </M.DetailContainer>
                </M.Layout>
            );
        }
        if (page === "ing") {
            return (
                <M.Layout>
                    <M.DetailContainer>
                        <M.DetailTitleWrapper>나눔 상태</M.DetailTitleWrapper>
                        <M.VLine />
                        <M.DetailWrapper>
                            <M.StatusForm>
                                <M.Label1>
                                    <M.StatusInput
                                        type="radio"
                                        value="나눔중"
                                        checked={status === "나눔중"}
                                        onChange={handleStatusChange}
                                    />
                                    나눔중
                                </M.Label1>
                                <M.Label2>
                                    <M.StatusInput
                                        type="radio"
                                        value="찜"
                                        checked={status === "찜"}
                                        onChange={handleStatusChange}
                                    />
                                    찜
                                </M.Label2>
                                <M.Label3>
                                    <M.StatusInput
                                        type="radio"
                                        value="완료"
                                        checked={status === "완료"}
                                        onChange={handleStatusChange}
                                    />
                                    완료
                                </M.Label3>
                            </M.StatusForm>
                        </M.DetailWrapper>
                    </M.DetailContainer>
                    <M.DetailContainer2>
                        <M.DetailTitleWrapper>추가설명</M.DetailTitleWrapper>
                        <M.Textarea onChange={handleDetailChange}></M.Textarea>
                    </M.DetailContainer2>
                </M.Layout>
            );
        }

        if (page === "setreaction") {
            return (
                <M.Layout>
                    <M.setReactionContainer>
                        <M.DetailTitleWrapper>
                            고마움 남기기{" "}
                            <M.DoneBtn onClick={() => setPage("done")}>
                                완료
                            </M.DoneBtn>
                        </M.DetailTitleWrapper>
                        <M.EmojiContainer>
                            <Emoji1
                                onClick={() => handleEmojiClick(<Emoji1 />)}
                            />
                            <Emoji2
                                onClick={() => handleEmojiClick(<Emoji2 />)}
                            />
                            <Emoji3
                                onClick={() => handleEmojiClick(<Emoji3 />)}
                            />
                            <Emoji4
                                onClick={() => handleEmojiClick(<Emoji4 />)}
                            />
                            <Emoji5
                                onClick={() => handleEmojiClick(<Emoji5 />)}
                            />
                        </M.EmojiContainer>
                    </M.setReactionContainer>
                </M.Layout>
            );
        }
        if (page === "done") {
            return (
                <M.Layout>
                    <M.DetailContainer2>
                        <M.DetailTitleWrapper>추가설명</M.DetailTitleWrapper>
                        <M.Textarea>{detail}</M.Textarea>
                    </M.DetailContainer2>
                </M.Layout>
            );
        }
        return null;
    };
    return (
        <M.Layout>
            <ImageContainer></ImageContainer>
            <M.TitleWrapper>
                <M.TopContainer>
                    {title} {reaction}
                </M.TopContainer>
                <M.TopContainer>
                    <M.Btn>
                        수정
                        <Pen />
                    </M.Btn>
                    <M.Btn>
                        삭제
                        <Trash />
                    </M.Btn>
                </M.TopContainer>
            </M.TitleWrapper>
            <M.YellowDetail>게시일자 {postDate}</M.YellowDetail>
            <M.DetailContainer>
                <M.DetailTitleWrapper>카테고리</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>{category}</M.DetailWrapper>
            </M.DetailContainer>
            <M.DetailContainer>
                <M.DetailTitleWrapper>식료품/완제품</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>{type}</M.DetailWrapper>
            </M.DetailContainer>
            <M.DetailContainer>
                <M.DetailTitleWrapper>식품명</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>{name}</M.DetailWrapper>
            </M.DetailContainer>
            <M.DetailContainer>
                <M.DetailTitleWrapper>유통기한</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>{edate}</M.DetailWrapper>
            </M.DetailContainer>
            <M.DetailContainer>
                <M.DetailTitleWrapper>구매일자</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>{bdate}</M.DetailWrapper>
            </M.DetailContainer>
            <M.DetailContainer>
                <M.DetailTitleWrapper>나눔희망장소</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>{place}</M.DetailWrapper>
            </M.DetailContainer>
            <M.DetailContainer>
                <M.DetailTitleWrapper>종료일자</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>{endDate}</M.DetailWrapper>
            </M.DetailContainer>
            <M.DetailContainer>
                <M.DetailTitleWrapper>작성자</M.DetailTitleWrapper>
                <M.VLine />
                <M.DetailWrapper>
                    <Profile style={{ width: "24px", height: "24px" }} />
                    {writer}
                </M.DetailWrapper>
                <M.YellowDetail>거래횟수 {num}번</M.YellowDetail>
            </M.DetailContainer>
            {content()}
        </M.Layout>
    );
};
export default ShareDetailPage;
