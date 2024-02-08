import React from "react";

export default function CodeDiffChecker(props) {
  return (
    <div className="container ">
      <p
        className="d-flex align-items-center justify-content-center"
        style={{
          fontFamily: "Rampart One, cursive",
          fontSize: "3vw",
          color: props.theme === "primary" ? "#0d6efd" : "white",
        }}
      >
   
   ⚠️Under Development⚠️
      </p>
    </div>
  );
}

// import React, { useState } from "react";

// const CodeDiffChecker = () => {
//   const [oldCode, setOldCode] = useState("");
//   const [newCode, setNewCode] = useState("");

//   const diff = (text1, text2) => {
//     const output = [];
//     const lines1 = text1.split("\n");
//     const lines2 = text2.split("\n");
//     const maxLength = Math.max(lines1.length, lines2.length);

//     for (let i = 0; i < maxLength; i++) {
//       const line1 = lines1[i] || "";
//       const line2 = lines2[i] || "";
//       if (line1 !== line2) {
//         output.push(
//           <div key={i}>
//             <span className={line1 ? "text-danger" : "text-success"}>
//               {line1 || line2}
//             </span>
//             <br />
//           </div>
//         );
//       } else {
//         output.push(<div key={i}>{line1}</div>);
//       }
//     }

//     return output;
//   };

//   return (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-md-6">
//           <h5 className="mb-3">Old Code:</h5>
//           <textarea
//             className="form-control"
//             value={oldCode}
//             onChange={(e) => setOldCode(e.target.value)}
//             rows="10"
//           />
//         </div>
//         <div className="col-md-6">
//           <h5 className="mb-3">Modified Code:</h5>
//           <div style={{ whiteSpace: "pre-wrap" }}>{diff(oldCode, newCode)}</div>
//           <textarea
//             className="form-control"
//             value={newCode}
//             onChange={(e) => setNewCode(e.target.value)}
//             rows="10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeDiffChecker;
