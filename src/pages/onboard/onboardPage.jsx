import Footer from "../../components/common/footer/footer";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { S } from "./onboardPage.style";
const OnboardPage = () => {
    const firstanimation = useScrollFadeIn();
    const secondanimation = useScrollFadeIn();
    const thirdanimation = useScrollFadeIn();
    return (
        <>
            <S.Layout>
                <div>온보딩 테스트 페이지</div>
                <S.IntroContainer {...firstanimation}>
                    <S.ImageWrapper>이미지</S.ImageWrapper>
                    <S.TextWrapper>
                        {`
                   텍스트가                    
들어가는
부분입니다`}
                    </S.TextWrapper>
                </S.IntroContainer>

                <S.IntroContainer {...secondanimation}>
                    <S.ImageWrapper>이미지</S.ImageWrapper>
                    <S.TextWrapper>
                        {`
                   텍스트가                    
들어가는
부분입니다`}
                    </S.TextWrapper>
                </S.IntroContainer>

                <S.IntroContainer {...thirdanimation}>
                    <S.ImageWrapper>이미지</S.ImageWrapper>
                    <S.TextWrapper>
                        {`
                   텍스트가                    
들어가는
부분입니다`}
                    </S.TextWrapper>
                </S.IntroContainer>

                <S.IntroContainer {...thirdanimation}>
                    <S.ImageWrapper>이미지</S.ImageWrapper>
                    <S.TextWrapper>
                        {`
                   텍스트가                    
들어가는
부분입니다`}
                    </S.TextWrapper>
                </S.IntroContainer>

                <S.IntroContainer {...thirdanimation}>
                    <S.ImageWrapper>이미지</S.ImageWrapper>
                    <S.TextWrapper>
                        {`
                   텍스트가                    
들어가는
부분입니다`}
                    </S.TextWrapper>
                </S.IntroContainer>
                <Footer />
            </S.Layout>
        </>
    );
};
export default OnboardPage;
