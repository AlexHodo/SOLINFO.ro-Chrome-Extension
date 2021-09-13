import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { getCurrentTabUrl, getCurrentTabUId } from "../chrome/utils";

const useStyles = makeStyles({
  iframe: {
    width: '400px',
    height: '550px',
    border: 'none'
  }
})

export default function Home() {

  const [iframeUrl, setIframeUrl] = React.useState<string>('https://solinfo.ro/solutie-noua-ext');
  const [iframeKey, setIframeKey] = React.useState(1);

  const classes = useStyles();

  // let { push } = useHistory();
  
  const updateIframeUrl = (newUrl) => {
    if(newUrl !== iframeUrl) {
      setIframeUrl(newUrl)
      setIframeKey(iframeKey + 1);
    }
  }
 
  useEffect(() => {
    getCurrentTabUrl((url) => {
      if (url.search('://www.pbinfo.ro/probleme/') !== -1) {
        url.split('/').forEach((t) => {
            let _id = true;
            for(let i = 0; i < t.length; ++i)
                if(!('0'.charCodeAt(0) <= t.charCodeAt(i) && t.charCodeAt(i) <= '9'.charCodeAt(0))) {
                    _id = false;
                    break;
                }
            if(_id) {
                let problemId = t;
                if(problemId.length !== 0) {
                  updateIframeUrl(`https://solinfo.ro/solutie-noua-ext/${problemId}/_`)
                }
            }
        });
      }
    });
  }, []);

  return (
    <div>
      <iframe className={classes.iframe} src={iframeUrl} key={iframeKey} />
    </div>
  )
}
