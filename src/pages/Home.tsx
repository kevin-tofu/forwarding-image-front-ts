import 'bootstrap/dist/css/bootstrap.min.css';

import ImagePoster from '../components/ImagePoster';
function Home() {
  
  const param = {
    url_host: 'http://100.64.1.37:3000/image',
    params: 0,
    timeout_ms: 10000
  }

  return (
    <div>
      <ImagePoster
        url_host = {param.url_host}
        params = {param.params}
        timeout_ms = {param.timeout_ms}
      />
    </div>
  )
}
  
export default Home;
  