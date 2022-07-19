function News({ data }) {
  return <h1>{data}</h1>;
}

export default News;

export async function getStaticProps(context) {
  console.log("Preview Mode is running");
  return {
    props: {
      data: context.preview
        ? "List of Draft articles"
        : "List of News (Static)",
    },
  };
}
