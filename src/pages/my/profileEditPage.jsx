import React, { useState } from "react";
import BackButton from "../../components/common/BackButton/backButton";
import { ReactComponent as Arrow } from "../../assets/common/right_arrow.svg";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import { ReactComponent as Camera } from "../../assets/my/camera.svg";
import { M, S } from "./my";

const ProfileEditPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <M.Layout>
      <BackButton text="프로필 수정" />
      <M.Form>
        <M.ImageContainer>
          <Profile style={{ width: "136px", height: "136px" }} />
          <M.CameraWrapper>
            <Camera />
          </M.CameraWrapper>
        </M.ImageContainer>
        <M.FieldSet>
          <M.Legend>닉네임</M.Legend>
          <M.Textarea>{name}</M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>이메일</M.Legend>
          <M.Textarea>{email}</M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>주소</M.Legend>
          <M.PostCodeContainer>
            <M.PostcodeTextarea></M.PostcodeTextarea>
            <M.PostcodeBtn>우편번호 찾기</M.PostcodeBtn>
          </M.PostCodeContainer>
          <M.Textarea></M.Textarea>
        </M.FieldSet>
      </M.Form>
    </M.Layout>
  );
};
export default ProfileEditPage;
