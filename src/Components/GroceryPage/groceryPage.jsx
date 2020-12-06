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
                    fff
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
                <GallerBoxWrap width="13%">
                    <LightText>eller</LightText>
                </GallerBoxWrap>
                <GallerBoxWrap width="22%">
                    <img src="/assets/images/ghost-recipe.jpg" alt="-" />
                    <ButtonWrapper onClick={()=>window.open('https://www.gastrofy.se/recipes/discover')}>
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