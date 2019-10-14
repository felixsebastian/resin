import React from "react";
import Centered from "./layouts/Centered";
import connect from "../lib/connect";

export default connect(state => ({ username: state.user.username }))(
  ({ username }) => (
    <Centered>
      <p>
        <b>Welcome to ResIN{username && ", " + username}</b>
      </p>
      <p>
        Created by students of Swinburne University:{" "}
        <a href="http://github.com/felix-sebastian/">Trung Ahn Do</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Luke McWha</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Cory Misfud</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Rab'a Albreiki</a> &amp;{" "}
        <a href="http://github.com/felix-sebastian/">Felix Sebastian</a>
      </p>
    </Centered>
  )
);
