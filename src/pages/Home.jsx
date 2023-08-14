import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/features/postsSlice";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  console.log("🚀 ~ file: Home.jsx:8 ~ Home ~ loading:", loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts());
    }, 2000);
  }, [dispatch]);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className=" h-screen w-full">
      <h1 className=" font-bold underline text-9xl text-black">
        Hi Curious Devs !
      </h1>
      {posts.length && (
        <div>
          {posts.map((post) => (
            <h6 key={post?.id}>{post?.title}</h6>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
