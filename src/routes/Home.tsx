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

  return (
    <div>
      <iframe className={classes.iframe} src={iframeUrl} key={iframeKey} />
    </div>
  )
}
