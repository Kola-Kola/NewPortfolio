import * as React from 'react'
import {BLOCKS} from "@contentful/rich-text-types";
import MiddleUnderlineText from "../../styles/middleUnderlineText";
import style from "../../pages/articles/slug.module.css";

const richTextConfig = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className={style.paragraph}>{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className={style.ul}>{children}</ul>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className={style.title2}>
        {children}
        <MiddleUnderlineText />
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className={style.title2}>
        {children}
        <MiddleUnderlineText />
      </h3>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <div style={{ position: 'relative', minHeight: '300px' }}>
        <img alt="asset" className={style.image} src={`https:${node.data.target.fields.file.url}`}/>
      </div>
    ),
    [BLOCKS.DOCUMENT]: (node: any, children: any) => ((
        <div className={style.container}>{children}</div>
      )
    )
  },
};

export default richTextConfig
