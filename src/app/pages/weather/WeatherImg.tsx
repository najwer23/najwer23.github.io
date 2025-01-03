import { Picture } from 'najwer23snacks/lib/Picture';
import { isEmpty } from './Weather.utils';

export const WeatherImg: React.FC<{
  imgArr: { icon: string }[];
}> = ({ imgArr }) => {
  if (isEmpty(imgArr)) {
    return <div style={{ width: '100px', height: '100px', marginBottom: '20px' }}> </div>;
  } else {
    return (
      <div style={{ background: 'transparent', marginBottom: '20px', width: '100px', height: '100px' }}>
        <Picture
          src={`https://openweathermap.org/img/wn/${imgArr[0].icon}@2x.png`}
          alt={`${imgArr[0].icon}`}
          ar={1}
          kind="border"
          borderColor="#2f3031"
          draggable={false}
        />
      </div>
    );
  }
};
