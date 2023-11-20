import * as prismic from '@prismicio/client';

const prismicConfig = {
    accessToken:process.env.REACT_APP_GPGP_REPO_ACCESSTOKEN
};

const prismicClient = prismic.createClient(process.env.REACT_APP_GPGP_REPO_BASEURL,prismicConfig);

export default prismicClient;