import React, {useState, useEffect} from "react";

// export default ({postId}) => {
//     const [comments, setComments] = useState([])
//
//     const fetchData = async () => {
//         const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
//
//         setComments(res.data)
//     }
//
//     useEffect(() => {
//         fetchData()
//     }, [])
//
//     const renderedComments = comments.map(comment => {
//         return <li key={comment.id}>{comment.content}</li>
//     })
//
//     return <ul>
//         {renderedComments}
//     </ul>
// }

export default ({comments}) => {
    const renderedComments = comments.map(comment => {
        let content;
        if (comment.status === "approved") {
            content = comment.content;
        }
        if (comment.status === "pending") {
            content = 'This comment is awaiting moderation'
        }
        if (comment.status === 'rejected') {
            content = 'This comment has been rejected'
        }

        return <li key={comment.id}>{content}</li>;
    })

    return <ul>{renderedComments}</ul>;
}