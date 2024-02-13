import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../assets/fierbase";
import Feed from "../components/Feed";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";

const FeedDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getPost = async () => {
      try {
        const docRef = doc(db, "books", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };
    getPost();
  }, [id]);

  return (
    <div>
      <Header />
      {post && <Feed FeedObj={post} isOwner={post.createorId === user.uid} />}
    </div>
  );
};

export default FeedDetail;
