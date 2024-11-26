import React, { useState } from "react";
import { S } from "./postInput.style";

const ImageUploader = ({ text, maxFiles = 5, onChange }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        // 최대 파일 개수 확인
        if (images.length + files.length > maxFiles) {
            alert(`최대 ${maxFiles}개의 이미지만 업로드할 수 있습니다.`);
            return;
        }

        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file), // 미리보기 URL 생성
        }));

        const updatedImages = [...images, ...newImages];
        setImages(updatedImages);

        // 부모 컴포넌트로 알림
        if (onChange) {
            onChange(updatedImages.map((img) => img.file));
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);

        // 부모 컴포넌트로 알림
        if (onChange) {
            onChange(updatedImages.map((img) => img.file));
        }
    };

    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>

            <S.ImageWrapper>
                {/* 이미지 미리보기 */}
                {images.map((image, index) => (
                    <S.ImagePreview key={index}>
                        <S.PreviewImage
                            src={image.preview}
                            alt={`uploaded-${index}`}
                        />
                        <S.RemoveButton
                            onClick={() => handleRemoveImage(index)}
                        >
                            ×
                        </S.RemoveButton>
                    </S.ImagePreview>
                ))}

                {/* 업로드 버튼 */}
                {images.length < maxFiles && (
                    <S.UploadButton htmlFor="image-uploader">
                        +
                        <S.HiddenInput
                            id="image-uploader"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                        />
                    </S.UploadButton>
                )}
            </S.ImageWrapper>
        </S.Layout>
    );
};

export default ImageUploader;
