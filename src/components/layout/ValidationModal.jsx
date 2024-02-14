import {
  ModalBackdropStyle,
  ModalContentStyle,
  ModalMessageStyle,
  CancelClickBtnStyle,
  ConfirmClickBtnStyle,
} from "../../styles/ValidationModalStyled";

function ValidationModal({
  message,
  onCancel,
  onConfirm,
  showCancelButton = true,
}) {
  return (
    <ModalBackdropStyle>
      <ModalContentStyle>
        <ModalMessageStyle>{message}</ModalMessageStyle>
        <div>
          {showCancelButton && (
            <CancelClickBtnStyle onClick={onCancel}>취소</CancelClickBtnStyle>
          )}
          <ConfirmClickBtnStyle onClick={onConfirm}>확인</ConfirmClickBtnStyle>
        </div>
      </ModalContentStyle>
    </ModalBackdropStyle>
  );
}

export default ValidationModal;
