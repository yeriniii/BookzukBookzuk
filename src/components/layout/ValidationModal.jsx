import {
  ModalBackdropStyle,
  ModalContentStyle,
  ModalMessageStyle,
  CancelClickBtnStyle,
  ConfirmClickBtnStyle,
} from "../../styles/ValidationModalStyled";

function ValidationModal() {
  return (
    <ModalBackdropStyle>
      <ModalContentStyle>
        <ModalMessageStyle>유효성 검사를 위한 메세지입니다.</ModalMessageStyle>
        <div>
          {showConfirmButton && (
            <CancelClickBtnStyle onClick={onCancel}>취소</CancelClickBtnStyle>
          )}
          <ConfirmClickBtnStyle onClick={onConfirm}>확인</ConfirmClickBtnStyle>
        </div>
      </ModalContentStyle>
    </ModalBackdropStyle>
  );
}

export default ValidationModal;
