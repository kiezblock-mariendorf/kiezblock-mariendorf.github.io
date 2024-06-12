import dotenv from "dotenv";
import FtpDeploy from "ftp-deploy";
import path from "path";

dotenv.config({ path: "./.env" });

async function main() {
  try {
        const buildPath = path.join(process.cwd(), "build");
        const ftpDeploy = new FtpDeploy()
                .on("uploaded", (data) => {
                  console.log(`Uploaded ${data.filename}`);
                })
                .on("upload-error", (data) => {
                  console.error(`Error uploading ${data.filename}: ${data.error}`);
                })
                .on("log", (data) => {
                  console.log(data);
                });

        await ftpDeploy.deploy({
            user: process.env.FTP_USER, // Your credentials
            password: process.env.FTP_PASS, // Your credentials
            host: process.env.FTP_HOST, // Your credentials
            port: process.env.FTP_PORT, // Your credentials

            localRoot: buildPath, // Location of build files in project
            remoteRoot: "/", // Upload location on remote, replace with subfolder on FTP-server if required

            include: ["*", "**/*"], // Upload all files from build folder
            exclude: [], // Exclude no files

            deleteRemote: false, // Set to true if you want to delete ALL FILES in the remote root before uploading
            forcePasv: true, // Use passive mode
            secure: true,
            secureOptions: {
              "rejectUnauthorized": false
            },
        })
        
        
        console.log("Succesfully deployed site")
        return 0;
    } catch (e) {
        console.error("An error occured during deployment:", e);
        return 1;
  }
}

main().then((code) => process.exit(code));