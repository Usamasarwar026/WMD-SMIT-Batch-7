import React from "react";

export default function Button(props) {
  return (
    <>
      <a href="#" type={props?.type} className={props.className}>
        {props.title}
      </a>

    </>
  );
}