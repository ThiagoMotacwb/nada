import ReactPlayer from 'react-player';

const VideoComponent = () => {
  const links = [
    'https://www.youtube.com/watch?v=cJx0k_ln1-g',
    'https://www.youtube.com/watch?v=cJx0k_ln1-g',
    'https://www.youtube.com/watch?v=cJx0k_ln1-g'
  ];

  return (
    <div>
      {links.map((link, index) => (
        <ReactPlayer
          key={index}
          url={link}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default VideoComponent;
