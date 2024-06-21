<a name="readme-top"></a>

<div align="center">
  <h3 align="center">Payload CMS website template tutorial</h3>
  <p align="center">
    A brief tutorial on how to build a complete web application using our template.
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#steps-to-deploy">Steps to Deploy</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li><a href="#accessing-your-admin-dashboard-after-deployment">Accessing your admin dashboard after deployment</a></li>
    <li><a href="#managing-your-pages-with-blocks">Managing your pages with Blocks</a></li>
    <li><a href="#creating-a-mongodb-cluster">Creating a MongoDB Cluster</a></li>
    
  </ol>
</details>

## Prerequisites

Before you begin, ensure you have the following:

- A Vercel account. If you don't have one, you can sign up for free [here](https://vercel.com/signup)
- A MongoDB cluster (refer <a href="#creating-a-mongodb-cluster">Creating a MongoDB Cluster</a>)

## Steps to Deploy

1. **Click the Deploy button** - which you can find [here](https://github.com/OpenOceanHQ/payloadcms-website-template) to start the deployment process on Vercel.

   ![Deploy button screenshot][readme-deploy-button]

2. **Log in to Vercel** - If you are not logged in, Vercel will prompt you to log in or sign up. Use your GitHub, GitLab, or Bitbucket account to authenticate.

3. **Configure Your Project** - After logging in, you'll be redirected to the project configuration page.

   - **Project Name**: Give your project a unique name. This name will be used as the URL of your deployed website.

     ![Configure project name screenshot][vercel-project-name]

   - **Environment Variables**: These are essential for the application to function properly.
     - MONGO_DATABASE_URI - refer <a href="#creating-a-mongodb-cluster">Creating a MongoDB Cluster</a> for setting this variable.
     - PAYLOAD_SECRET - you can set any random secret string.

4. **Deploy** - Once you've filled in all the required information, click the "Deploy" button. Vercel will start the deployment process, which usually takes a few minutes.

   ![Vercel Deploy button screenshot][vercel-deploy-button]

5. **View Your Deployed Site** - After the deployment is complete, you'll be given a URL where your site is live. Click the URL to view your newly deployed Next.js application.

   ![Deployed website url screenshot][deployed-website-url]

6. **Add the first user** - Since you haven’t created a page yet, you have to go to your admin panel at `<your-website-url>/admin` and create a new user.

   ![Add first user screenshot][add-first-user]

7. **Creating your first page** - After logging into your admin dashboard, you can create your first page (refer <a href="#managing-your-pages-with-blocks">Managing your pages with blocks section</a>)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Conclusion

That's it! You've successfully deployed your website using our Next.js template on Vercel. If you encounter any issues or have questions, feel free to reach out to our support team.

## Accessing your admin dashboard after deployment

After you finish deploying your application on Vercel, you will be given a URL where your site is live. To access your admin dashboard, visit `<your-website-url>/admin`

**First time login to your dashboard**

The first time you login to your admin dashboard, you will be an **admin** user by default.
Only admin users can manage permissions of other users. <br />
You can manage your collections, appearances, settings and everything else from here.

![Admin dashboard][admin-dashboard]

## Managing your pages with blocks

You can easily create and publish web pages for your website from the `Pages` collection:

![Pages collection in navigation][pages-collection-nav]

Once in the pages collection, you can create a new page.

![Create new page in collection][create-new-page]

Now, you can add various layouts to your page by using various blocks that we have pre-built for you by clicking on `Add Layout`.

![Add page layout][add-page-layout]

Add the blocks and build your web page. Click on `Save` once you are done.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

![Save page layout][save-page-layout]

The slug will be the route name of your page, so you can visit the page you created at `<your-website-url>/example-page` <br />
And that’s it, your page is live!

## Creating a MongoDB Cluster

1. Visit https://account.mongodb.com/account/register and create an account.

2. Complete their onboarding procedure. After this step you will be presented with a screen to build your free cluster.

3. Create a free M0 cluster.

   ![Create free mongo cluster][create-free-cluster]

4. You can leave the rest of the fields as default and click on `Create Deployment`

5. In the next screen, copy your username and password. We will need it later.

6. Click on `Create Database User` and then `Choose a connection method`.

   ![Create database user][create-db-user]

7. In the next step, select the `Compass` option.

   ![Select compass option][select-compass]

8. In the next screen, you will see the following connection string for your database cluster.

   ![Copy connection string][connection-string]

9. Copy this string and paste it in the Configure Project section of your Vercel dashboard. <br /> Make sure that you replace `<username>` and `<password>` with the ones you copied earlier.

   ![Paste connection string in vercel env][connection-string-env]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[readme-deploy-button]: public/tutorial-images/readme-deploy-button.png
[vercel-project-name]: public/tutorial-images/vercel-project-name.png
[vercel-deploy-button]: public/tutorial-images/vercel-deploy-button.png
[deployed-website-url]: public/tutorial-images/deployed-website-url.png
[add-first-user]: public/tutorial-images/add-first-user.png
[admin-dashboard]: public/tutorial-images/admin-dashboard.png
[pages-collection-nav]: public/tutorial-images/pages-collection-nav.png
[create-new-page]: public/tutorial-images/create-new-page.png
[add-page-layout]: public/tutorial-images/add-layout.png
[save-page-layout]: public/tutorial-images/save-layout.png
[create-free-cluster]: public/tutorial-images/create-free-cluster.png
[create-db-user]: public/tutorial-images/create-db-user.png
[select-compass]: public/tutorial-images/select-compass.png
[connection-string]: public/tutorial-images/connection-string.png
[connection-string-env]: public/tutorial-images/connection-string-env.png
