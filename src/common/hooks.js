import React from "react";

export const useGetWordCount = (result) => {
  const wordCount = React.useMemo(() => {
    return Object.fromEntries(new Map(result));
  }, [result]);
  return wordCount;
};
