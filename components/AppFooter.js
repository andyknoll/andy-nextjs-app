// AppFooter.js

import Link from 'next/link'        // <Link> is built into Next.js

const AppFooter = props => {

    return (
        <div className="app-footer">
            <style jsx>
            {`
                .app-footer {
                    bottom: 0px;
                    height: 50px;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #eeeeee;
                }  
                .page-link {
                    font-size: 1.0em;
                }
            `}
            </style>

            <div className="page-link">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>

            <div className="page-link">
                <Link href="/code">
                    <a>Code</a>
                </Link>
            </div>

            <div className="page-link">
                <Link href="/media">
                    <a>Media</a>
                </Link>
            </div>

            <div className="page-link">
                <Link href="/music">
                    <a>Music</a>
                </Link>
            </div>

        </div>
    )
}

export default AppFooter;
