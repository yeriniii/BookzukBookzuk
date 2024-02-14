import { useState } from "react";
import { storage, db, auth } from "../../assets/fierbase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import {
  ProfileButtonStyle,
  ProfileInputStyle,
} from "../../styles/MypageStyled";

function ProfilePhotoUpload({ onUploadComplete }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const user = auth.currentUser;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
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
      alert("프로필 사진이 업데이트되었습니다.");
      setSelectedFile(null);
      onUploadComplete(imageUrl);
    } catch (error) {
      console.error("프로필 사진 업데이트 중 오류 발생:", error);
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
      <ProfileButtonStyle onClick={handleUpload}>
        프로필 등록
      </ProfileButtonStyle>
    </>
  );
}

export default ProfilePhotoUpload;
