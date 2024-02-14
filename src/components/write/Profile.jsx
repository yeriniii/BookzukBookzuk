import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile, setUserPosts } from "../../redux/modules/actions";
import { auth, db } from "../../assets/fierbase";
import ProfilePhotoUpload from "../../redux/modules/ProfilePhotoUpload";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ProfileIcon } from "../../assets/ProfileIcon";
import {
  ProfileBodyStyle,
  ProfileGroupStyle,
  ProfileImgStyle,
  ProfileUserInfoSytle,
  ProfileNicknameStyle,
  ProfilePostsStyle,
  ProfilePostCardStyle,
  ProfilePostCardsStyle,
} from "../../styles/MypageStyled";

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
          const posts = [];
          querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() });
          });
          dispatch(setUserPosts(posts));
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

  if (!profile) {
    return <div>프로필 정보를 등록해주세요!</div>;
  }

  return (
    <ProfileBodyStyle>
      <h1>프로필</h1>
      <ProfileGroupStyle>
        <ProfileImgStyle>
          {profileImageUrl ? (
            <img src={profileImageUrl} alt="프로필 사진" />
          ) : (
            <ProfileIcon />
          )}
          <ProfilePhotoUpload onUploadComplete={handleProfileUpdate} />
        </ProfileImgStyle>
        <ProfileUserInfoSytle>
          <ProfileNicknameStyle>{profile.nickname}</ProfileNicknameStyle>
          <p>이메일 : {profile.email}</p>
        </ProfileUserInfoSytle>
      </ProfileGroupStyle>
      <ProfilePostsStyle>
        <h2>내 글</h2>
        <ProfilePostCardsStyle>
          {posts.length !== 0 &&
            posts.map((post) => (
              <ProfilePostCardStyle key={post.id}>
                <img src={post.imageUrl} alt="게시글 이미지" />
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </ProfilePostCardStyle>
            ))}
        </ProfilePostCardsStyle>
      </ProfilePostsStyle>
    </ProfileBodyStyle>
  );
};

export default Profile;
