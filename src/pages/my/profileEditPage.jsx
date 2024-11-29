import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import BackButton from "../../components/common/BackButton/backButton";
import BottomButton from "../../components/common/BottomButton/bottomButton";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import { ReactComponent as Camera } from "../../assets/my/camera.svg";
import { M } from "./my";
import { getMemberInfo, putMemberInfo } from "../../api/member";

const ProfileEditPage = () => {
  const [imgFile, setImgFile] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addressSt, setAddressSt] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false); // 우편번호 모달 상태
  const navigate = useNavigate();

  // 이미지 변경 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      const imagePreviewUrl = URL.createObjectURL(file);
      setImgPreview(imagePreviewUrl);
    }
  };

  // 유저 정보 조회 API
  const readMemberInfo = async () => {
    try {
      const response = await getMemberInfo();
      const { nickname, email, location } = response.data.data;
      setName(nickname);
      setEmail(email);
      setAddressSt(location?.addressSt || "");
      setAddressDetail(location?.addressDetail || "");
      console.log("success");
    } catch (err) {
      console.error(err);
    }
  };

  // 주소 검색 완료 핸들러
  const handleCompletePostcode = (data) => {
    const fullAddress = data.address;
    setAddressSt(fullAddress);
    setIsPostcodeOpen(false); // 모달 닫기
  };

  // 버튼 클릭 핸들러
  const handleEditBtn = async () => {
    const response = await createUserInfo();
    if (response) {
      navigate("/my");
    }
  };

  // 유저 정보 수정 API
  const createUserInfo = async () => {
    try {
      const formData = new FormData();
      if (imgFile) {
        formData.append("profileImage", imgFile);
      }
      const dto = {
        profileImg: imgPreview || "",
        nickname: name,
        latitude: 37.5665,
        longitude: 126.978,
        addressSt: addressSt || "",
        addressDetail: addressDetail || "",
        provider: "INDIVIDUAL",
      };
      formData.append("dto", JSON.stringify(dto));
      const response = await putMemberInfo(formData);
      console.log("formData", formData);
      return response;
    } catch (err) {
      console.error("Error:", err.response?.data || err);
    }
  };

  useEffect(() => {
    readMemberInfo();
  }, []);

  return (
    <M.ProfileLayout>
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
            <M.PostcodeTextarea
              value={addressSt}
              placeholder="우편번호를 입력해주세요"
              readOnly
            ></M.PostcodeTextarea>
            <M.PostcodeBtn
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsPostcodeOpen(true);
              }}
            >
              우편번호 찾기
            </M.PostcodeBtn>
          </M.PostCodeContainer>
          <M.Textarea
            value={addressDetail}
            placeholder="상세주소를 입력해주세요"
            onChange={(e) => setAddressDetail(e.target.value)}
          ></M.Textarea>
        </M.FieldSet>
      </M.Form>
      <BottomButton text="수정 완료" onClick={handleEditBtn} />
      {isPostcodeOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <DaumPostcode onComplete={handleCompletePostcode} />
            <button onClick={() => setIsPostcodeOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </M.ProfileLayout>
  );
};

export default ProfileEditPage;
