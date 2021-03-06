import {Link} from 'react-router-dom';
const BlogLists = ({blogs}) => {
    
    return ( 
        <div className="BlogLists">
            {blogs.map((blog)=>(
                <div className="blogs" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogLists;