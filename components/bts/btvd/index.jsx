import ReactPlayer from 'react-player';

const VideoComponent = () => {
  const links = [
    'https://www.youtube.com/watch?v=jA5XX7Fd8Ys',
    'https://www.youtube.com/watch?v=cJx0k_ln1-g',
    'https://www.youtube.com/watch?v=jA5XX7Fd8Ys',
    'https://www.youtube.com/watch?v=cJx0k_ln1-g',
    'https://www.youtube.com/watch?v=jA5XX7Fd8Ys',
    'https://www.youtube.com/watch?v=cJx0k_ln1-g',
    'https://www.youtube.com/watch?v=jA5XX7Fd8Ys',
    'https://www.youtube.com/watch?v=cJx0k_ln1-g',
    'https://www.youtube.com/watch?v=jA5XX7Fd8Ys',
    'https://www.youtube.com/watch?v=cJx0k_ln1-g',
    'https://www.youtube.com/watch?v=elIl48sZ3rA',
    'https://youtu.be/7ApK93G2kSI?si=1N1ylFvGjLV4fPxr'
  ];

 
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

 
  const chunkedLinks = chunkArray(links, 4);

  return (
    <div  width={[600]}>
      {chunkedLinks.map((chunk, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', marginBottom: '20px' }}>
          {chunk.map((link, index) => (
            <div key={index} style={{ flex: 1, marginRight: '10px' }}>
              <ReactPlayer
                url={link}
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                marginBottom={'33px'}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VideoComponent;
