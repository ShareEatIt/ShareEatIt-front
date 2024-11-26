export const getCurrentPosition = async () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    console.error("Error fetching current position:", error);
                    // 기본 위치를 반환하거나 오류 메시지 전달
                    reject(new Error("현재 위치를 가져올 수 없습니다."));
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            reject(new Error("Geolocation을 지원하지 않는 브라우저입니다."));
        }
    });
};
