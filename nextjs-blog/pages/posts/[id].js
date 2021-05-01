import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/post'
import Head from 'next/head'
import Date from '../../components/Date'
import utilStyles from '../../styles/utils.module.css'

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

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false   // Giá trị này bắt buộc phải có 
    }
}

