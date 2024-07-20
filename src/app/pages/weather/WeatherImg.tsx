import { isEmpty } from '@najwer23/functions/isEmpty';

export const WeatherImg = ({ imgArr }: { imgArr: { icon: string }[] }) => {
  if (isEmpty(imgArr)) {
    return <div style={{ width: '100px', height: '100px', marginBottom: '20px' }}> </div>;
  } else {
    return (
      <img
        draggable="false"
        width="100px"
        height="100px"
        alt="weather img"
        style={{ background: 'burlywood', marginBottom: '20px' }}
        src={`https://openweathermap.org/img/wn/${imgArr[0].icon}@2x.png`}
      />
    );
  }
};
