import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import React, { useState } from "react";
// import React, { useRef, MouseEvent, FormEvent, BlockquoteHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

interface ImagePosterParams {
  url_host: string,
  params: any,
  timeout_ms: number,
  to_succeeded: string,
  to_failed: string,
}
function ImagePoster(props: ImagePosterParams) {
  
  const navigate = useNavigate()
  const [hasFile, set_hasFile] = useState<boolean>(false);
  const [imagefile, set_imagefile] = useState<string | Blob>(''); // File extends Blob
  const [PostProgress, setPostProgress] = React.useState<number>(0)
  // const inputRef = useRef<HTMLInputElement>(null);

  // const import_file = (e: MouseEvent<HTMLButtonElement>) => {
  //   inputRef.current?.click();
  // };

  const upload_file = async () => {

    try {
      
      setPostProgress(0)
      const fd = new FormData();
      fd.append('file', imagefile)
      fd.append('email_to', 'fukouhei001@gmail.com')

      const url_post = props.url_host
      const config_post = { 
        headers:{ 
          'Content-Type': 'multipart/form-data', 
        },
        timeout: props.timeout_ms,
          onUploadProgress: (progressEvent: any) => {
            setPostProgress(Math.round( 100 * progressEvent.loaded / progressEvent.total))
          },
          params: props.params
        }
      const res = await axios.post(url_post, fd, config_post)
      console.log(res.status)
      if (res.status === 200) {
        await new Promise(resolve => setTimeout(resolve, 2500))
        // console.log('navigate to ', props.to_succeeded)
        navigate(props.to_succeeded);
      } else {
        await new Promise(resolve => setTimeout(resolve, 2500))
        // console.log('navigate to ', props.to_failed)
        navigate(props.to_failed);
      }
    } catch (e) {
      console.log(e)
    } finally {
      // set_open_cpLoading(false)
    }
  };

  // const onChange = (e: FormEvent<HTMLInputElement> | undefined) => {
  const onChange = (e: any | undefined) => {
    
    if (e !== undefined){
      const temp_file: Blob = e.target.files[0];
      set_hasFile(true)
      set_imagefile(temp_file)
    } else {
        throw new Error('event not found')
    }
  }
  return (
    <Container>
      <Stack gap={5} className="col-md-5 mx-auto">
        <Row>
          <Col>
            <label className="mx-3">Choose file: </label>
            <input 
              // ref={ inputRef } 
              // className="d-none" 
              type="file" 
              onChange ={ onChange }
              accept="image/jpg, image/jpeg, image/JPG, image/png, image/PNG"
            />
          </Col>
          <Col>
            <button 
              onClick={ upload_file } 
              className="btn btn-outline-primary"
            >
              Upload
            </button>
          </Col>
        </Row>
        <Row>
          <progress 
            id="post_progress" 
            max="100" 
            value={PostProgress}
          > 
            { PostProgress } % 
          </progress>
        </Row>
        <Row>
          {hasFile && <img src={URL.createObjectURL(imagefile)} className="imagescls" alt='input' />}
        </Row>
      </Stack>
    </Container>
  )
}
  
export default ImagePoster;
  