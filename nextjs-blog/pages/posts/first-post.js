import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'
import '../_app';


export default function FirstPost(){
    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h2>
            <Image
                src="/image/DaiDien.jpg"
                alt="Trung"
                width={144}
                height={144}
            />

            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </h2>
        </Layout>
    )
}
