import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile, setUserPosts } from "../../redux/modules/actions";
import { auth, db } from "../../assets/fierbase";
import ProfilePhotoUpload from "../../redux/modules/ProfilePhotoUpload";
import { collection, getDocs, query, where } from "firebase/firestore";
import Header from "../layout/Header";

const Profile = () => {
  const { profile } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const user = auth.currentUser;
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    if (user) {
      setProfileImageUrl(user.photoURL); // 초기 프로필 이미지 URL 설정
    }
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
        try {
          const q = query(
            collection(db, "books"),
            where("authorId", "==", user.uid)
          );
          const querySnapshot = await getDocs(q);
          const userPosts = [];
          querySnapshot.forEach((doc) => {
            userPosts.push({ id: doc.id, ...doc.data() });
          });
          dispatch(setUserPosts(userPosts));
        } catch (error) {
          console.error("게시글 로딩 중 오류 발생:", error);
        }
      }
    };

    loadProfile();
  }, [user, dispatch]);

  const handleProfileUpdate = (imageUrl) => {
    setProfileImageUrl(imageUrl); // 업로드된 이미지 URL로 업데이트
    dispatch(
      setUserProfile({
        photoURL: user.photoURL,
        nickname: user.displayName,
        email: user.email,
      })
    );
  };

  console.log("프로필", profile);
  console.log("포스트", posts);

  if (!profile) {
    return <div>프로필 정보를 등록해주세요!</div>;
  }

  return (
    <>
      <Header />
      <div>
        <h1>프로필</h1>
        <div>
          <img src={profileImageUrl || "프로필 사진"} alt="프로필 사진" />
          <ProfilePhotoUpload onUploadComplete={handleProfileUpdate} />
          <p>닉네임: {profile.nickname}</p>
          <p>이메일: {profile.email}</p>
        </div>
        <div>
          <h2>내 글</h2>
          {posts.length !== 0 &&
            posts.map((post) => (
              <div key={post.id}>
                <img src={post.imageUrl} alt="게시글 이미지" />
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
