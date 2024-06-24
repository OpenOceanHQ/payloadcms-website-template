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
    <li><a href="#adding-a-media-storage-method">Adding a Media Storage method</a></li>
    <li><a href="#signing-up-for-aws">Signing up for AWS</a></li>
    <li><a href="#creating-an-iam-user">Creating an IAM user</a></li>
    <li><a href="#creating-an-access-key">Creating an access key</a></li>
    <li><a href="#setting-up-your-s3-bucket">Setting up your S3 bucket</a></li>
    
  </ol>
</details>

## Prerequisites

Before you begin, ensure you have the following:

- A Vercel account. If you don't have one, you can sign up for free [here](https://vercel.com/signup)
- A MongoDB cluster (refer <a href="#creating-a-mongodb-cluster">Creating a MongoDB Cluster</a>)
- An AWS account with S3 bucket storage (refer <a href="#signing-up-for-aws">Signing up for AWS</a>)

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

## Adding a media storage method

To allow your payload application to store and serve media to the users, you will have to setup a cloud storage method. <br />
AWS S3 is one such method. In this section, we will cover how you can setup an AWS S3 storage bucket for your application.

## Signing up for AWS

Visit https://signin.aws.amazon.com/signup?request_type=register

Complete their sign up procedure after which you will be redirected to the management console.

![AWS Signup][aws-signup]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Creating an IAM user

After signing up on AWS, you will be taken to the management console.

![AWS Console search bar][console-search-bar]

Once here, click on the search bar and search for `IAM`

![Search for IAM][search-iam]

In the next page, click on the users button in the sidebar

![Sidebar users option][sidebar-users]

In the next page, click on `Create User`

![create IAM user][create-iam-user]

In the next screen, add the name of the user and click on `Next`

![Enter user details][user-details]

In the next screen, you will set the permissions for the user. <br />
Under “Permissions options”, select `Attach policies directly`. <br />
Then search for “s3” in the Permission policies and check `AmazonS3FullAccess` policy. <br />
This will give the user full access to S3 service. It can be changed later according to your requirements and use cases. <br />

![Set user permissions][set-permissions]

Scroll down and click on `Next` after you are done with the above step.

In the next page, you can review the settings for the user and once you are done, click on `Create user`.

![User permissions summary][permissions-summary]

And that’s it! You have created a new **admin user** with S3 access.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Creating an Access key

Now that you have created an admin user, you have to generate access keys to allow your payload website to access the S3 bucket storage. <br />
To do that, go to the user management console again and click on the user you just created.

![Users console][users-console]

In the next page, click on `Create access key`

![Create user access key][create-access-key]

Select the following option in the next screen.

![Access key usecase][access-key-usecase]

Scroll down and check the confirmation box and then click on `Next`

![Access key confirmation][access-key-confirmation]

You can create an optional tag in the next screen which will make access key management later. Click on `Create access key` after you are done.

![Description tag][description-tag]

In the next screen, your access keys will be displayed. Save it to your machine since you **won’t** be able to see those access keys from the console again.

![Copy access key][copy-access-key]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setting up your S3 bucket

Go to your aws console and in the search bar type `s3`

![Search for S3][search-s3]

Once you are at the S3 page click on `Create bucket`

![Create bucket][create-bucket]

In the next screen, give your S3 bucket instance a name according to AWS rules.

![Bucket name][bucket-name]

Then, scroll down and `uncheck` the `Block all public access` option shown below. <br />
This will allow public access for all files stored in your S3 instance. <br />
You can update these settings later as per your requirements. <br />
But for the purposes of this tutorial, let’s leave it unchecked.<br />

![Unblock public access][unblock-public-access]

You can leave the rest of the settings as default. Now, scroll down to the bottom of the screen and click on `Create bucket`.

![Confirm create bucket][confirm-create-bucket]

Once your bucket has been created, you will be taken to the next screen where your created bucket will be listed.

![Bucket console][bucket-console]

Now, select your bucket and in the next screen, click on the `Permissions` tab.

![Permissions tab][permissions-tab]

We need to add a policy to your bucket. This policy will allow images to be stored in your bucket. <br />
It will also allow images to be read from your bucket through your payload application. <br />
To do this, click on `Edit` in the Bucket policy section.<br />

![Edit policy][edit-policy]

Then copy the following json policy object and paste it into the policy editor. <br />
Make sure that you replace `your-bucket-name` with the name of the bucket you created.<br />

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

![Paste policy][paste-policy]

Click on `Save Changes` once you are done. Your bucket is now ready to store and serve media!

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

<!-- S3 bucket tutorial -->

[aws-signup]: public/tutorial-images/aws-setup/aws-signup.png
[console-search-bar]: public/tutorial-images/aws-setup/console-search-bar.png
[search-iam]: public/tutorial-images/aws-setup/search-iam.png
[sidebar-users]: public/tutorial-images/aws-setup/sidebar-users.png
[create-iam-user]: public/tutorial-images/aws-setup/create-user.png
[user-details]: public/tutorial-images/aws-setup/user-details.png
[set-permissions]: public/tutorial-images/aws-setup/set-permissions.png
[permissions-summary]: public/tutorial-images/aws-setup/permissions-summary.png
[users-console]: public/tutorial-images/aws-setup/users-console.png
[create-access-key]: public/tutorial-images/aws-setup/create-access-key.png
[access-key-usecase]: public/tutorial-images/aws-setup/access-key-usecase.png
[access-key-confirmation]: public/tutorial-images/aws-setup/access-key-confirmation.png
[description-tag]: public/tutorial-images/aws-setup/description-tag.png
[copy-access-key]: public/tutorial-images/aws-setup/copy-access-key.png
[search-s3]: public/tutorial-images/aws-setup/search-s3.png
[create-bucket]: public/tutorial-images/aws-setup/create-bucket.png
[bucket-name]: public/tutorial-images/aws-setup/bucket-name.png
[unblock-public-access]: public/tutorial-images/aws-setup/unblock-public-access.png
[confirm-create-bucket]: public/tutorial-images/aws-setup/confirm-create-bucket.png
[bucket-console]: public/tutorial-images/aws-setup/bucket-console.png
[permissions-tab]: public/tutorial-images/aws-setup/permissions-tab.png
[edit-policy]: public/tutorial-images/aws-setup/edit-policy.png
[paste-policy]: public/tutorial-images/aws-setup/paste-policy.png
