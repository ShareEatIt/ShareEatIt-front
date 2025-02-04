import React, { useState } from "react";
import { S } from "./postInput.style";

const ImageUploader = ({ text, maxFiles = 4, onChange }) => {
    const [images, setImages] = useState([]); // 로컬 파일 상태
    const [imagePreviews, setImagePreviews] = useState([]); // 미리보기 URL 상태

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        console.log("업로드된 파일-이미지 업로더:", files);
        // 최대 파일 개수 확인
        if (images.length + files.length > maxFiles) {
            alert(`최대 ${maxFiles}개의 이미지만 업로드할 수 있습니다.`);
            return;
        }

        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file), // 로컬 미리보기 URL 생성
        }));

        const updatedImages = [...images, ...newImages];
        setImages(updatedImages);
        const newPreviews = newImages.map((img) => img.preview);
        setImagePreviews((prev) => [...prev, ...newPreviews]);

        if (onChange) {
            console.log(
                "onChange 호출됨, 전달할 파일:",
                updatedImages.map((img) => img.file)
            );
            onChange(updatedImages.map((img) => img.file));
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = imagePreviews.filter((_, i) => i !== index);

        setImages(updatedImages);
        setImagePreviews(updatedPreviews);

        // 부모 컴포넌트로 변경된 파일 리스트 전달
        if (onChange) {
            onChange(updatedImages.map((img) => img.file));
        }
    };

    return (
        <S.Layout>
            <S.TitleWrapper>{`${text} *`}</S.TitleWrapper>

            <S.ImageWrapper>
                {imagePreviews.map((preview, index) => (
                    <S.ImagePreview key={index}>
                        <S.PreviewImage
                            src={preview}
                            alt={`uploaded-${index}`}
                        />
                        <S.RemoveButton
                            onClick={() => handleRemoveImage(index)}
                        >
                            ×
                        </S.RemoveButton>
                    </S.ImagePreview>
                ))}

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
