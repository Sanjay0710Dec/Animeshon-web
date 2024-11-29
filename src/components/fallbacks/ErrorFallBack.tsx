import React from "react";

const ErrorFallBack: React.FC = () => {
  return (
    <main className="h-screen bg-black text-white text-2xl lg:text-3xl flex item-center justify-center px-2 md:px-0 text-wrap">
      <h2>Something Went Wrong</h2>
      <p>Please refresh the page</p>
      <p>
        Even, if refreshing the page doesn't work, please try after sometime
      </p>
    </main>
  );
};
export default ErrorFallBack;
