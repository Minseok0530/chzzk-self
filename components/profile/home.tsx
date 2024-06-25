'use client';
import ReactPlayer from 'react-player';

export default function Page() {
  return (
    <>
      {' '}
      <div className='flex justify-center'>
        <div className='flex flex-col w-[80%]'>
          <div className='flex mt-5 flex-col'>
            {' '}
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=YmgV7KfA_f8'}
              width='96%'
              height='22rem'
              playing={false}
              muted={true}
              loop={true}
              controls={false}
              onRewind={false}
              volume={0}
              config={{
                youtube: {
                  playerVars: { disablekb: 1, control: 0, modestbranding: 1 },
                },
              }}
              style={{
                aspectRatio: '16:9',
                pointerEvents: 'none',
                border: 1,
                borderRadius: 15,
                overflow: 'hidden',
                objectFit: 'cover',
                zIndex: -1,
              }}
            />
            <div className='w-[98%]'>
              동영상
              <div className='w-full grid grid-cols-5'>
                {[0, 1, 2, 3, 4].map((o, i) => {
                  return (
                    <div key={i}>
                      <ReactPlayer
                        url={'https://www.youtube.com/watch?v=YmgV7KfA_f8'}
                        width='90%'
                        height='10rem'
                        playing={false}
                        muted={true}
                        loop={true}
                        controls={false}
                        onRewind={false}
                        volume={0}
                        config={{
                          youtube: {
                            playerVars: {
                              disablekb: 1,
                              control: 0,
                              modestbranding: 1,
                            },
                          },
                        }}
                        style={{
                          aspectRatio: '16:9',
                          pointerEvents: 'none',
                          border: 1,
                          borderRadius: 15,
                          overflow: 'hidden',
                          objectFit: 'cover',
                          zIndex: -1,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='mt-5'>
              진행 중인 미션<p>준비중</p>
            </div>
            <div className='mt-5'>
              커뮤니티{' '}
              <div>
                <>글 준비중</>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
