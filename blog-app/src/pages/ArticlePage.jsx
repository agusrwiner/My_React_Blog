import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const {articleId} = useParams();

    return (
        <h1>This is the ArticlePage for the article Id: {articleId}</h1>
    )
}

export default ArticlePage;