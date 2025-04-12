// import React from "react";
// import Links from "./Links";

// function About() {
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       <p>Put the bio in here</p>
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//       {bio ? <p>{bio}</p> : null}
//       <Links github={links.github} linkedin={links.linkedin} />
//     </div>
//   );
// }

// export default About;

import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* only show the <p> if there's a bio */}
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;

