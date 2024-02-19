
import React from 'react';
import './Article.css'

function article()
{
    function refresh()
    {
        window.location.reload(false);
    }
    return(
        <div className = "article">
             <div class = "header">
            <h4>What do you want to ask or share</h4>
            </div>
            
            <div class = "question">
                <label>Title</label>
                <textarea id = "text" placeholder="enter a descriptive title" name = "mail" rows = "1" cols = "56"/>
            </div>
            
            <div class = "description">
                <label>Abstract</label>
            </div>
            <div class = "boxdescribe">
                <textarea id = "box" placeholder="Enter a 1-paragraph abstract" name = "box" rows = "15" cols = "50"></textarea>
            </div>

            <div class = "articletext">
                <label>Article Text</label>
            </div>
            <div class = "box">
                <textarea id = "box" placeholder="Enter a 1-paragraph abstract" name = "box" rows = "15" cols = "50"></textarea> 
            </div>

            <div class = "tagged">
                <label>Tags</label>
                <textarea id = "text" placeholder="Please add up to 3 tags to describe what your question is about" name = "mail" rows = "1" cols = "56"/>
            </div>

            <div class = "post">
                <button class="button" onClick={refresh}>Post</button>
            </div>
        </div>
    )
}

export default article;