import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/common/BackButton/backButton";
import BottomButton from "../../components/common/BottomButton/bottomButton";
import { ReactComponent as Arrow } from "../../assets/common/right_arrow.svg";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import { ReactComponent as Camera } from "../../assets/my/camera.svg";
import { M, S } from "./my";
import { getMemberInfo, patchMemberInfo } from "../../api/member";

const ProfileEditPage = () => {
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const navigate = useNavigate();

  //이미치 변경 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      const imagePreviewUrl = URL.createObjectURL(file);
      setImgPreview(imagePreviewUrl);
    }
  };

  //유저 정보조회 API
  const readMemberInfo = async () => {
    try {
      const response = await getMemberInfo();
      const { nickname, email, location } = response.data.data;
      setName(nickname);
      setEmail(email);
      setPostcode(location);
    } catch (err) {
      console.error(err);
    }
  };

  //버튼 클릭 핸들러
  const handleEditBtn = async () => {
    const response = await createUserInfo();
    if (response) {
      navigate("/my");
    }
  };
  //유저 정보수정 API
  const createUserInfo = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    readMemberInfo();
  }, []);
  return (
    <M.Layout>
      <BackButton text="프로필 수정" />
      <M.Form>
        <M.ImageContainer>
          <label htmlFor="image">
            <M.ImageWrapper>
              {imgPreview ? (
                <img
                  src={imgPreview}
                  alt="이미지 미리보기"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Profile style={{ width: "136px", height: "136px" }} />
              )}
            </M.ImageWrapper>
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <M.CameraWrapper>
            <Camera />
          </M.CameraWrapper>
        </M.ImageContainer>
        <M.FieldSet>
          <M.Legend>닉네임</M.Legend>
          <M.Textarea
            value={name}
            placeholder="이름을 입력해주세요"
            onChange={(e) => setName(e.target.value)}
          ></M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>이메일</M.Legend>
          <M.Textarea
            value={email}
            placeholder="이메일을 입력해주세요"
            onChange={(e) => setEmail(e.target.value)}
          ></M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>주소</M.Legend>
          <M.PostCodeContainer>
            <M.PostcodeTextarea></M.PostcodeTextarea>
            <M.PostcodeBtn>우편번호 찾기</M.PostcodeBtn>
          </M.PostCodeContainer>
          <M.Textarea
            value={postcode}
            placeholder="상세주소를 입력해주세요"
            onChange={(e) => setPostcode(e.target.value)}
          ></M.Textarea>
        </M.FieldSet>
      </M.Form>
      <BottomButton text="수정 완료" />
    </M.Layout>
  );
};
export default ProfileEditPage;
