import { useNavigate } from "react-router-dom";

const Loading = () => {
    const nav = useNavigate();

    // 가입되어있는 유저의 경우 home으로 바로 이동
    const handleHome = () => {
        nav("/");
        window.location.reload();
    };

    // 처음 로그인하는 유저의 경우 intro 페이지로 이동
    const handleIntro = () => {
        nav("/intro");
        window.location.reload();
    };

    // isnewmember 확인 후 홈 또는 인트로페이지로 이동

    // 구글 로그인 code 확인 후 백엔드 전송
    const handleLoginPost = async (code) => {
        const data = {
            code: code,
        };
        try {
            const res = await axios.post(
                "https://server.bageasy.net/auth/login",
                data
            );
            // 토큰 localstorage에 저장
            const accessToken = res.data.accessToken;
            localStorage.setItem("token", accessToken);
            // isnewmember 확인 후 페이지 이동
            res.data.isNewMember ? handleHome() : handleNickName();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (code) {
            handleLoginPost(code);
        } else {
            console.log("로그인 재시도하세요.");
        }
    }, [code, navigate]);

    return (
        <div>
            <div>Loading...</div>
        </div>
    );
};
