import React from "react";
import styled from "styled-components";
import { Celias, CeliasBold } from "../../shared-components/fonts";
const Modal = ({ title, content, actionText, show, setShowModal }) => {
    const closeModal=()=>{
        setShowModal(false);
    }
    return (
        <Wrapper show={show}>
            <OverlayWrapper onClick={closeModal} />
            <ModalWrapper show={show}>
                <CloseIcon onClick={closeModal}>
                    <img src="/assets/images/cross.png" alt="-"/>
                </CloseIcon>
                <ContentWrapper>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {content}
                    </p>
                    <ActionBtn>
                        SKAPA MENYFÖRSLAG
                    </ActionBtn>
                </ContentWrapper>
            </ModalWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.5s cubic-bezier(.4,0,.2,1);
    ${props => {
        if (props.show) {
            return `
                visibility:visible;
                opacity:1;
                background-color:rgba(0,0,0,0.5);
            `;
        }
        else {
            return `
                visibility:hidden;
                opacity:0;
                background-color:transparent;
        `;
        }
    }}
`;
const OverlayWrapper = styled.div`
    height:100%;
    width:100%;
    background-color:transparent;
    transition: background-color 0.5s cubic-bezier(.4,0,.2,1);
`;
const ModalWrapper = styled.div`
    max-width: 500px;
    min-height: 500px;
    max-height: 650px;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
    width: 100%;
    height: 100%;
    background-color: #fff;
    position:absolute;
    ${props => {
        if (props.show) {
            return `
                opacity: 1;
                transform: translateY(0);
            `;
        }
        else{
            return `
                opacity: 0;
                transform: translateY(-20px);
            `;
        }
    }}
    `;
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 20px 0;
    flex-grow: 1; 
    h3{
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.4rem;
        padding-bottom: 1rem;
        font-family:${CeliasBold};
        line-height: 1.67;
        margin-top: 0;
        margin-bottom: .5rem;
        width:100%;
    }
    p{
        text-align: center;
        padding-bottom: 1rem;
        margin:0;
        font-family:${Celias};
        line-height: 1.67;
        font-weight: 400;
    }
`;
const CloseIcon = styled.div`
    height:50px;
    width:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    img{
        height:18px;
        cursor:pointer;
    }
`;
const ActionBtn = styled.button`
    width: 215px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff57f;
    min-width: 249px;
    color: #333;
    font-weight: 700;
    border-radius: 21px;
    border: 1px solid transparent;
    font-size: 12px;
    height: 42px;
    cursor: pointer;
    text-align: center;
    outline: none!important;
    text-decoration: none!important;
    position:absolute;
    bottom:50px;
    font-family:${CeliasBold};
`;
export default Modal;
