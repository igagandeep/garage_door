
const Share = () => {

    let url = encodeURIComponent("https://dev.learnlab.ai/achievements/2401020001");

    return (
        <div>
            <h2>Share Social</h2>
      
            <a target='_blank' className='c-black' rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
                Share on Linkedin 
            </a>
  
        </div>
    );
};

export default Share;

