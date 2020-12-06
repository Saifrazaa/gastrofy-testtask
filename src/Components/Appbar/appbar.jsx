import React from "react";
import styled from "styled-components";
import Media from "../../shared-components/media";
import {
    CeliasBold,
    CeliasLight,
    CeliasHairline,
    CeliasBlack,
    Celias,
    CeliasMedium,
    CeliasThin
} from "../../shared-components/fonts";
const Appbar = ({ }) => {
    return (
        <Wrapper>
            <StoreProvider>
                Vald leverantör: <img src="/assets/images/coop.png" alt="-"/>
            </StoreProvider>
            <AppBarWrapper>
                <InnerWrapper>
                    <Left>
                        <a href="https://www.gastrofy.se/">GASTROFY</a>
                    </Left>
                    <Center>
                        <Field>
                            Min meny
                        </Field>                        
                        <ArrowIcon>
                            <img src="/assets/images/arrow-forward.png" alt="-"/>
                        </ArrowIcon>
                        <SubField>
                            Mina varor
                        </SubField>
                    </Center>
                    <Right>
                        <MenuAction href="javasscript:;" active={true}>
                            <IconWrapper>
                                <img src="/assets/images/mastake.png" alt="-"/>
                            </IconWrapper>
                            <LabelWrap>
                                Min matkasse
                            </LabelWrap>
                        </MenuAction>
                        <MenuAction href="javasscript:;">
                            <IconWrapper >
                                <img src="/assets/images/cook.png" alt="-"/>
                            </IconWrapper>
                            <LabelWrap>
                                Laga
                            </LabelWrap>
                        </MenuAction>
                        <MenuAction href="javasscript:;">
                            <IconWrapper>
                                <img src="/assets/images/account.png" alt=""/>
                            </IconWrapper>
                            <LabelWrap>
                                Logga in
                            </LabelWrap>
                        </MenuAction>
                    </Right>
                </InnerWrapper>
            </AppBarWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    height:90px;
    width:100%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.15);
    position:fixed;
    top:0;
`;
const StoreProvider = styled.div`
    height:20px;
    display:flex;
    justify-content:center;
    font-size:10px;
    align-items:center;
    color:#666;
    font-family:${Celias};
    font-weight:400;
    img{
        height:14px;
        margin-left:5px;
        cursor:pointer;
    }
`;
const ArrowIcon = styled.div`
    margin:0px 10px;
    img{
        height:10px;
    }
`;
const AppBarWrapper = styled.div`
    width:100%;
    height:70px;
    background-color:#ffffff;
`;
const InnerWrapper = styled.div`
    width:100%;
    height:100%;
    margin-right:auto;
    margin-left:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${Media('xlscreens')}{
        max-width:1140px;
    }
`;
const Left = styled.div`
    width:250px;
    font-family:${CeliasBold};
    font-size:18px;
    letter-spacing:3px;
    padding-top:5px;
    margin-left:0;
    font-weight:700;
    a{
        text-decoration:none;
        color:#333333;
        font-weight:700;
        background-color: transparent;
    }
`;
const Center = styled.div`
    flex-shrink: 0;
    flex-grow: 1;
    justify-content:center;
    align-items:center;
    display:flex;
    line-height:1;
`;
const Field = styled.div`
    font-family:${CeliasBold};
    font-weight:700;
    color:#fa85a5;
    letter-spacing: .88px;
    font-size: 21px;
    cursor:pointer;
`;
const SubField = styled.div`
    font-family:${Celias};
    font-weight:400;
    color:#dcdddc;
    letter-spacing: .88px;
    font-size: 21px;
`;
const Right = styled.div`
    width:230px;
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
    padding-right: 0;
    margin-right:20px;
    margin-bottom:5px;
`;
const MenuAction = styled.a`
    // width:33.33%;
    text-align:center;
    text-decoration:none;
    color:${props=>props.active?'#57ca8e':'#333333'}
`;
const IconWrapper = styled.div`
    img{
        height:30px;
    }
`;
const LabelWrap = styled.div`
    font-size: 10px;
    letter-spacing: -.04px;
    font-family:${Celias};
    font-weight:400;
`;
export default Appbar;