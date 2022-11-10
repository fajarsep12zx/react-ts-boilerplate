# Deployment

## AWS S3

_Step 1:_ Run `yarn install` to install dependencies, then `yarn build` to create the `./dist` folder.

_Step 2:_ Navigate to [AWS S3](https://aws.amazon.com/s3) and login (or sign up if you don't have an account). Click on `Services` followed by `S3` in the dropdown.

_Step 3:_ Click on `Create Bucket` and fill out both your `Bucket Name` and `Region` (for the USA we recommend `US Standard`). Click `Create` to create your bucket.

_Step 4:_ Open the `Permissions` accordion on the right (under the `Properties` tab) after selecting your new bucket. Click `Add more permissions`, set the `Grantee` to `Everyone` (or whoever you want to be able to access the website), and give them `View Permissions`. Click `Save`.

_Step 5:_ Click on the `Static Website Hosting` accordion where you should see the URL (or _endpoint_) of your website (ie. example.s3-website-us-east-1.amazonaws.com). Click `Enable website hosting` and fill in both the `Index document` and `Error document` input fields with `index.html`. Click `Save`.

_Step 6:_ Click on your new S3 bucket on the left to open the bucket. Click `Upload` and select all the files within your `./dist` folder. Click `Start Upload`. Once the files are done, select all of the files, right-click on the selected files (or click on the `Actions` button) and select `Make Public`.

_Step 7:_ Click on the `Properties` tab, open `Static Website Hosting`, and click on the _Endpoint_ link. The app should be running on that URL.

## Docker

_Step 1:_ Run `yarn docker:build-prod`. It will automatically build docker image with tag `react-starter:latest`.

_Step 2:_ Run `docker run -p 3001:3001 react-starter:latest` to run the application and expose it to port `3001`.
