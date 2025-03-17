import { useState } from "react";
import { S } from "./registerPage.style";
import { M } from "./login";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import BackButton from "../../components/common/BackButton/backButton";
import { BottomButton } from "../../components/common/BottomButton/bottomButton";
import { postSignup } from "../../api/login";

const RegisterPage = () => {
    // 비밀번호 시각화 토글 버튼
    const [showPW, setShowPW] = useState(false);
    const togglePW = () => {
        setShowPW((prev) => !prev);
    };

    // 비밀번호 일치 확인

    const [confirmPassword, setConfirmPassword] = useState("");
    const [errormsg, setErrormsg] = useState({
        msg: "비밀번호를 입력해주세요",
        isError: false,
    });
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        nickname: "",
        isKeywordAvail: true,
        isNoticeAvail: true,
        addressSt: "",
        addressDetail: null,
        latitude: 127.086384,
        longitude: 36.992561,
        provider: "INDIVIDUAL",
    });

    const handleConfirmPasswordChange = (e) => {
        console.log("비밀번호 확인 입력값:", e.target.value); // 디버깅용 로그 추가
        setConfirmPassword(e.target.value);
    };

    const validatePasswords = () => {
        if (formData.password === "" || confirmPassword === "") {
            setErrormsg({
                msg: "비밀번호를 입력해주세요",
                isError: true,
            });
        } else if (formData.password !== confirmPassword) {
            setErrormsg({
                msg: "비밀번호가 일치하지 않습니다",
                isError: true,
            });
        } else {
            setErrormsg({
                msg: "비밀번호가 일치합니다",
                isError: false,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("회원가입 버튼 클릭됨");
        // 비밀번호 일치 확인
        if (formData.password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다. 다시 시도해주세요");
            console.log("비밀번호: ", formData.password);
            console.log("비밀번호확인: ", confirmPassword);
            return;
        }

        const result = await postSignup(formData);

        if (result.success) {
            alert("회원가입 성공!");
            window.location.href = "/";
        } else {
            alert("회원가입 실패: " + result.message);
        }
    };

    return (
        <S.Layout>
            <BackButton text="회원가입" />
            <S.InputContainer>
                <S.InputWrapper>
                    <S.TextWrapper>
                        아이디 &nbsp;
                        <p style={{ color: "var(--yellow-100)" }}>*</p>
                    </S.TextWrapper>
                    <S.Input
                        name="username"
                        placeholder="아이디"
                        value={formData.username}
                        onChange={handleChange}
                    ></S.Input>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.TextWrapper>
                        비밀번호 &nbsp;
                        <p style={{ color: "var(--yellow-100)" }}>*</p>
                    </S.TextWrapper>
                    <S.PWWrapper>
                        <S.Input
                            name="password"
                            type={showPW ? "text" : "password"}
                            placeholder="비밀번호"
                            value={formData.password}
                            onChange={handleChange}
                        ></S.Input>
                        <S.CheckBox onClick={togglePW}>
                            {showPW ? (
                                <IoMdEye size={20} />
                            ) : (
                                <IoMdEyeOff size={20} />
                            )}
                        </S.CheckBox>
                    </S.PWWrapper>
                    <div style={{ paddingBottom: "1rem" }}></div>
                    <S.TextWrapper>
                        비밀번호 확인 &nbsp;
                        <p style={{ color: "var(--yellow-100)" }}>*</p>
                    </S.TextWrapper>
                    <S.PWWrapper>
                        <S.Input
                            name="confirmPassword"
                            type="password"
                            placeholder="비밀번호 확인"
                            value={confirmPassword}
                            onBlur={() => {
                                console.log(
                                    "현재 confirmPassword 값:",
                                    confirmPassword
                                );
                                validatePasswords();
                            }}
                            onChange={handleConfirmPasswordChange}
                        ></S.Input>
                    </S.PWWrapper>
                    <div
                        style={{
                            marginTop: "0.3rem",
                            color: errormsg.isError
                                ? "red"
                                : "var(--yellow-70)",
                            fontSize: "0.7rem",
                        }}
                    >
                        {errormsg.msg}
                    </div>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.TextWrapper>
                        닉네임 &nbsp;
                        <p style={{ color: "var(--yellow-100)" }}>*</p>
                    </S.TextWrapper>
                    <S.Input
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                    ></S.Input>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.TextWrapper>
                        이메일 &nbsp;
                        <p style={{ color: "var(--yellow-100)" }}>*</p>
                    </S.TextWrapper>
                    <S.Input
                        name="email"
                        placeholder="123456@naver.com"
                        value={formData.email}
                        onChange={handleChange}
                    ></S.Input>
                </S.InputWrapper>

                <BottomButton text="회원가입" onClick={handleSubmit} />
            </S.InputContainer>
        </S.Layout>
    );
};

export default RegisterPage;
