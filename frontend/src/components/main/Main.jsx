import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import Back from '../Back'
import { Link } from 'react-router-dom'
import BubbleMovement from '../Bubble'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <BubbleMovement/>
             <div className=''>
     <Link to={'/'}>
     <Back  />
     </Link>
     </div>
            <div className='nav'>
                <p className='text-slate-500'>CARE CONSOLE</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello,</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        
                    </>
                    :
                    <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading?
                                    <div className="loader">
                                            <hr />
                                            <hr />
                                            <hr />
                                    </div>
                                    :
                                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                                }
                            </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Care Console may display inaccurate info, including about people, so double check its response Your privacy and Care Console App
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
