import { useState } from "react";
import { storage, db, auth } from "../../assets/fierbase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  ref as storageRef,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import {
  ProfileButtonStyle,
  ProfileInputStyle,
} from "../../styles/MypageStyled";
import ValidationModal from "../../components/layout/ValidationModal";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../../redux/modules/actions";

function ProfilePhotoUpload({ onUploadComplete }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { isVisible, message } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const user = auth.currentUser;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url); // 미리보기 URL 상태 업데이트
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !user) return;

    const storageRef = ref(
      storage,
      `profilePhotos/${user.uid}/${selectedFile.name}`
    );
    await uploadBytes(storageRef, selectedFile);
    const imageUrl = await getDownloadURL(storageRef);

    // Firestore에 프로필 정보 업데이트

    try {
      await updateProfile(user, { photoURL: imageUrl });
      dispatch(
        showModal({
          message: "프로필 사진을 등록했습니다.",
        })
      );
      setSelectedFile(null);
      setPreviewUrl(null);
      onUploadComplete(imageUrl);
    } catch (error) {
      console.error("프로필 사진 업데이트 중 오류 발생:", error);
    }
  };

  const handleDeletePhoto = async () => {
    if (!user) return;
    try {
      // 사용자 프로필의 photoURL 업데이트하여 프로필 사진 삭제 처리
      await updateProfile(user, { photoURL: null });
      console.log("프로필 사진이 삭제되었습니다.");
      dispatch(showModal({ message: "프로필 사진이 삭제되었습니다." }));
      onUploadComplete(null); // 콜백을 통해 상위 컴포넌트에 알림
      setPreviewUrl(null); // 미리보기 URL 초기화
    } catch (error) {
      console.error("프로필 사진 삭제 중 오류 발생:", error);
      dispatch(showModal({ message: "프로필 사진 삭제에 실패했습니다." }));
    }
  };

  return (
    <>
      <ProfileInputStyle htmlFor="input-file">사진 찾아보기</ProfileInputStyle>
      <input
        id="input-file"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {user.photoURL && (
        <ProfileInputStyle onClick={handleDeletePhoto} $bgcolor="#3D2721">
          사진 삭제
        </ProfileInputStyle>
      )}
      {previewUrl && (
        <>
          <img
            src={previewUrl}
            alt="Preview"
            style={{ width: "150px", height: "150px" }}
          />
          <p>미리보기</p>
        </>
      )}
      <ProfileButtonStyle onClick={handleUpload}>
        프로필 등록
      </ProfileButtonStyle>
      {isVisible && (
        <ValidationModal
          isVisible={isVisible}
          message={message}
          onCancel={() => dispatch(hideModal())}
          onConfirm={() => {
            dispatch(hideModal());
          }}
          showCancelButton={false}
        />
      )}
    </>
  );
}

export default ProfilePhotoUpload;
