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
                Vald leverantör: <img src="/assets/images/coop.png" alt="-" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.39 13.06">
                                <g id="Layer_2" data-name="Layer 2" fill="#e3e3e3">
                                    <g id="Layer_1-2" data-name="Layer 1" fill="#e3e3e3">
                                        <polygon class="cls-1" points="49.75 0 48.17 1.57 51.54 5.5 0 5.5 0 7.5 51.58 7.5 47.44 11.64 48.85 13.06 55.39 6.52 49.75 0" />
                                    </g>
                                </g>
                            </svg>
                        </ArrowIcon>
                        <SubField>
                            Mina varor
                        </SubField>
                    </Center>
                    <Right>
                        <MenuAction href="javasscript:;" active={true}>
                            <IconWrapper>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.73 49.87">
                                    <g id="Layer_2" data-name="Layer 2" fill="#63ce96">
                                        <g id="Layer_1-2" data-name="Layer 1" fill="#63ce96">
                                            <rect class="cls-1" x="30.51" y="20.87" width="2.25" height="21.51" />
                                            <rect class="cls-1" x="3" y="20.87" width="2.25" height="21.51" />
                                            <polygon class="cls-1" points="7.11 6.2 6.37 4.89 3.53 6.48 4.27 7.79 7.11 6.2" />
                                            <polygon class="cls-1" points="7.11 9.72 6.37 8.41 3.53 10.01 4.27 11.31 7.11 9.72" />
                                            <polygon class="cls-1" points="6.37 11.94 3.53 13.54 4.27 14.85 7.11 13.25 6.37 11.94" />
                                            <rect class="cls-1" x="10.57" y="9.11" width="3.26" height="1.5" transform="translate(-3.27 7.24) rotate(-29.32)" />
                                            <rect class="cls-1" x="10.57" y="12.64" width="3.26" height="1.5" transform="translate(-5 7.69) rotate(-29.32)" />
                                            <path class="cls-1" d="M35,16.22l-.21-.3V10.75a4.88,4.88,0,0,0-4.87-4.87h-.34V4.58H31.8V1.13H23V4.58h2.23v1.3h-.06a4.87,4.87,0,0,0-4.83,4.3H18.86a4.78,4.78,0,0,0-1.61.28v-3a4.84,4.84,0,0,0-4.49-4.91,4.78,4.78,0,0,0-2.95.9A4.67,4.67,0,0,0,4.56.06,4.81,4.81,0,0,0,.63,4.88V16.22H0V43.3a2.2,2.2,0,0,0,.64,1.55L5,49.23a2.2,2.2,0,0,0,1.55.64H29.06a2.2,2.2,0,0,0,1.55-.64l1.61-1.61,1.26-1.26,1.61-1.61a2.2,2.2,0,0,0,.64-1.55v-27ZM33.48,42.27a2.2,2.2,0,0,1-.64,1.55L29.68,47a2.2,2.2,0,0,1-1.55.64H7.5A2.2,2.2,0,0,1,6,47L2.89,43.92a2.2,2.2,0,0,1-.64-1.55V18.47H33.48ZM23.83,3.82v-2h7v2Zm4.27.76v1.3H26.63V4.58Zm-3,3.55h4.77a2.62,2.62,0,0,1,2.62,2.62v4.69l-.8.78-1.09,1.07-1.16-1.07h0l-1.32-1.9-1.93,1.89V15.05a4.87,4.87,0,0,0-3.68-4.72A2.63,2.63,0,0,1,25.12,8.13Zm-8.87,6.92a2.62,2.62,0,0,1,1-2.06,2.58,2.58,0,0,1,1.61-.56h2.48a2.55,2.55,0,0,1,1.16.28A2.59,2.59,0,0,1,24,15.05l-.51-.73-1.94,1.9-1.09,1.07-.75-1.07-1.32-1.9-1.94,1.9h-.16ZM12.57,4.77A2.43,2.43,0,0,1,15,7.2v4.91a4.81,4.81,0,0,0-1,2.94v.3h0l-.72-1-1.05,1-2.06,1.94h0V7.2A2.43,2.43,0,0,1,12.57,4.77ZM2.88,4.68a2.43,2.43,0,0,1,4.86,0v10l-1.53,1.5L5.12,17.29l-.75-1.07-1.49-1.9Z" />
                                        </g>
                                    </g>
                                </svg>
                            </IconWrapper>
                            <LabelWrap>
                                Min matkasse
                            </LabelWrap>
                        </MenuAction>
                        <MenuAction href="javasscript:;">
                            <IconWrapper >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.63 47.94">
                                    <g id="Layer_2" data-name="Layer 2" fill="#333333">
                                        <g id="Layer_1-2" data-name="Layer 1" fill="#333333">
                                            <path class="cls-1" d="M42.17,20H37.76V16.54h2.45V14.91H31.77l4.86-10.2A2.8,2.8,0,0,0,35.3,1,2.76,2.76,0,0,0,33.17.87,2.8,2.8,0,0,0,31.58,2.3l-6,12.61H4v1.63H5.87V20H1.47A1.47,1.47,0,0,0,0,21.44V26.5A1.47,1.47,0,0,0,1.47,28h4.4V44.19a3.76,3.76,0,0,0,3.76,3.75H34a3.75,3.75,0,0,0,3.75-3.75V28h4.41a1.46,1.46,0,0,0,1.46-1.46V21.44A1.46,1.46,0,0,0,42.17,20ZM5.87,26.71H1.25V21.22H5.87ZM32.71,2.84a1.56,1.56,0,0,1,.88-.79,1.58,1.58,0,0,1,1.19.07,1.5,1.5,0,0,1,.78.86,1.54,1.54,0,0,1-.06,1.19L30.39,14.91H27Zm3.8,41.35a2.5,2.5,0,0,1-2.5,2.5H9.63a2.51,2.51,0,0,1-2.51-2.5V16.54H36.51Zm5.87-17.48H37.76V21.22h4.62Z" />
                                            <path class="cls-1" d="M13.36,11.57l.14.09-.53.18-.52.63a5,5,0,0,1-2.31-3,4.75,4.75,0,0,1,1-3.68A4.86,4.86,0,0,0,12.28,2.3a2.52,2.52,0,0,0-.59-1.23L12.39,0A3.8,3.8,0,0,1,13.5,2,5.92,5.92,0,0,1,12.18,6.5a3.59,3.59,0,0,0-.81,2.72A4.07,4.07,0,0,0,13.36,11.57Z" />
                                            <path class="cls-1" d="M20.43,11.57l.14.09-.53.18-.52.63a5,5,0,0,1-2.31-3,4.75,4.75,0,0,1,1-3.68A4.91,4.91,0,0,0,19.35,2.3a2.62,2.62,0,0,0-.59-1.23L19.46,0a3.8,3.8,0,0,1,1.11,2A5.92,5.92,0,0,1,19.25,6.5a3.59,3.59,0,0,0-.81,2.72A4,4,0,0,0,20.43,11.57Z" />
                                        </g>
                                    </g>
                                </svg>
                            </IconWrapper>
                            <LabelWrap>
                                Laga
                            </LabelWrap>
                        </MenuAction>
                        <MenuAction href="javasscript:;">
                            <IconWrapper>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 49.83">
                                    <g id="Layer_2" data-name="Layer 2" fill="#333333">
                                        <g id="Layer_1-2" data-name="Layer 1" fill="#333333">
                                            <path class="cls-1" d="M18.23,21.13A10.57,10.57,0,1,0,7.66,10.57,10.58,10.58,0,0,0,18.23,21.13ZM18.23,3a7.57,7.57,0,1,1-7.57,7.57A7.58,7.58,0,0,1,18.23,3Z" />
                                            <path class="cls-1" d="M18.23,26.16c-.31,0-.61,0-.91,0C8.3,26.83.52,36.93,0,48.65c0,.39,0,.79,0,1.18H3C3,39,10.26,29.16,18.23,29.16c10,0,15.22,10.4,15.22,20.67h3C36.45,38.06,30.19,26.16,18.23,26.16Z" />
                                        </g>
                                    </g>
                                </svg>
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
    svg{
        height:7px;
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
    color:${props => props.active ? '#63ce96' : '#333333'}
`;
const IconWrapper = styled.div`
    svg{
        height:26px;
    }
`;
const LabelWrap = styled.div`
    font-size: 10px;
    letter-spacing: -.04px;
    font-family:${Celias};
    font-weight:400;
`;
export default Appbar;