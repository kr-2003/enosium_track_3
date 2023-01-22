import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Image from "next/image";

function Result() {
  const router = useRouter();
  const [result, setResult] = useState("");
  const [gif, setGif] = useState();
  let def;
  useEffect(() => {
    console.log(router.query.result);
    def = router.query.result;
    console.log(def);
  });
  useEffect(() => {
    if (router.query.result == "1") {
      setResult("You are a LOAN DEFAULTER!!");
      setGif("/images/down.gif");
    } else if (router.query.result == "2") {
      setResult("You are not a LOAN DEFAULTER!!");
      setGif("/images/up2.gif");
    } else {
    }
  });

  return (
    <>
      <Header></Header>
      {gif && <Image alt="Normal" width={100} height={100} src={gif}></Image>}
      <div>{result}</div>
    </>
  );
}

export default Result;
