import {
    FacebookShareButton,
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon,
} from "react-share";
import { Helmet } from 'react-helmet-async';

const Share = () => {

    const item = {
        name: "Demo",
        img: "https://superlative-bunny-c61262.netlify.app/preprLogo2.png"
    }

    return (
        <div>
            <Helmet>
                <title>Learning React Helmet!</title>
                <meta name="description" content="We helps people to educate, learn" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://superlative-bunny-c61262.netlify.app/" />
                <meta property="og:title" content={item.name} />
                <meta property="og:description" content="lorem ipsum" />
                <meta property="og:image" content={item.img} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

          
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url"
                    content="https://superlative-bunny-c61262.netlify.app/" />
                <meta property="twitter:title" content={item.name} />
                <meta property="twitter:description" content="lorem" />
                <meta property="twitter:image" content={item.img} />


            </Helmet>
            <FacebookShareButton url="https://superlative-bunny-c61262.netlify.app/">
                <FacebookIcon sx={{ fontSize: 65 }} />
            </FacebookShareButton>
            <TwitterShareButton url="https://superlative-bunny-c61262.netlify.app/">
                <TwitterIcon sx={{ fontSize: 65 }} />
            </TwitterShareButton>


        </div>
    )
}

export default Share