import React from "react";
import Centered from "./layouts/Centered";
import connect from "../lib/connect";

export default connect(state => ({ username: state.user.username }))(
  ({ username }) => (
    <Centered>
      <p>
        <b>Welcome to AutoCrad{username && ", " + username}</b>
      </p>
      <p>
        Created by students of Swinburne University:{" "}
        <a href="http://github.com/felix-sebastian/">Trung Ahn Do</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Luke McWha</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Cory Misfud</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Rab'a Albreiki</a> &amp;{" "}
        <a href="http://github.com/felix-sebastian/">Felix Sebastian</a>
      </p>
      <p>
        This website is intended for educational purposes only and not for any commercial usage. We acknoledge Swinburne University of Technology, TAC Victoria, iMove CRC and DMV of California for their respective contributions to this project. If there are any concerns please contact us at (pjayaraman@swin.edu.au).
      </p>
    </Centered>
  )
);
