import axios from 'axios';
import { getConfig } from 'config/Config';
import { showError } from 'utils/ErrorUtils';

export function getDownloadLinks(release) {
    const links = [];

    if (!release) {
        return links;
    }

    const win = release.assets.find(asset => asset.name.endsWith('.exe') && !asset.name.toLocaleLowerCase().includes('setup'));
    const winSetup = release.assets.find(asset => asset.name.endsWith('.exe') && asset.name.toLocaleLowerCase().includes('setup'));
    const mac = release.assets.find(asset => asset.name.endsWith('.dmg'));
    const linuxTar = release.assets.find(asset => asset.name.endsWith('.tar.gz'));
    const linuxSnap = release.assets.find(asset => asset.name.endsWith('.snap'));
    const linuxAppImg = release.assets.find(asset => asset.name.endsWith('.AppImage'));

    if (win) {
        links.push({
            id: win.id,
            url: win.browser_download_url,
            label: 'Windows without installer'
        });
    }

    if (winSetup) {
        links.push({
            id: winSetup.id,
            url: winSetup.browser_download_url,
            label: 'Windows with installer'
        });
    }

    if (mac) {
        links.push({
            id: mac.id,
            url: mac.browser_download_url,
            label: 'Mac'
        });
    }

    if (linuxTar) {
        links.push({
            id: linuxTar.id,
            url: linuxTar.browser_download_url,
            label: 'Linux (tar.gz)'
        });
    }

    if (linuxSnap) {
        links.push({
            id: linuxSnap.id,
            url: linuxSnap.browser_download_url,
            label: 'Linux (snap)'
        });
    }

    if (linuxAppImg) {
        links.push({
            id: linuxAppImg.id,
            url: linuxAppImg.browser_download_url,
            label: 'Linux (appimage)'
        });
    }

    return links;
}

export function retrieveLatestRelease() {
    return async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: getConfig().latestReleaseUrl,
                responseType: 'json'
            });

            return result.data;
        } catch (error) {
            showError('Retrieval of latest release failed', error);
            throw error;
        }
    };
}