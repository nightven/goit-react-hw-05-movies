import { Hourglass } from 'react-loader-spinner';
const Load = () => {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{position: 'absolute', bottom:"47%", left:"47%"}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    />
  );
};
export default Load;