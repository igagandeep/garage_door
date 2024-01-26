
const Share = () => {

    let url = encodeURIComponent("https://superlative-bunny-c61262.netlify.app/share");

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

