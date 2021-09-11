///  creare iframe
let iframe = document.createElement('iframe');
iframe.style.height = "510px";
iframe.style.width = "400px";
///  src iframe
let curr_url;
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    curr_url = tabs[0].url; // async
    if (curr_url.search('://www.pbinfo.ro/probleme/') !== -1)
    {
        let prob_id;
        curr_url.split('/').forEach((t) => {
            let id_ = true;
            for (let i = 0; i < t.length; ++i)
                if ( !('0'.charCodeAt(0) <= t.charCodeAt(i) && t.charCodeAt(i) <= '9'.charCodeAt(0)) )
                {
                    id_ = false;
                    break;
                }

            if (id_)
            {
                prob_id = t;
                return;
            }
        });
        console.log(prob_id);
        if (prob_id.length !== 0)
            iframe.src = 'https://solinfo.ro/solutie-noua-ext/' + prob_id + '/IA==';
        else
            iframe.src = "https://solinfo.ro/solutie-noua-ext";
    }
    else
        iframe.src = 'https://solinfo.ro/solutie-noua-ext';
});

/// appendChild iframe
document.querySelector('#root').appendChild(iframe);