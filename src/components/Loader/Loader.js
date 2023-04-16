import { ColorRing } from 'react-loader-spinner';
function Loader() {
  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />;
  //   <RevolvingDot
  //     height="100"
  //     width="100"
  //     radius="6"
  //     color="#4fa94d"
  //     secondaryColor=""
  //     ariaLabel="revolving-dot-loading"
  //     wrapperStyle={{}}
  //     wrapperClass=""
  //     visible={true}
  //   />;
}
export default Loader;
