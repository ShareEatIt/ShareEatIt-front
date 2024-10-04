import BackButton from "../../../components/common/BackButton/backButton";
import BottomButton from "../../../components/common/BottomButton/bottomButton";
import NavigationBar from "../../../components/common/Navigition/navigationBar";
import ImgSlider from "../../../components/home/ImgSlider";
import { S } from "./homePage.style";
const HomePage = () => {
    return (
        <S.Layout>
            <NavigationBar />
            <ImgSlider />
            <BottomButton text="제출하기" />
        </S.Layout>
    );
};
export default HomePage;
