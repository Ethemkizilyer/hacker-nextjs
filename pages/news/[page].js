
import getStories from "@/lib/get-stories";
import Page from "../../components/page";

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          page: "1",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { page = 1 } }) {
   let props = {};
  try {
    page = Number(page);
    const stories = await getStories("topstories", { page });

    return {
      props: { stories, page },
    }
  } catch (error) {
    console.log(error.message);
  }
  return {props}
}

const NewsList = ({ page, stories }) => {

  const offset=(page - 1) * 30
  return (
    <div>
      <Page>
        
      </Page>
    </div>
  );
};

export default NewsList;
