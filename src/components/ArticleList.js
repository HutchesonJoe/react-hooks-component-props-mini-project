import React from "react";
import Article from "./Article"

function ArticleList({postsArr}){
  let articleArr = postsArr.map((article) => {
  return <Article key = {article.id} title = {article.title} date = {article.date} preview = {article.preview}/>
  }
  )
  return(
    <main>
      {articleArr}
    </main>
  )
}

export default ArticleList;
