import ReactPlayer from 'react-player';

export default function Page() {
  return (
    <div>
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=x6i3_LfeTjY'}
        width="800px"
        height="500px"
        playing={true}
        muted={true}
        controls={false}
        light={false}
        pip={true}
      />
    </div>
  );
}
