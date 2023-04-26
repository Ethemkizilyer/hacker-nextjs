import styles from "../styles/page.module.scss"

const Page = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.page}>{children}</div>
      <style jsx global>
        {`
          body {
            font-family: -apple-system;
            background: #eee;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
};

export default Page;
