import React from 'react';
import './question.css'

function Question(){

    function refresh()
    {
        window.location.reload(false);
    }

    return (
        <div>
            <div class = "header">
            <h4>What do you want to ask or share</h4>
            </div>
            
            <div class = "title">
                <label>Title</label>
                <div>
                    <textarea id = "text" placeholder="enter a descriptive title" name = "mail" rows = "1" cols = "85"/>
                </div>
            </div>
                    
            <div class = "description">
                <label>Describe your problem</label>
            </div>
            <div class = "boxdescribe">
                <textarea id = "box" name = "box" rows = "20" cols = "70"/>
            </div>

            <div class = "tags">
                <label>Tags</label>
                <div>
                    <textarea id = "text" placeholder = "please add up to 3 tags to describe what your question is about" name = "mail" rows = "1" cols = "90"/>
                </div>
            </div>

            <div class = "postButton">
                <button class="push" onClick={refresh}>Post</button>
            </div>
        </div>
    )
}

export default Question;