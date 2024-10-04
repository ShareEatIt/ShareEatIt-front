import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/common/right_arrow.svg";
import { ReactComponent as Profile } from "../../assets/common/profile.svg";
import { M, S } from "./my";

const RegisterBusinessPage = () => {
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [businessNum, setBusinessNum] = useState("");

  return (
    <M.Layout>
      <M.Form>
        <M.FieldSet>
          <M.Legend>상호명</M.Legend>
          <M.Textarea>{businessName}</M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>전화번호</M.Legend>
          <M.Textarea>{phone}</M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>성명</M.Legend>
          <M.Textarea>{name}</M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>사업장 주소</M.Legend>
          <M.Textarea>{address}</M.Textarea>
        </M.FieldSet>
        <M.FieldSet>
          <M.Legend>사업자 번호</M.Legend>
          <M.Textarea>{businessNum}</M.Textarea>
        </M.FieldSet>
      </M.Form>
    </M.Layout>
  );
};
export default RegisterBusinessPage;
