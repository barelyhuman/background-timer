export const msTimestamp = (milliseconds) => {
  const asSeconds = milliseconds / 1000;
  const min: number = Math.floor(asSeconds / 60);
  const sec: number = Math.floor(asSeconds - min * 60);
  const minString = (min < 10 ? `0${min}` : min) as string;
  const secString = (sec < 10 ? `0${sec}` : sec) as string;
  return `${minString}:${secString}`;
};
