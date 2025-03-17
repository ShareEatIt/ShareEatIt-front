import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../../components/common/BackButton/backButton";
import BottomButton from "../../../components/common/BottomButton/bottomButton";
import NavigationBar from "../../../components/common/Navigition/navigationBar";
import ImgSlider from "../../../components/home/ImgSlider";
import { S } from "./homePage.style";
import ShareList from "../../../components/common/ShareList/shareList";
import { useNavigate } from "react-router-dom";
import { getSharingList } from "../../../api/sharing";
import { getCurrentPosition } from "../../../api/map";
import { ReactComponent as All } from "../../../assets/Home/All.svg";
import { ReactComponent as Store } from "../../../assets/Home/Store.svg";
import { ReactComponent as Individual } from "../../../assets/Home/Individual.svg";
import { ImNpm } from "react-icons/im";

const dummyData = [
    {
        id: 1,
        img: "https://source.unsplash.com/200x200/?bread",
        title: "1맛있는 크루아상 나눠요!",
        endAt: "2024-03-20",
        nickname: "김빵순",
        category: "BAKERY",
        ago: "1시간 전",
    },
    {
        id: 2,
        img: "https://source.unsplash.com/200x200/?coffee",
        title: "2아이스 아메리카노 한 잔 남았어요 ☕",
        endAt: "2024-03-21",
        nickname: "이커피",
        category: "BEVERAGE",
        ago: "30분 전",
    },
    {
        id: 3,
        img: "https://source.unsplash.com/200x200/?ramen",
        title: "3편의점 컵라면 나눔합니다 🍜",
        endAt: "2024-03-22",
        nickname: "박라면",
        category: "CONVENIENCE_FOOD",
        ago: "2시간 전",
    },
    {
        id: 4,
        img: "https://source.unsplash.com/200x200/?bibimbap",
        title: "4비빔밥 같이 드실 분~",
        endAt: "2024-03-23",
        nickname: "조한식",
        category: "KOREAN",
        ago: "10분 전",
    },
    {
        id: 5,
        img: "https://source.unsplash.com/200x200/?ramen",
        title: "5편의점 컵라면 나눔합니다 🍜",
        endAt: "2024-03-22",
        nickname: "박라면",
        category: "CONVENIENCE_FOOD",
        ago: "2시간 전",
    },
    {
        id: 6,
        img: "https://source.unsplash.com/200x200/?hamburger",
        title: "6햄버거 2개 있어요 🍔",
        endAt: "2024-03-25",
        nickname: "최햄버",
        category: "SNACK",
        ago: "20분 전",
    },
    {
        id: 7,
        img: "https://source.unsplash.com/200x200/?pasta",
        title: "7파스타 나눔 🍝",
        endAt: "2024-03-26",
        nickname: "이파스",
        category: "WESTERN",
        ago: "3시간 전",
    },
    {
        id: 8,
        img: "https://source.unsplash.com/200x200/?ramen",
        title: "8편의점 컵라면 나눔합니다 🍜",
        endAt: "2024-03-22",
        nickname: "박라면",
        category: "CONVENIENCE_FOOD",
        ago: "2시간 전",
    },
    {
        id: 9,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaTn1qKnDfhnHDpIP6o3ssKzjHAnOzVrR4w&s",
        title: "9햄버거 2개 있어요 🍔",
        endAt: "2024-03-25",
        nickname: "최햄버",
        category: "SNACK",
        ago: "20분 전",
    },
    {
        id: 10,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ12SdJt7brrWu1GqtY1VxN0hDFozPu_6Clg&s",
        title: "10파스타 나눔 🍝",
        endAt: "2024-03-26",
        nickname: "이파스",
        category: "WESTERN",
        ago: "3시간 전",
    },
    {
        id: 11,
        img: "data:image/jpeg;base64,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",
        title: "파스타 나눔 🍝 11번째",
        endAt: "2024-03-26",
        nickname: "이파스",
        category: "WESTERN",
        ago: "3시간 전",
    },
    {
        id: 12,
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUQEBIPDxAQEBAPDxAQEBUQEBAPFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0lHSUtKy0tLS0tLS0tLSstLS0tLS0tLS0tLSsrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALoBDwMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAACAwQFAQYAB//EADoQAAEDAgQEBQIEBAUFAAAAAAEAAhEDIQQSMUEFIlFhBhNxgZEyoUKxwfBictHhBxQjkvEVFjNSgv/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACIRAQEBAAIDAQEAAgMAAAAAAAABEQIhAxIxE0FRYQQicf/aAAwDAQACEQMRAD8A8owJzEpxTGFdIyqpqlhUtNyfTSKqan01OxU0gpYqohV02pWHYtCk1RIylPoBNNNdpCFuDFmHCtBUtEpjnrNahuZfOEqYPW3w3CtLJdcn7Dss8rhnbzuLwu4WZUpkL3v+QpaET73+VNi/DrHR5fLfmm5iDp9kTnFjwj3Kd9RbPHOGikQM0k7bhZNLA1Kjg1jHOJ0gH3utaCBVVFKsVt8E8JmrT8yo4slxDQALtH4pW5S8J0GiDne6LkmPgLN5SKSvM4auVsYepIRYnwyReiZEaPdcn4U4pPpHLUaR0OoPod0yyruKyhhGy4XcqQAIwvsq6ApCCTVamyheUQo3NQ5FS4IMq0ExC61OcxLIUhBEHIAVwqL8qy3TWMXWMT2sWQ4xqppsXKbFXSYlPqdNW0KaCnTVlKmpH0aaqptQUWqymxRcaUL2pxpL7y0yqx2g5NJS2hGqoTBda78RkHaNtR7LHpvgyuYc1HVTOd0gxz8nYZen9fdcPNb06eORqUOKscYm638O6ywMFwWHB5zMcLyx2b2OYH9lbAY2I+jpdZ4yz6udm9PsTwqi9+d7MzpaZJNsuluisqGBaFM/FNFv3CAu3Ekeq1rGBrY9rdTEDRRDijSeW5OpNrJXFmEw9rS5v42gX7Hv6LGDqf1Bl5iObKO5bFiuXO2OvCSvRDETpc/ZL4nRLqRgNkCZiTAvAssmjxZ0S0Mc1upB07ED81S3H2LnzTboAYNz/L9SOHLuLlxSYWtIVQKyqFRV06q9mPPKtAQkIGuRyhoLktyYUDgmAsoSUZS3JTspTwilC4qQQviUp7kvzFDXgWsT2MXGtVNJqyXaVJUsYjp005rEp2i1W0mJNJirpqRtJqsphT0lXTCiMBFkXQiAQSSxfZU7KvsqdRGRXtcGZQAMxEA6n26eqQGptOiS8OBsBe8RaJXPy7nR4q+I8RFKmXOcGMY0uc8mAGgSSVl8D8QMxIOWbQRmBaYmLjb0MIeKcNGIa6lBOdpbYmexHoYMqHwd/h8MES9tUhzrOAIIcJm9h+q4y2umR6xzLXEmeiyuM8dZh4LzEmGhoLiT0AF9j8LfeIAAjoSSvI+IfBIxk+ZXeyCSw0wGlkzuZ+RGiVMb3B+KNxFMOa5rmumCDuLEHoQbEbJHFsIKjf8A1eDAdF/5SVg+HuAHBNNIVHOOYuc4mc1gAT7Ad1vY+kXta5s5gQCBoe6xyuywyZZWG2oKJLXNcXEGN2kbEybXGyEVC830BkN2HovuKAmsQRGWG6kyNZ+6LDiF6fH45xkcOfO2nNpp1Ni+pqhgXRmPmhGF8AuwskJQFMIS3JiLcluKNyApQCUDiiclOKgXUCQU4uQOaoPGMcq6JWbScr6BWW2hTKc0qNipplQVsT2KNr1TTSsXUQq2KGkVWwo04eEUpIciBQTgV0qcvhD5qkplObVlsCGwJsPq9epUYqJ3Duap/K0u97QjlNiaeCohjc27ryeiyPFvEn0sLVq0OarTpl7WA5ZAjNc9BJ9k3H8QsQJN14nxLxmGkgFzRGfWzHHKTG+pt2XmvOR148LyeYw3+IOLc8ANfnJAIZUEg7ETY+i/ZOHYh5ptL3S+BnE6Oi4C/COGYhjMR5go0bEQQRDP4mwJBj5lfofh/wAQPLQ+oxzMxN5kEZiD+ZTz559U4X+Pb43Cl3OLGBYbruGkC/ZIweOaSAXAzpbbp62V2cWi8kesLMy3Yrs6rK4u9rnAQM7fqdEGNhO6iBAVfH6DmPzwMrogjr3WR5119Dx8N4vJz55Wgx6qovWfSlU03RqrlxXHk0WtReWgw7pVK5V1iZzUpzU6s5TmomABCW5fVXpTStB84JVRUZUt9NSSkI2tR+WjbTUngKFBaNKghptVlJc9bfMoLopFVUwqGtVoIoUVW1i+ARtTpHTCe1KYE9qNQgES4EUI0kuEoYVOVAWq1EXNlv8ACcJkYS4AOcNidO40BWM1lxOkiV6WrSAaGgQANEWph8RogzaDusZuCaSczQTcEESHC8SDrqV6KowTfT1UWMZBlsELy85/XXjcedpeGcG2pn/y9MGZ3yk+kwf7rWrYZr3AQA0XgfEBdquIGl+iowzDAsJsuVvK9V142TuDpYOGiBIb+ytnBMEA791lGpBvAJ6HULWwrpHf8l14ZHLndP4jhRWolp1iQehXiKbAHEO1Bhe7oP2Wfxbg1JzS8NIdqS3de7xeTOnl8nDe3nKdQbJrnSs6mSCQZt1VVIr0XPrjLfjXwhsqi5QUHwE7zV5+X16OPx2s5SPciq1VM9yYqJGGpDX3VbXAhWiPmosqXmRB6tLvlruVfB67KNOPEsYqqLETKaoZTXi/VvBU2pzQhaxOYxX6rHIRsamNppraaf1WBa1GAjDUQYj9TgWpgXWsRhiP1WFrhTci46mmeQYCgJe0DXMI9ZXoa5htzc6rO4RhObzHaNnKOp6qzEmb7b+i6y9aGdXlx6AKV9CRIcRqLrQzi2w6bgbqTys19BBd6NXKzXWdISHyAYd1OgCswtUizm/BT8NQmCZuftsE3EU2tEu+mcveCJWZxptTASZPtOy0KBhZmLaBlyu5CMx/Q/Y/CfhiXNlpMekD5Wp0K1abxKradisuiwj/AIVTapGq68eTnYwfEuDIeHhttyFmU17CrlqMLTcbLy76EEjuun6ZHK8ex0ymSlsajXK+VuQt6AtTXBAVfqcKc1NYbICugq/VYPMuyllyW6qr9FioFfGoojiEh+IT7rE7AnsCma9PY9fL93VQ1qexqmZUT2PR7rFDQmAJTHJzSr3OCATA1C0pjSr3WPg1MDVxqaFTmsDkX2RNC7C3OS9VGEjLHf3R5hrFo6W/dlLpouYjEZWA3NwMxt+wvb4/JOXH/wAY9e1LsrhcAjW+nqoMXgjle6kSXFuQMtEC8N0j5TcLLj0AMlsQb6/KuyCLdgqdtfGLh8X/AKTc4LXwGwbGxIB9ZAWTxXiT/Max0fSXGx2tm+60OOs5w6YDTdu0mIPwPusKrUNau1oc1hLCHEzMAjSPX7It/jUjXweH8xokmcuZrfpnNJA+33WvgMO9sZrbZYsBFvdDw3BBgzWzQLi8sE5QJ0/utMvjXTbutTpi18WIKtMgTqjcR/ZAMRGmsxB0+VuVjCcGVmYmnDir8PU59Ik6dEvHU4cuXntnDYpO2cWocqe4IAvB+tdPUohLcFS5qRUCv0XqSVyVxxXAmeWjA1HKSo5WPao6gW55F6kPekuenVGKVwutTyDAMqpzKqzwUQevPVrUZWVFOssmnVT2VENNZtdNbiFlMqJrHoOtZlZPZVWWx6oZUUdaTKic2os1lROFVWloB6IPUArJjaqfZasLln8bDhRAa46y5oAMiU7zF84g2Nwunj83rus1g/8AdDKNAuLspa/8TZIBN9LTJAHt6rIxP+KVI1SxhcW5J5BmMuIDYmJMmCBOtpXq/wDptEuLjTY6REPGYRvANhoPgKlrGhoY1rWtAgNaA1oHQAaLpf8AkRqV4LHeJa1amPMpmkSDlBkOA0u2Ldeot0TPBlSo7EFxDnZGklx6uIBE6SQZ9l6jHcHpVAQWi42svOcPw1LCVSS2s55BAqZxlaOmXL+c9oXXh/2zlPi9n6BUxbKcue4QBp/CL39k7DY5j97gWmxvBNvj49V+G8c8WPq1DBdTgw5ruVwDiczCO0ka9fQaHhDxNiBVbRtmdmIdUaC1reVxD421AOvN2XTavWY/YMRXFhFh766SlYjFQ2Li8TqL7TssjG1i9oqNNMsJ+qmTf3n8wsuvi35gMxyjbr6pnJix63AOHqeqo4hETusjh2IzQrcfW2T5OUnjrEnaQlAEtz0p9ay+Rrrae5yTVepzVK6dFDXHI2tQUyvqtZaiFWKzaj7qivUkKYi0rcqtfEqYNumU3zZPygBOh55jkYU9J9yFUxZEExUU0tgRTCzpOBTWOU8oqTrqS1jk5j1MBZdEoxWrmVEfmqBpKcwoMqwVETainaUTSpKxURCqkBA8qwVY2qiD1neaqMPUWVFoKwPENAONveFuZ7KSowOPrqvb/wAfnn/WrlP68LiODsLXM8qlUc8kh9ZocGuNp0m333N5VnAvDbaJzNa38BmNC0zy9Bp+7nZxmEipEWV2GGUXXrWnGsXsjTr7W/RZWJZF3WhaDbKHj+FdUpEMPMF4/wBr75WpOlPh3FAvibStri1SF+eeHcW6k/I+Q4G07r2FbF+Y32XfyXfHYzZ2F1eynfVSy+LIWsJvsF8/BqxhtK+diNlNeJ2VFLKGyUtca4HSYCTj2Ee6bTOrl9jKwLb6jVU+G9oSTAXz6giCqMU0BoO2qhxDCWhw6m29v39kW3+C8cE7lGbso344+ya1xLCDroFOMLpOpMH4J/Ral0Zc6RUqRuTEEuhwiC3QX9Wn49k+oYa24k7fqeiTUqcgZYANLpH2E+w+/VFWxbHBoAygHLoHXOrnEgT7WCzfJn8OQ5zo9Vxtadeqlc+XARIAuWnUbaqhzQ4AgGQb/wAyz772wpY6fhfUK4n0sgdhyGzNwZgdOkJdGgS/QtBBOY9QOip38avTXpVARqidUAWdTYdv92ghdbWkw7QEg+4ge910yjemkyuD+Sa2oFIzD5WhwcQcwhth8Gb+o1nZcqvFybOcQ1gZYdzEdB8o+tWY0nOsvqZWbUxd+wBJjqnl5ZTl0icxE9J/pHynoNIPQVSsxmJNhpr/AF/VFTxRMyCZ09EaKqNS66+sWkdCpjVIaCJzG4IFxffsuVsQ0szSG5gTB/C5v1N/I+4RJp+NEYmQnYOoCV5ulxIfiMRF9j3T8LxNucQbR8ToV08dzlKvr0uIogmdVNiGSOzUp3EBAuOmqnxuOH0g3JiP1Xt5+Tjixzzrx0RCqsd+Mhwg6giNJNo/VFTxXNOYBt4nW1pgBfO+2jV+Kw7HGYAcLyu0Ko0WPicc4QYIm3ceoiyQ6vflPcrtNsW9t6sYIO0x9l12JAJA/F7+qzTWLmdMoFxuf+EFIkgwQCIMunTe/us+qrTq19AbaW7ayixFUBk3NjAGsX/OI9is6rXzUi0Fpc2RBLS/LEka2gtj/wC+yqq12Bs6w4MLhYl0SbzAidOys/jUn+FlesAA0WzHe2v0j9VPT1LnGPwxuY1t8LMp4tpLaYL3GCS4gABou0cs3t+UbqjG4nmbTpuY6XWeTzAQbX0kzFt0Zs1Sq5aQ1pqNAki4cRY2EgeiTjXZQDbLfmY4OuNSOnp9lNTeQZNgGk2BJzGDA0Mx0nU9EutWc4crQLFzYEvL4+S25B0ntu5p3Z2fRxLYMkBw0j6XenftvsZspcU50tg/iJLhpMGR63U7MSwtLeRhcCRmBAaf4SBJbf20jRC92Xka/wAwNDXluUuaSQQDy6WPQo/O5253lZ0dUpRaxB1GyWOGB0XyxqIsUFTEyUdPEnSU8uOn2m9qf8q1sZdhBtqlvqQyBAnXumNdZcFNuv2ReEzDf9BwglsGRc33MJ5w8uFyRG/LdLa4DTZNZiB7okyCf4VU6MaF1tHDr3HSJX2IpODbhjw7MILZIOxkaaD5U4xEGUxmLlNplgSSAA2ct+X+LY+vdZdJ73PkgggPJk8pdse1ot3Wy14KoaxpH9k5MDEwtcsLmlr5eZEEkNMmAbX1J211tBsp1bEVGF5guJzEOgRJgyOgiNFRUZfuNOiOhrfoRfuCP1R/o9T4iZWa6DleGglpBi7vU6/quim+AdD9D25hM9Z9vdVQAQBeLdU9jgDe249ViifRUaJcWOdAyl7eV4cHBwAF+utkvHcOa50OLmNvVJLSTJbcC+0CwH4U2lUE2AImSCPuiYZJk9Y6gLV+KZrHbw8vaXNksptlgyj/AFASCCRJ72kx11TaeGdT5wGw6ASIs1s8se4+FpPFoLnkk3JcdtF17S5oaJAhZ3k10zKtItHmR9LosMxEwZjSBIX2Kwz3GwnlykyG5SQJsbkX/e+hTDmwTLonlJhcw2aSTlGY6HodlT/Yk7YzsK45Q6ZBjMQXZiQZcLzNiQgODJy5SS1tjLYBMhouNdeu/ZbgpTJAIMEQPqF9thovmMhlmkAgNu+Dl3MAAC8LWyL1jHxrmuLoMBgmmAP/ACEQAOxLiV2k2QQWVC0C5uQwX2+FpYrCtgENlw1KKkwHl+gESZiJH5+6ZzmhmPcPpyuAMBokA2mCenohxXKAymxgAAkmXajdxPXZamHymdNdxr+4SX4OZMZouA2JJO07DRa95hkY7GVKgsxoDWjM8EM5BY3eQJ9NZVeHADSHgEmoc+cubDZjMMsgnXSxHVW08AA2ZGYWBziT1tsOymxGBe0ydCBp9Qvr2KvaH45iaE3L6YGUs5Gw4xI5QLHldAJ2365mIaOXICbRJcIJg8tthJCaWk8sy4gxF4BGWJHb8kFZjjGjYAbJEuge/wC4Wrx1i8jaAcRlJcRpI0AggZybd43nbcsbg2gktdULmyTmflB0mY9+aAm5/LAzRmJvIkuvrAXaoJBc1rQDtFx7rc4n+M5tURDhneS4jzGte0kk2mLTJuOt9bG50kEBoLgQ8EEkwZgwb3j4lW1akU8pa0OJ+sRMdIXK+DIIIs4iZm6LsWawnVLp1GrdRPTaC4y0Y1m1rLjqykajKmqOpVKWysQmNC64IxcYF2IKKliEkhFTCZDjSoV1fQrrIoK+itSGRdnCS8lC1EFmxZoaQvJRvqXXEDRdZHrDWVEwVEpcC1GLFJq9U/DVFA9Hh1GfVmJda3yowTN79JTXlLVmmmsqwiL53Ub18Cn1ZaVIA7bQgxAAERI6KeibI6uivVufC6dcAwBA37p9MgjKbiI10HQKQroV6s2qnAQAGiBEevVLxYBF4NrdlxpslP0ROE1fSPMDRla0N9NV3M0AWvrKW4XS36rpCpbDrnUJNaoQIBIBMlFTSMQty0fXA1pvqdpumU+p1iJSAnVEwzp//9k=",
        title: "12번째",
        endAt: "2024-03-25",
        nickname: "최햄버",
        category: "SNACK",
        ago: "20분 전",
    },
];

const HomePage = () => {
    const menuList = [
        { label: "전체", icon: <All /> },
        { label: "가게", icon: <Store /> },
        { label: "개인", icon: <Individual /> },
    ];
    const colorList = [
        "var(--yellow-90)",
        "var(--yellow-75)",
        "var(--yellow-50)",
    ];
    const [clicked, setClicked] = useState(menuList[0]);
    const [colorIndex, setColorIndex] = useState(0);
    //const [sharingList, setSharingList] = useState([]); // 나눔글 데이터
    const [sharingList, setSharingList] = useState(dummyData);
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [currentPosition, setCurrentPosition] = useState(null);

    const [postType, setPostType] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [searchText, setSearchText] = useState(""); // 검색 텍스트
    const [filteredSharingList, setFilteredSharingList] = useState([]); // 검색 결과 데이터
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);

    const [moreCount, setMoreCount] = useState(10); // 10개만 표시
    const handleShowMore = () => {
        setMoreCount((prev) => prev + 10);
    };
    const reversedList = [...filteredSharingList].reverse();

    useEffect(() => {
        console.log(`Bearer ${accessToken}`);
        axios
            .get(
                //'http://localhost:8080/members/test',
                `${process.env.REACT_APP_BASE_URL_LOGIN}/members/test`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // 예시: 쿠키에서 토큰 가져오기
                    },
                    withCredentials: true,
                }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {});
    }, []);

    useEffect(() => {
        clicked.label === "전체"
            ? setColorIndex(0)
            : clicked.label === "가게"
            ? setColorIndex(1)
            : setColorIndex(2);
    });

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const position = await getCurrentPosition();
                setCurrentPosition(position);
                console.log("현재 위치:", position);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchLocation();
    }, []);

    useEffect(() => {
        if (currentPosition) {
            fetchSharingList();
        }
    }, [clicked, currentPosition]);
    //유저 정보조회 API
    const fetchSharingList = async () => {
        setLoading(true);
        console.log("fetchSharingList: 함수 호출됨");
        console.log("fetchSharingList: 현재 위치:", currentPosition);
        try {
            const postType =
                clicked.label === "전체"
                    ? "ALL"
                    : clicked.label === "가게"
                    ? "STORE"
                    : "INDIVIDUAL";

            setLatitude(currentPosition.latitude);
            setLongitude(currentPosition.longitude);

            console.log("fetchSharingList: API 호출");
            console.log("파라미터:", { postType, latitude, longitude });
            console.log("경도:", longitude);
            const response = await getSharingList(
                postType,
                currentPosition.latitude,
                currentPosition.longitude
            );

            console.log("나눔글 조회 결과 호출:", response);
            // 데이터 설정
            const postList = response.data.data.postList || dummyData;
            setSharingList(postList);
            setFilteredSharingList(postList);
        } catch (err) {
            console.error(err);
            setSharingList(dummyData); // 🔹 API 요청 실패 시 기본 더미 데이터 사용
            setFilteredSharingList(dummyData);
        } finally {
            setLoading(false);
        }
    };
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);

        if (searchValue.trim() === "") {
            setFilteredSharingList(sharingList);
        } else {
            const filtered = sharingList.filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredSharingList(filtered);
        }
    };

    useEffect(() => {
        fetchSharingList();
    }, [clicked]);

    const handleClick = (item) => {
        setClicked(item);
    };

    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/postdetail/${id}`);
    };

    const handleWriteButtonClick = () => {
        navigate("/createpost"); // 글 작성 페이지로 이동
    };

    const handleMapButtonClick = () => {
        navigate("/mappage"); // 글 작성 페이지로 이동
    };

    return (
        <S.Layout>
            <NavigationBar />
            <ImgSlider />
            <S.ContentContainer>
                <S.SectionContainer>
                    {menuList.map((item, index) => (
                        <S.SectionClassificationButton
                            key={index}
                            onClick={() => handleClick(item)}
                            $isActive={clicked.label === item.label}
                        >
                            {item.icon}
                            {item.label}
                        </S.SectionClassificationButton>
                    ))}
                </S.SectionContainer>
                <S.SectionWrapper>
                    <S.SectionContentContainer>
                        <S.SearchBarContainer>
                            <S.SerchBarIcon />
                            <S.SerchInput
                                placeholder="검색하세요"
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                        </S.SearchBarContainer>
                    </S.SectionContentContainer>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <>
                            <ShareList
                                sharingList={reversedList.slice(0, moreCount)}
                                onClick={handlePostClick}
                            />
                            {reversedList.length > moreCount && (
                                <S.MoreButton onClick={handleShowMore}>
                                    더보기
                                </S.MoreButton>
                            )}
                        </>
                    )}
                </S.SectionWrapper>
            </S.ContentContainer>
            <S.MapButton onClick={handleMapButtonClick} />
            <S.WriteButton onClick={handleWriteButtonClick} />
        </S.Layout>
    );
};
export default HomePage;
