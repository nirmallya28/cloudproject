# Cloud-Based Document Scanning System

## Project Overview
The **Cloud-Based Document Scanning System** is a web-based application that allows users to scan, upload, and store documents securely in the cloud for easy access. The system is hosted on an AWS S3 bucket and is accessible via a custom domain.

## Live Demo
🔗 **Live URL:** [Click here to access the project](http://nirmallyadeb.s3-website.ap-south-1.amazonaws.com/)
![612a0e14-3a58-41fb-825b-c7a1955065b8](https://github.com/user-attachments/assets/04ebbd54-89a7-41e7-94bd-11d1a822ca09)

## Features
- Scan and upload documents.
- Secure cloud storage using AWS S3.
- Responsive UI built with HTML, CSS, and JavaScript.
- Easy access from any device with an internet connection.

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript
- **Cloud Storage:** AWS S3 Bucket
- **Hosting:** AWS S3 Static Website Hosting
- **Domain:** AWS S3 Website URL

## Setup and Deployment Steps
### 1. Clone the Repository
```bash
   git clone https://github.com/your-username/cloud-document-scanner.git
   cd cloud-document-scanner
```

### 2. Configure AWS S3 Bucket
1. Log in to your **AWS Console**.
2. Navigate to **S3 Service**.
3. Click **Create Bucket** and configure the following:
   - **Bucket Name:** (, `nirmallyadeb-doc-scanner")
   - **Region:** Select `ap-south-1` (Mumbai, or your preferred region).
   - **Block Public Access:** Uncheck to allow public access (for hosting).
   - **Permissions:** Set bucket policy to allow static website hosting.

### 3. Enable Static Website Hosting
1. Go to your **S3 Bucket**.
2. Click on the **Properties** tab.
3. Scroll to **Static Website Hosting** and enable it.
4. Set the **Index document** as `index.html`.
5. Note the **Endpoint URL** (e.g., `http://your-bucket-name.s3-website.ap-south-1.amazonaws.com/`).

### 4. Upload Files to S3
1. Inside your **S3 Bucket**, go to the **Objects** section.
2. Click **Upload** and select your project files (`index.html`, `style.css`, `script.js`, etc.).
3. Set permissions to **Public Read**.

### 5. Test and Verify
1. Open your **S3 Website URL** in a browser.
2. Ensure that the page loads correctly and functionalities work as expected.

## Future Enhancements
- Implement authentication for secure document access.
- Add support for OCR (Optical Character Recognition).
- Integrate with AWS Lambda for automated processing.

## Author
👨‍💻 **Nirmallya Deb Ray**

## License
This project is licensed under the MIT License.

