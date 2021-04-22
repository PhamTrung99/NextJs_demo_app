import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost(){
    return (
        <>
        <h1>First Post</h1>
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
