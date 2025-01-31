import { S } from "./footer.style";

const Footer = () => {
    return (
        <S.Layout>
            <S.FooterContainter>
                <S.LogoImage />
                <S.FooterInfoContainter>
                    <S.TextWrapper>정보1</S.TextWrapper>
                    <S.TextWrapper>정보1</S.TextWrapper>
                    <S.TextWrapper>정보1</S.TextWrapper>
                </S.FooterInfoContainter>
            </S.FooterContainter>
        </S.Layout>
    );
};

export default Footer;
