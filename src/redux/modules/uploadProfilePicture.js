import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

/** 사진 업로드 및 URL 가져오는 로직 */
export const uploadProfilePicture = async (selectedFile) => {
    if (!selectedFile) {
        // 나중에 모달로 띄워주기
        console.error("파일을 선택해주세요.");
        return;
    }

    /** 파일 경로 설정 */
    const fileRef = ref(storage, `users/profilePictures/${selectedFile.name}`);
    await uploadBytes(fileRef, selectedFile);
    const imageUrl = await getDownloadURL(fileRef);
    return imageUrl;
};

export const saveUserProfile = async (userInfo) => {
    try {
        const docRef = await addDoc(collection(db, "users"), userInfo);
        console.log("문서 ID: ", docRef.id);
    } catch (error) {
        console.error("프로필 정보 저장 중 오류 발생:", error);
    }
};
