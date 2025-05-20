import { useTranslation } from 'react-i18next';
import { FaGithub, FaGooglePlay, FaExclamationTriangle } from "react-icons/fa";
import Title from '../components/Title';
import '../styles/pages/download.sass';

const DownloadItems = () => {
    const qrcode: string = "data:image/gif;base64,R0lGODlhZABkAJEAAAAAAP///wAAAAAAACH5BAEAAAIALAAAAABkAGQAAAL/jI+py+0Po5y02ouz3rz7D4biSJbmiabqCgLuC8fyjMDMDNT4zlP8TzvYFjgd8JibIJHGpKIoXAJ90l/zFjRUrcoXZvj0RmXXCzhyprqw63GsbEk/5BJ64AzViuN7dF/tlICXdffX1VbXN+UG1zCIWNjDeBi4qAdp1/i40wixmRdZaRiGqch1GehpKonaSbQqyhoK2ASaOenwSXhLGsuJ6zgqCGsrzOZbDHmsWirLO9z82zpnDGw5S1m7KyyleYqdGJ2c6natSwbMjLytXP59/pZOLc5OjmpOXE9rBnu8+VWtF8Bo/vrxa5crYDCCr9BN44NwoT0/DHv9Ozix4JaL/w/BhdoYLxzIkB45fhwZUeNIbxVPogSEsqXJmCRZqHRlM8W4nDl38mTh82fHZ6A42DGpDie0mhuOGhSpVFtKjMvkJWx584NTrPMyNlxHLyxYks+ifpU6Fi1apF333csndu1Til4Fuot7dyxbkfDgyXXokqzCrG8Bj8PnbPDXvnD11gta4fDjxpINK4ZqbbLMbyhmavb1t24Iz5ZLO54qgrRg06FbfA4NMmlemI1hb5RdWLTa2Xlp4g5MG29u3215C/X4W2lRnmWtIjcutHlH5YR+Sn8+Hbo64kO56cuMein3kt5Zg9fd+/Z5wuS5XqUJ2jnkvRIHoreo0G82qhiJ1rfeD9F94uX3H2YB2uefcHS15pxb7cV3YHruRTYXfb8hJmBV3U144TuX1bdeg8UNN5d9Go5GWYn82ZVaihwCuBQJjL1oYIwjzAghcNDRt9x7DG64WpDUAdZhYgrOVx5TPkqYY2VNJnnddUNOhGR4Dl4p33fZaSBllhFVmeGIFH4JZYUfbheTbUQulmRwKzHZ44BkWgnnEmoqKSeVH8LnojQSbRXmcYIOSmihhh6KaKKKLspoo44qWgAAOw==";

    // loop For to create cards -- apply on navbar as well
    const downloadItems = [
        {
            name: "Github",
            url: "https://github.com/PHYSAPPdev/PHYSAPPapp",
            icon: <FaGithub size={"2.6rem"} className="icon" />,
            qrCode: qrcode,
        },
        {
            name: "F-Droid",
            url: "#",
            icon: <img src="/fdroid.min.svg" alt="F-Droid" className="icon" width="41.6px" height="41.6px" />,
            qrCode: qrcode,
        },
        {
            name: "Google Play",
            url: "#",
            icon: <FaGooglePlay size={"2.6rem"} className="icon" />,
            qrCode: qrcode,
        }
    ];

    return (
        <>
            {downloadItems.map((item, index) => (
                <div className="card" key={index}>
                    <a href={item.url} className="link">
                        {item.icon}
                        <p>{item.name}</p>
                    </a>
                    <img src={item.qrCode} alt={`${item.name} QR code`} className="qrcode" />
                </div>
            ))}
        </>
    );

}

const Download = () => {
    const { t } = useTranslation();

    return (
        <>
            <Title title={t("Download")} />
            <h3 className="container warning"> 
                <FaExclamationTriangle size={30} />
                <p>{t("Warning")}</p>
                <FaExclamationTriangle size={30} />
            </h3>
            <div className="container download">
                <DownloadItems />
            </div>
        </>
    );
};

export default Download;