import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Riiid Front-end 사전과제</title>
      </Head>
      <main className={inter.className}>
        <h1>Riiid Front-end 사전과제</h1>
        <a href="https://riiid.notion.site/Front-end-1535bc5f63078068af80dae46bd98b1a?pvs=4">
          <h2>과제 링크</h2>
        </a>
        <h2>제공하는 API</h2>
        <ul>
          <li>
            <span>과제 목록</span>
            <Link href="/api/test/list" target="_blank">
              GET /api/test/list
            </Link>
          </li>
          <li>
            <span>과제 상세</span>
            <Link href="/api/test/865" target="_blank">
              GET /api/test/[id]
            </Link>
          </li>
        </ul>
      </main>
      <style>
        {`body {
            margin: 0;
          }`}
      </style>
      <style jsx>
        {`
          main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 480px;
            height: 100vh;
            padding: 20px;
            margin: 0 auto;
            text-align: center;
            background: #e8fff5;
            box-sizing: border-box;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          ul li {
            font-size: 1.2rem;
            line-height: 1.8;
            text-align: left;
          }
          li span {
            margin-right: 10px;
          }
          a {
            color: #00d37a;
          }
          a:visited {
            color: #003e24;
          }
        `}
      </style>
    </>
  );
}
