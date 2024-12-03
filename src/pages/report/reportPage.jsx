import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/common/BackButton/backButton";
import { M, S } from "./reportPage.style";
import { postReport } from "../../api/report";
import { BottomButton } from "../../components/common/BottomButton/bottomButton";

const ReportPage = () => {
    const [imgFile, setImgFile] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    //image handler
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImgFile(file);
            const imagePreviewUrl = URL.createObjectURL(file);
            setImgPreview(imagePreviewUrl);
        }
    };
    //button click handler
    const handleSubmit = async () => {
        const response = await createReport();
        if (response) {
            navigate("/");
        }
    };

    //신고생성 API 연결
    const createReport = async () => {
        try {
            const dto = {
                postId: 5,
                title,
                content,
            };
            const response = await postReport(imgFile, dto);
            return response;
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <M.Layout>
            <BackButton text="신고 생성" />
            <M.Form>
                <M.FieldSet>
                    <M.Legend>제목 *</M.Legend>
                    <M.Textarea
                        placeholder="제목은 최소 3글자, 최대10글자"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></M.Textarea>
                </M.FieldSet>
                <M.FieldSet>
                    <M.Legend>사유 *</M.Legend>
                    <M.Textarea
                        placeholder="사유는 최소 10글자, 최대 100글자"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></M.Textarea>
                </M.FieldSet>
                <M.FieldSet>
                    <M.Legend>이미지 *</M.Legend>
                    <label htmlFor="image">
                        <M.ImageWrapper>
                            {imgPreview ? (
                                <img
                                    src={imgPreview}
                                    alt="이미지 미리보기"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                "이미지를 추가하려면 클릭하세요"
                            )}
                        </M.ImageWrapper>
                    </label>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </M.FieldSet>
            </M.Form>
            <BottomButton text="작성완료" onClick={handleSubmit} />
        </M.Layout>
    );
};

export default ReportPage;
