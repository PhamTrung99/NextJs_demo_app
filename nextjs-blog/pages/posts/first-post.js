import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


export default function FirstPost(){
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>
        <h2>
            <Image
                src="/image/profile.jpg"
                alt="Trung"
                width={144}
                height={144}
            />

            <Link href="/">
                <a>Back to Homepage</a>
            </Link>

        </h2>
        </>
    )
}
