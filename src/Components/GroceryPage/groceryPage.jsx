import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Media from "../../shared-components/media";
import { Container, Row, Col } from '@bootstrap-styled/v4';
import { Celias, CeliasBold, CeliasItalic } from "../../shared-components/fonts";
import Modal from "../Modal/modal";
const GroceryPage = ({ }) => {
    const [modal, setShowModal] = useState(false);
    return (
        <CustomContainer>
            <Modal
                show={modal}
                setShowModal={(val) => setShowModal(val)}
                title={
                    <Fragment>
                        FÅ ETT SKRÄDDARSYTT <br />
                        MENYFÖRSLAG
                    </Fragment>
                }
                content="Vi kommer nu ställa några korta frågor för att kunna skapa ett menyförslag med recept som vi hoppas passar dig."
            />
            <FlowWrapper>
                <IconWrapper>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.67 70.25">
                        <g id="Layer_2" data-name="Layer 2" fill="#333333">
                            <g id="Layer_1-2" data-name="Layer 1" fill="#333333">
                                <path class="cls-1" d="M18.43,15.53V.11h-4V15.53a5.29,5.29,0,0,1-3.22,5V.11h-4V20.48a5.28,5.28,0,0,1-3.21-5V.11H0V15.53a9.25,9.25,0,0,0,7.21,9.1v5.74a5.74,5.74,0,0,0-3.7,5.33V64.55a5.71,5.71,0,0,0,11.41,0V35.7a5.73,5.73,0,0,0-3.71-5.33V24.63A9.26,9.26,0,0,0,18.43,15.53Zm-10.92,49V35.7a1.71,1.71,0,0,1,3.41,0V64.55a1.71,1.71,0,0,1-3.41,0Z" />
                                <path class="cls-1" d="M81.67,12.72C81.67,5.71,77.11,0,71.5,0S61.33,5.71,61.33,12.72c0,6.12,3.46,11.31,8.17,12.48v5.17a5.72,5.72,0,0,0-3.7,5.33V64.55a5.7,5.7,0,1,0,11.4,0V35.7a5.72,5.72,0,0,0-3.7-5.33V25.2C78.22,24,81.67,18.84,81.67,12.72ZM71.5,4c3.4,0,6.17,3.91,6.17,8.72s-2.77,8.73-6.17,8.73-6.17-3.92-6.17-8.73S68.1,4,71.5,4Zm0,30a1.7,1.7,0,0,1,1.7,1.7V64.55a1.7,1.7,0,1,1-3.4,0V35.7A1.7,1.7,0,0,1,71.5,34Z" />
                                <path class="cls-1" d="M40.48,10.3A24.39,24.39,0,1,0,64.86,34.69,24.41,24.41,0,0,0,40.48,10.3Zm0,4A20.39,20.39,0,1,1,20.1,34.69,20.41,20.41,0,0,1,40.48,14.3Z" />
                                <path class="cls-1" d="M40.48,48.18A13.5,13.5,0,1,0,27,34.69,13.5,13.5,0,0,0,40.48,48.18Zm0-23A9.5,9.5,0,1,1,31,34.69,9.51,9.51,0,0,1,40.48,25.19Z" />
                            </g>
                        </g>
                    </svg>
                </IconWrapper>
                <BoldText>
                    PLANERA MÅLTIDER
                </BoldText>
                <NormalText>
                    Välj vad ni ska äta framöver:
                </NormalText>
            </FlowWrapper>
            <CustomRow>
                <GallerBoxWrap width="22%">
                    <img src="/assets/images/ghost-menu.jpg" alt="-" />
                    <ButtonWrapper onClick={() => setShowModal(true)}>
                        FÅ PERSONLIGT MENYFÖRSLAG
                    </ButtonWrapper>
                </GallerBoxWrap>
                <GallerBoxWrap width="12.6%">
                    <LightText>eller</LightText>
                </GallerBoxWrap>
                <GallerBoxWrap width="22%">
                    <img src="/assets/images/ghost-recipe.jpg" alt="-" />
                    <ButtonWrapper onClick={() => window.open('https://www.gastrofy.se/recipes/discover', '_self')}>
                        VÄLJ RECEPT SJÄLV
                    </ButtonWrapper>
                </GallerBoxWrap>
            </CustomRow>
        </CustomContainer>
    )
}
const CustomContainer = styled(Container)`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:100px;
`;
const GallerBoxWrap = styled.div`
    img{
        width:100%;
        display:block;
    }
    ${Media('xlscreens')}{
        width:${props => props.width ? props.width : '33.33%'};
    }
`;
const FlowWrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-top:20px;
    margin-bottom:30px;
    width:100%;
`;
const CustomRow = styled(Row)`
    justify-content:center;
    width:100%;
    margin-top:20px;
`;
const IconWrapper = styled.div`
    svg{
        height:38px;
    }
`;
const LightText = styled.div`
    font-size:12px;
    font-family:${CeliasItalic};
    display:flex;
    justify-content:center;
    margin-top: 55px;
`;
const BoldText = styled.div`
    padding-top: 10px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    color: #202020;
    font-family:${CeliasBold};
    line-height: 1.67;
    letter-spacing:0.22px;
`;
const NormalText = styled.div`
    font-size: 1rem;
    font-family:${Celias};
    font-weight:400;
    line-height: 1.67;
`;
const ButtonWrapper = styled.button`
    margin-top: 25px;
    width: 249px;
    color: #fff;
    background-color: #fa85a5;
    font-weight: 700;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
    border: 1px solid transparent;
    font-size: 12px;
    height: 42px;
    cursor: pointer;
    text-align: center;
    outline: none!important;
    text-decoration: none!important;
    padding:1px 6px;
    border-radius:20px;
    font-family:${CeliasBold}
`;
export default GroceryPage;