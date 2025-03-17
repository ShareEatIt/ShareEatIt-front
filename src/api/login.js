import { client } from "./api";

//로그아웃
export const logout = async () => {
    try {
        //const code = localStorage.getItem("code");
        const response = await client.get(`/logout`);
        console.log("logout success");
        localStorage.removeItem("token");
        return response;
    } catch (err) {
        throw err;
    }
};

// 자체 로그인
export const postLogin = async (username, password) => {
    try {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        const res = await client.post("/signin", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);
        const token = res.data.accessToken;
        localStorage.setItem("token", token);
        return { success: true, data: res.data };
    } catch (err) {
        console.log("로그인 실패", err);
        console.log("formData는: ", username);
        console.log("formData는: ", password);
        return {
            success: false,
            status: err.response?.status || 500,
            message: err.response?.data?.message || "로그인 실패",
        };
    }
};

// 회원가입

export const postSignup = async (formData) => {
    try {
        const response = await client.post(
            "/members/sign",
            JSON.stringify(formData),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return { success: true, data: response.data };
    } catch (error) {
        console.error("회원가입 오류:", error);
        return {
            success: false,
            message: error.response?.data?.message || "회원가입 실패",
        };
    }
};
