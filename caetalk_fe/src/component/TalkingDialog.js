import React,{Component} from 'react'
import OwnDialog from "./OwnDialog";
import "./TalkingDialog.css"
import {Player} from "video-react";
export default class TalkingDialog extends Component{
    render(){
        return(
            <div className='TalkingDialog'>
                {/*<Player*/}

                {/*    playsInline*/}

                {/*    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"*/}

                {/*/>*/}
                <OwnDialog></OwnDialog>
            </div>
        )
    }
}