import React, { useState } from "react";
import Question from './question';
import Article from './Article';
import './App.css';

function Page() 
{
const[QuestionSelect, SelectQuestion] = useState(false)
const[ArticleSelect, SelectArticle] = useState(false)
const QuestionHandler = () =>
{
  SelectQuestion(true);
  SelectArticle(false);
}
const ArticleHandler = () =>
{
  SelectArticle(true);
  SelectQuestion(false);
}

return (
  <div>
    <div class = "header">
      <h2> New Post </h2>
    </div>
    <div class = "sub">
      <p>Select Post Type:</p>
      <form>
      <div>
     <label>
     <input type = "radio" 
        name = "type" 
        onClick={QuestionHandler}/>Question
     </label>
       
     <label>
     <input type = "radio" 
        name = "type" 
        onClick={ArticleHandler}/>Article
     </label>
      </div>
    </form>
    {QuestionSelect && <Question/>}
    {ArticleSelect && <Article/>}
    </div>
  </div>
  );
}
  
export default Page;
  