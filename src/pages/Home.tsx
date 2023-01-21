import 'bootstrap/dist/css/bootstrap.min.css';

import ImagePoster from '../components/ImagePoster';
function Home() {
  
  const param = {
    url_host: 'http://100.64.1.37:3000/image',
    params: 0,
    timeout_ms: 10000,
    to_succeeded: '/succeeded',
    to_failed: '/failed'
  }

  return (
    <div>
      <ImagePoster
        url_host = {param.url_host}
        params = {param.params}
        timeout_ms = {param.timeout_ms}
        to_succeeded = {param.to_succeeded}
        to_failed = {param.to_failed}
      />
    </div>
  )
}
  
export default Home;
  