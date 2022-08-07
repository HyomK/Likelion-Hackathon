import Header from "components/commons/Header";
import React from "react";
import PlaceDetail from "components/PlaceDetail";
import PlaceInfo from "components/PlaceInfo";
import { ScrollDiv, CardWrapper, RecomandBox } from "./styles";
import PlaceBanner from "../../../components/PlaceBanner/index";
import KeyWordTab from "../../../components/KeyWordTab/index";
import colors from "../../../styles/colors";
import PostTab from "./PostTab";
import PhotoCard from "components/PhotoCard";
import PlusButton from "../../../components/commons/Button/plusButton";

const PlacePage = () => {
    const places = [1, 2, 3, 4, 5, 6, 7, 8];
    const keywords = [
        "감성이 넘치는",
        "서울핫플",
        "자연친화적인",
        "초록색",
        "감성이 넘치는",
        "서울핫플",
        "자연친화적인",
        "초록색",
        "서울핫플",
        "자연친화적인",
        "초록색",
    ];
    return (
        <ScrollDiv>
            <Header />
            <PlaceBanner
                banners={[
                    "data:image/jpeg;base64,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",
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHEgoHBwcJBgYJDRENCAcHBxAICQoNFREWFhURHx8YHSggGBolGxMVITEhJSkrLi46Fx8zODMsNygtLisBCgoKDQ0NDw0NDy0ZHx0rKysrKy0rLSstKysrLSsrKysrKystKysrKysrKysrKy0rKysrKysrKysrLSsrKysrK//AABEIAIQA7AMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAACAQADBgcE/8QAFxABAQEBAAAAAAAAAAAAAAAAAQACEf/EABsBAAMBAQEBAQAAAAAAAAAAAAECAwQABwUG/8QAGREBAQEBAQEAAAAAAAAAAAAAAAECAxES/9oADAMBAAIRAxEAPwD9q27ZY9vo3D9/FqMe1p3AkMhgMhpayWkSGJUaGslpkiBIaOoWmMiIyKOoSkMxgMho2EpkiBIp2EroSIEinYWmSIkiSwlIkRKkthKRIiVJaSkSiSIeBVKlCRAtUrQrcFeOW3aLS/eXD7kpdsMbU7gfTGoxGQ0dYCkMhgMhs+shTJDAZDQ1ktMZECZQ1CUiZAkUNQlMmXMmUrCUyREkU7C0yRAmU7CUiREkSUlIqRJEtJSK0JEKWqVKFSAUitCtxXjFotFteiXL7Uq9sNLSXA+kMhgMhoay70xkMCo2bWQ9dCQwGQ2fWQpjMgSLNqFpky5kyhqEpkiJIoWEpky5l0KVhKRIiSKVhKRMgTJaSqSIkiSkpEiJIgWqVKFSAUitCtxa8StFsse3pdy+nNF2wx7UadyaaMZDcxkNDWTTToMhuYyGz7y710JEBmNm3l3pEyBIsu4FroSIEyzbhaZMgTLPqEpEyBMo2EpkiJIpVOkSIkynSVSRQqSUtIkRJEKWqVLFSBapWhW4rwy0Wi27eo2NU2vajEsNOw82YyGAyGjqHm3QZFzGZZ9w00ZIgTLLuD6ZMuZdCy7g+mTLmXQsm4FpF0IEyzahbSJkSZZ9QlpEiJMpUlIkUCQU6SqSKBIJKSqVLBUlpapUoEiBapXlitxXgmlml6rYWdFKkSpJYpOhEiJUo6ik6OhIgTLPuKTZF0LmTLJuKTZl0LmXQsnSD9EXQgTLJuD9GTIhMLLstpEwiF0Cz6C1QmEQugUKS1gmFAkFK0lqhILBIJLS2sFQsEghaS1gqFgkEvoWsFbBXkPS+vAMZJS9YYJ0QqWqEtUnRSREmUdRSdFJkSRZ9xWdCLoRCYWXcVnQgmEQugWPZ50ILoEQugWPZptQugUCYWTbvtQugUCYWXVD6UJhQJhQtC6YJhYJhStC1AkFQkElpbRCQVCoS2ltYKhUKhL6W1AryoVj6Hr56lJpTl6z6+HOghUKhYJaedGCQWCYUtKTqwTCgTCz7VnVQmFgumSy9FZ1YLpktkumSxdKpOrZLpktkumSxbqk6NkugWyXTJY+lNNsF0CwXQLJuj9oEwsF0Chqj9iEwqEgo2h9IFQkEgktd9CEuSCwS+h6ISCQWC70PUCsgtd6Hr520ta9bfnY0i1paeESLWpaUhF0LWs+1IeboWtZOikdM3TNrWPorHXN0za1i6KR0zdC1rFs0dQJlrWTZ4ZMpazaMZIralRUkUtJXGVtaVzFbWucxK1roD//2Q==",
                    "data:image/jpeg;base64,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",
                    "data:image/jpeg;base64,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",
                ]}
            />

            <PlaceInfo
                category={"자연"}
                phone={"0000000"}
                name={"서울숲"}
                address={"서울시 어딘가"}
                rating={5}
                reviewNum={99}
            />
            <hr style={{ height: "0.5px", border: `0.5px solid ${colors.black_30}` }} />
            <KeyWordTab keywords={keywords} />
            <hr style={{ height: "0.5px", border: `0.5px solid ${colors.black_30}`, margin: 0 }} />

            <PostTab />

            <RecomandBox>
                <div style={{ display: "flex", marginBottom: "5px" }}>
                    <h1>서울숲</h1>
                    <p>과 비슷한 포토존</p>
                </div>
                <CardWrapper>
                    {places.map((place, index) => {
                        return <PhotoCard key={index} category={"자연"} rating={5} placeName={"장소 이름"} />;
                    })}
                </CardWrapper>
            </RecomandBox>
        </ScrollDiv>
    );
};

export default PlacePage;