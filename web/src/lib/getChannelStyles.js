import styler from "./styler";

export default channel =>
  styler([
    {
      key: channel.id,
      color: channel.color,
      width: 2
    }
  ]);
