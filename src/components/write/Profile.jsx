import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile, setUserPosts } from "../../redux/modules/actions";
import { auth, db } from "../../firebase";

const ProfilePage = () => {
  const { profile, posts } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // 프로필 정보 로딩
    const loadProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        // 임시 프로필 설정
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
          .collection("posts")
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
  }, [dispatch]);

  return (
    <div>
      <h1>프로필</h1>
      <div>
        <img src={profile.photoURL} alt="프로필 사진" />
        <p>닉네임: {profile.nickname}</p>
        <p>이메일: {profile.email}</p>
      </div>
      <div>
        <h2>내 글</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
