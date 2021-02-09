import React from "react";

type CoinProps = {
  value: number;
};

const CoinWithNumber = ({ value }: CoinProps) => {
  return <div id="wishListState">{value}</div>;
};

export default CoinWithNumber;
