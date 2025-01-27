import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import Magnifier from "../../../assets/magnifier.svg";
import colors from "styles/colors";
import { requestSearchKeyword, requestSearchPlace } from "apis";

const MultiSearchBar = ({ itemClickHandler, contentHandler, init }) => {
    const [isInit, setInit] = useState(init ? true : false);
    const [content, setContent] = useState("");
    const [results, setResults] = useState([]);
    const [isSuccess, setIsSuccess] = useState(true);
    const [isKeyword, setIsKeyword] = useState(null);

    const input = useRef();

    const searchQuery = (query) => {
        if (query === "") return;
        try {
            console.log("placeSearch");
            requestSearchPlace(query)
                .then((res) => {
                    if (res.data === []) setIsSuccess(false);
                    else setIsSuccess(true);
                    setResults(res.data);
                })
                .catch((e) => {
                    setResults([]);
                    setIsSuccess(false);
                });
        } catch (err) {
            console.log(err);
        } finally {
        }
    };
    const searchKeywordQuery = (query) => {
        if (query === "") return;
        try {
            console.log("keywordSearch", query.slice(1, query.length));
            requestSearchKeyword(query.slice(1, query.length))
                .then((res) => {
                    if (res.data === []) setIsSuccess(false);
                    else setIsSuccess(true);
                    console.log(res.data);
                    setResults(res.data);
                })
                .catch((e) => {
                    console.log(e);
                    setResults([]);
                    setIsSuccess(false);
                });
        } catch (err) {
            console.log(err);
        } finally {
        }
    };
    const onChange = (e) => {
        setContent(e.target.value);
        setInit(false);
        setTimeout(() => {
            //TODO
            if (e.target.value.includes("#")) {
                setIsKeyword(true);
                searchKeywordQuery(e.target.value);
            } else {
                setIsKeyword(false);
                searchQuery(e.target.value);
            }
            contentHandler(e.target.value); //text 보내기용
        }, 200);
    };
    return (
        <S.SearchBarLayout>
            <S.SearchBox>
                <S.MagnifierIcon
                    src={Magnifier}
                    onClick={() => {
                        searchQuery(content);
                        setContent("");
                        input.current.value = "";
                    }}
                ></S.MagnifierIcon>
                <S.StyleSearchBar
                    ref={input}
                    value={isInit ? init : content}
                    placeholder="검색"
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            setContent("");
                        }
                    }}
                    onSubmit={(e) => {
                        setContent("");
                        input.current.value = "";
                    }}
                    onChange={(e) => {
                        onChange(e);
                    }}
                ></S.StyleSearchBar>
            </S.SearchBox>
            {content !== "" && isSuccess && results.length > 0 ? (
                <>
                    <hr style={{ width: "95%", height: "0.5px", border: `0.5px solid ${colors.black_30}` }} />
                    <S.SearchListWrapper>
                        {results.map((i, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setResults([]);
                                        itemClickHandler(
                                            isKeyword
                                                ? { type: "keyword", id: null, name: i.keyword, ...i }
                                                : { type: "place", id: i.placeId, name: i.placeName, ...i },
                                        );
                                        setContent("");
                                    }}
                                >
                                    {isKeyword ? i.keyword : i.placeName}
                                </li>
                            );
                        })}
                    </S.SearchListWrapper>
                </>
            ) : null}
            {results.length === 0 && content !== "" ? (
                <h1
                    style={{
                        margin: "0 auto",
                        paddingTop: "10px",
                        fontSize: "12px",
                    }}
                >
                    검색결과 없음
                </h1>
            ) : null}
        </S.SearchBarLayout>
    );
};

export default MultiSearchBar;
