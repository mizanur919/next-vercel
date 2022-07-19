import Head from "next/head";

function ArticleDetails({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <h2>
          {/* DB User is: {process.env.DB_USER} and password is:
          {process.env.PASSWORD} */}
          API Key is: {process.env.NEXT_PUBLIC_API_KEY}
        </h2>
      </div>
    </>
  );
}

export default ArticleDetails;

// export async function getServerSideProps() {
//   return {
//     props: {
//       title: "Article Details",
//       description: "This is the description for the article details page",
//     },
//   };
// }
export async function getStaticProps() {
  return {
    props: {
      title: "Article Details",
      description: "This is the description for the article details page",
    },
  };
}

export async function getStaticPaths() {
  const dbUser = process.env.DB_USER;
  const password = process.env.PASSWORD;
  console.log(`DB User is: ${dbUser} and password is: ${password}`);
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: true,
  };
}
