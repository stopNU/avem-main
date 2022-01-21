//import PRISMIC_URL from '../lib/my-analytics-service'
//process.env.DB_HOST
// -- Prismic Repo Name
export const repoName = process.env.PRISMIC_REPO_NAME

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.isBroken) {
    return '/not-found'
  }
  if (doc.type === 'homepage') {
    return '/'
  }
  if (doc.type === 'aboutpage') {
    return '/about'
  }
  if (doc.type === 'ecosystem_page') {
    return '/ecosystem'
  }
  if (doc.type === 'contact_page') {
    return '/contact'
  }
  if (doc.type === 'privacy_policy_page') {
    return '/privacy-policy'
  }
  if (doc.type === 'terms_conditions_page') {
    return '/terms'
  }
  /*if (doc.type === 'page') {
    return `/page/${doc.uid}`
  }*/
  return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'page') {
    return '/:uid'
  }
  return '/'
}


export const Router = {
  routes: [
    /*{
      type: 'page',
      path: '/:uid',
    },
    {
      type: 'homepage',
      path: '/',
    }*/
  ]
};

/*
export const Router = {
  routes: [
    {
      type: "page",
      path: "/:uid",
    },
    {
      type: "home-page",
      path: "/",
    },
  ],
  href: (type) => {
    const route = Router.routes.find((r) => r.type === type);
    return route && route.href;
  },
};
*/