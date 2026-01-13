import { YtDlp } from '../src/index';

const ytdlp = new YtDlp();

async function checkInstallation() {
    try {
        const isInstalled = await ytdlp.checkInstallationAsync({ ffmpeg: true });
        console.log('Installation check:', isInstalled);
        return isInstalled;
    } catch (error) {
        console.log('Error checking installation:', error);
    }
}

checkInstallation();