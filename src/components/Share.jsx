/* eslint-disable react/prop-types */
// import { useEffect } from 'react';
import { useEffect } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon,
} from "react-share";
import { Helmet } from 'react-helmet-async';

const Share = ({ title, description, img, url }) => {
    useEffect(() => {
        const helmet = (
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={url} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Helmet>
        );

        // Update the meta tags
        const head = document.querySelector("head");
        head.innerHTML += helmet.props.children;

        // Remove the added meta tags when the component unmounts
        return () => {
            head.removeChild(head.lastChild);
        };
    }, [title, description, img, url]);

    return (
        <div>
            <h2>ddd</h2>
            <FacebookShareButton url={url}>
                <FacebookIcon sx={{ fontSize: 65 }} />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon sx={{ fontSize: 65 }} />
            </TwitterShareButton>
        </div>
    );
};

export default Share;




{/* 
<Helmet>


<title>Demo</title>
<meta charset="utf-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="csrf_token" content="" />
<meta property="type" content="website" />
<meta property="url" content="https://superlative-bunny-c61262.netlify.app/" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="_token" content="" />
<meta name="robots" content="noodp" />
<meta property="title" content="Demo" />
<meta property="quote" content="Demo1" />
<meta name="description" content="description" />
<meta property="image" content="https://superlative-bunny-c61262.netlify.app/preprLogo2.png" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="I am happy to share my achievement" />
<meta property="og:quote" content="I am happy to share my achievement" />
<meta property="og:hashtag" content="yo" />
<meta property="og:image" content="https://superlative-bunny-c61262.netlify.app/preprLogo2.png" />
<meta content="image/*" property="og:image:type" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://superlative-bunny-c61262.netlify.app/" />
<meta property="og:site_name" content="DSite name" />
<meta property="og:description" content="This is so cool" />
</Helmet>
          */}
{/* 

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
                <meta property="twitter:image" content={item.img} /> */}


// useEffect(() => {
//     document.addEventListener('DOMContentLoaded', () => {
//         // Create or update Open Graph meta tags
//         const ogTitle = document.querySelector('meta[property="og:title"]');
//         if (ogTitle) {
//             ogTitle.setAttribute('content', `Excited to Share: my achievement`);
//         }

//         const ogDescription = document.querySelector('meta[property="og:description"]');
//         if (ogDescription) {
//             ogDescription.setAttribute('content', `Check out my achievement.`);
//         }

//         const ogImage = document.querySelector('meta[property="og:image"]');
//         if (ogImage) {
//             ogImage.setAttribute('content', "https://superlative-bunny-c61262.netlify.app/preprLogo2.png");
//         }

//         const ogUrl = document.querySelector('meta[property="og:url"]');
//         if (ogUrl) {
//             ogUrl.setAttribute('content', "https://superlative-bunny-c61262.netlify.app/");
//         }
//     });
// }, []);
