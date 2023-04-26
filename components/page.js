

const Page = ({ children }) => {
  return (
    <div className="main">
      <div className="page">{children}</div>
      <style jsx global>
        {`
          body {
            font-family: -apple-system;
            background: #eee;
          }
        `}
      </style>
    </div>
  );
};

export default Page;
