import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonContrast } from "./components/button";
import InputText from "./components/input-text";
import Overlay from "./overlay";

const modalRoot = document.getElementById('portal')
class ModalPortal extends React.Component{
  constructor(props){
    super(props)
    this.el = document.createElement("div");
  }

  componentWillUnmount(){
    modalRoot.removeChild(this.el);
  }

  componentDidMount(){
    modalRoot.appendChild(this.el);
  }

  render(){
      return ReactDom.createPortal(this.props.children, this.el )
  }
}

export default function Modal({isActive, setModal}) {
  if(isActive){
    return (
      <ModalPortal>
        <ModalContent setModal={setModal}></ModalContent>
      </ModalPortal>
    )
  }
  return null
}

const ModalContentStyled = styled.form`
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;
  border-radius: .5rem;
  position: fixed;
  inset-block-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  inset-inline-start: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 24rem;
  .title{
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`

function ModalContent({setModal}) {
  const form = useRef(null);
  const navigator = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ form });

    const formData = new FormData(form.current);
    console.log(formData.get("username"));
    navigator(`/${formData.get("username")}`);
    setModal(false)
  }

  return (
    <Overlay>
      <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
        <h2 className="title">Busca a tu usuario favorito</h2>
        <InputText type="text" autoComplete='off' name="username" placeholder="Username" />
        <ButtonContrast text="Buscar"/>
      </ModalContentStyled>
    </Overlay>
  );
}
