import BackButton from "../../components/common/BackButton/backButton";
import PostInput from "../../components/common/PostInput/postInput";
const PostSharePage = () => {
    return (
        <>
            <BackButton text={"게시글 작성"} />
            <PostInput text={"제목"} />
        </>
    );
};
export default PostSharePage;
