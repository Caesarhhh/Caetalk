import "./OwnDialog.css"
import "video-react/dist/video-react.css";
import React,{Component} from 'react';
import UseCamera from '../tool/UseCamera'
import axios from "axios";
export default class OwnDialog extends Component{
    componentDidMount() {
        let params={
            'data':'666'
        }
        axios.post("http://localhost:80",params).then(res=>{
            console.log(res)
        })
    }

    render(){
        return(
            <div className='OwnDialog'>
                {/*<Player*/}

                {/*    playsInline*/}

                {/*    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"*/}

                {/*/>*/}
                <UseCamera></UseCamera>
            </div>
        )
    }
}