import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/post'

export async function getStaticProps({ params }) {
    // Params này là một object chứa đường dẫn id thay đổi. 
    // Nếu bạn truy cập vào endpoint /posts/ssg-ssr thì param = {id: 'ssg-ssr'}
    // Nếu bạn truy cập vào endpoint /posts/pre-rendering thì param = {id: 'pre-rendering'}
    console.log(params);

    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export default function Post({postData}) {
    return <Layout>
        {postData.id}
        <br/>
        {postData.title}
        <br/>
        {postData.date}
        <br/>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false   // Giá trị này bắt buộc phải có 
    }
}
  
