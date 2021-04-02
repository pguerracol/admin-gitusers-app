import React from "react";

export default function ViewUserInfo({ userInfoArr }) {

  return (
    <div>
          {
          userInfoArr && 
            <>
              {
                userInfoArr.map((row, i) => {
                  return (
                    <span key={i}>{row} | </span>
                  );
                })
              }
              <br />
            </>
          }
    </div>
  );
}
