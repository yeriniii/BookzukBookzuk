import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile, setUserPosts } from "../../redux/modules/actions";
import { auth, db } from "../../firebase";
import {
  uploadProfilePicture,
  saveUserProfile,
} from "../../redux/modules/uploadProfilePicture";

const Profile = () => {
  const { profile } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const user = auth.currentUser;

  console.log("포스트", posts);

  /**프로필 수정 누르고 파일 바꾸기 */
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  /**프로필 사진 업로드 */
  const handleUploadPicture = async () => {
    if (!selectedFile) {
      console.error("파일을 선택해주세요.");
      return;
    }
    const imageUrl = await uploadProfilePicture(selectedFile);
    const updatedProfile = {
      ...profile,
      photoURL: imageUrl,
    };
    // 업로드된 사진의 URL을 Firestore에 저장
    await saveUserProfile(updatedProfile);
    dispatch(setUserProfile(updatedProfile));
  };

  console.log("프로필", profile);

  useEffect(() => {
    // 프로필 정보 로딩
    const loadProfile = async () => {
      if (user) {
        dispatch(
          setUserProfile({
            photoURL: user.photoURL,
            nickname: user.displayName,
            email: user.email,
          })
        );

        // 사용자의 게시글 로딩
        const userPosts = [];
        /** db에 "posts"로 저장된 문서 중, 사용자 ID와 일치하는 문서를 가져오는 함수 */
        const postsLoding = await db
          .collection("books")
          .where("authorId", "==", user.uid)
          .get();
        // 조회한 문서를 배열로 변환하여 userPosts에 저장함
        postsLoding.forEach((doc) =>
          userPosts.push({ id: doc.id, ...doc.data() })
        );
        dispatch(setUserPosts(userPosts));
      }
    };

    loadProfile();
  }, [user, dispatch]);

  if (!profile) {
    return <div>프로필 정보를 등록해주세요!</div>;
  }

  return (
    <div>
      <h1>프로필</h1>
      <div>
        <img src={profile.photoURL || "프로필 이미지"} alt="프로필 사진" />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUploadPicture}>프로필 등록/수정</button>
        <p>닉네임: {profile.nickname}</p>
        <p>이메일: {profile.email}</p>
      </div>
      <div>
        <h2>내 글</h2>
        {posts.length !== 0 &&
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
