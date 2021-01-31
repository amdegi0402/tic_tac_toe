import Link from 'next/link'
import style from '../static/Style';


export default () =><div>
    {style}
    <h1>Next.js</h1>
    <div>Welocome to next.js!</div>
    <hr />
    <div>
        <Link href="/">
            <a>&lt;&lt;Back to Page</a>
        </Link>
    </div>
</div>