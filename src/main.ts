import { toFile } from "qrcode";

const websitesToGenerate: string[] = [
    "https://www.youtube.com/@codeorg",
    "https://www.youtube.com/@CoderbyteDevelopers",
    "https://www.youtube.com/@Codesmith",
    "https://www.youtube.com/@craigndave",
    "https://www.youtube.com/@decomplexify",
    "https://www.youtube.com/@Fireship",
    "https://www.youtube.com/@freecodecamp",
    "https://www.youtube.com/@funfunfunction",
    "https://www.youtube.com/@KevinPowell",
    "https://www.youtube.com/@NetNinja",
    "https://www.youtube.com/@TraversyMedia",
    "https://www.youtube.com/@WesBos",
];

createAllQRCodes(websitesToGenerate);

function createAllQRCodes(websitesToGenerate: string[]): void {
    for (let websiteURL of websitesToGenerate) {
        createQRCode(websiteURL);
    }
}

function createQRCode(websiteURL: string): void {
    let fileName: string = websiteURL.split("@")[1];

    toFile(
        `./outputImages/qrcode_${fileName}.png`,
        websiteURL,
        {
            type: "png",
            errorCorrectionLevel: "H",
            scale: 10,
        },
        (error) => {
            if (error) {
                console.error("Error generating QR code:", error);
            } else {
                console.log("QR code generated successfully!");
            }
        }
    );
}
