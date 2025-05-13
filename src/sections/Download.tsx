import { useTranslation } from 'react-i18next';
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import Title from '../components/Title';
import '../styles/pages/download.sass';

const Download = () => {
    const { t } = useTranslation();    

    const qrCode = "data:image/gif;base64,R0lGODlhZABkAJEAAAAAAP///wAAAAAAACH5BAEAAAIALAAAAABkAGQAAAL/jI+py+0Po5y02ouz3rz7D4biSJbmiabqCgLuC8fyjMDMDNT4zlP8TzvYFjgd8JibIJHGpKIoXAJ90l/zFjRUrcoXZvj0RmXXCzhyprqw63GsbEk/5BJ64AzViuN7dF/tlICXdffX1VbXN+UG1zCIWNjDeBi4qAdp1/i40wixmRdZaRiGqch1GehpKonaSbQqyhoK2ASaOenwSXhLGsuJ6zgqCGsrzOZbDHmsWirLO9z82zpnDGw5S1m7KyyleYqdGJ2c6natSwbMjLytXP59/pZOLc5OjmpOXE9rBnu8+VWtF8Bo/vrxa5crYDCCr9BN44NwoT0/DHv9Ozix4JaL/w/BhdoYLxzIkB45fhwZUeNIbxVPogSEsqXJmCRZqHRlM8W4nDl38mTh82fHZ6A42DGpDie0mhuOGhSpVFtKjMvkJWx584NTrPMyNlxHLyxYks+ifpU6Fi1apF333csndu1Til4Fuot7dyxbkfDgyXXokqzCrG8Bj8PnbPDXvnD11gta4fDjxpINK4ZqbbLMbyhmavb1t24Iz5ZLO54qgrRg06FbfA4NMmlemI1hb5RdWLTa2Xlp4g5MG29u3215C/X4W2lRnmWtIjcutHlH5YR+Sn8+Hbo64kO56cuMein3kt5Zg9fd+/Z5wuS5XqUJ2jnkvRIHoreo0G82qhiJ1rfeD9F94uX3H2YB2uefcHS15pxb7cV3YHruRTYXfb8hJmBV3U144TuX1bdeg8UNN5d9Go5GWYn82ZVaihwCuBQJjL1oYIwjzAghcNDRt9x7DG64WpDUAdZhYgrOVx5TPkqYY2VNJnnddUNOhGR4Dl4p33fZaSBllhFVmeGIFH4JZYUfbheTbUQulmRwKzHZ44BkWgnnEmoqKSeVH8LnojQSbRXmcYIOSmihhh6KaKKKLspoo44qWgAAOw==";

    // loop For to create cards -- apply on navbar as well
    const downloadItems = [
        {
            name: "Github",
            url: "#",
            icon: <FaGithub size={"2.6rem"} className="icon"/>,
            qrCode: qrCode,
        },
        {
            name: "F-Droid",
            url: "#",
            icon: <img src="/fdroid.min.svg" alt="F-Droid" className="icon" width="41.6px" height="41.6px" />,
            qrCode: qrCode,
        },
        {
            name: "Google Play",
            url: "#",
            icon: <FaGooglePlay size={"2.6rem"} className="icon"/>,
            qrCode: qrCode,
        }
    ]

    return (
        <>
            <Title title={t("Download")}/>
            <div className="container download">
                <div className="card">
                    <a href="" className="link">
                        <FaGithub size={"2.6rem"} className="icon"/>
                        <p>Github</p>
                    </a>
                    <img src={qrCode} alt="QR code" className="qrcode" />
                </div>

                <div className="card">
                    <a href="" className="link">
                        <img src="/fdroid.min.svg" alt="F-Droid" className="icon" width="41.6px" height="41.6px" />
                        <p>F-Droid</p>
                    </a>
                    <img src={qrCode} alt="QR code" className="qrcode" />
                </div>

                <div className="card">
                    <a href="" className="link">
                        <FaGooglePlay size={"2.4rem"} className="icon"/>
                        <p>Google Play</p>
                    </a>
                    <img src={qrCode} alt="QR code" className="qrcode" />
                </div>
            </div>
        </>
    );
};

export default Download;