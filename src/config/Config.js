const config = {
    common: {
        sku: 'tu-app-pro-1',
        trialSku: 'tu-app-pro-trial-1',
        latestReleaseUrl: 'https://api.github.com/repos/leclercb/taskunifier-app/releases/latest'
    },
    local: {
        apiUrl: 'http://localhost:2000',
        cloudUrl: 'http://localhost:3000',
        stripe: {
            publicKey: 'pk_test_2s6bAR33dvEhfo6HPxUFp3aC00Oeu6YaC3',
            productId: 'prod_G25vLYUMMZ425U'
        }
    },
    dev: {
        apiUrl: 'https://api-dev.taskunifier.app',
        cloudUrl: 'https://cloud-dev.taskunifier.app',
        stripe: {
            publicKey: 'pk_test_2s6bAR33dvEhfo6HPxUFp3aC00Oeu6YaC3',
            productId: 'prod_G25vLYUMMZ425U'
        }
    },
    prod: {
        apiUrl: 'https://api.taskunifier.app',
        cloudUrl: 'https://cloud.taskunifier.app',
        stripe: {
            publicKey: 'pk_live_4lKvIf62Jr5Gmcoq7LMB8m8c00FigLOWJL',
            productId: 'prod_G25rZGmCt27V8q'
        }
    }
};

export function getConfig() {
    return {
        ...config.common,
        ...config[process.env.REACT_APP_STAGE]
    };
}