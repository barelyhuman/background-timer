export const msTimestamp = (milliseconds) => {
  const asSeconds = milliseconds / 1000;
  let min: number = Math.floor(asSeconds / 60);
  let sec: number = Math.floor(asSeconds - min * 60);
  min = (min < 10 ? '0' + min : min) as number;
  sec = (sec < 10 ? '0' + sec : sec) as number;
  return `${min}:${sec}`;
};
