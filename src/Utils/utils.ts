import axios from 'axios'

export class utils {
    public randomElement = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)]

    public generateRandomUserAgent = (): string => {
        const versions: string[] = [
            '4.0.3',
            '4.1.1',
            '4.2.2',
            '4.3',
            '4.4',
            '5.0.2',
            '5.1',
            '6.0',
            '7.0',
            '8.0',
            '9.0',
            '10.0',
            '11.0'
        ]

        const deviceModels: string[] = ['M2004J19C', 'S2020X3', 'Xiaomi4S', 'RedmiNote9', 'SamsungS21', 'GooglePixel5']

        const buildVersions: string[] = [
            'RP1A.200720.011',
            'RP1A.210505.003',
            'RP1A.210812.016',
            'QKQ1.200114.002',
            'RQ2A.210505.003'
        ]

        const randomChromeVersion = (): string => {
            const majorVersion = Math.floor(Math.random() * 80) + 1
            const minorVersion = Math.floor(Math.random() * 999) + 1
            const buildVersion = Math.floor(Math.random() * 9999) + 1
            return `Chrome/${majorVersion}.${minorVersion}.${buildVersion}`
        }

        const randomWhatsAppVersion = (): string => {
            const major = Math.floor(Math.random() * 9) + 1
            const minor = Math.floor(Math.random() * 9) + 1
            return `WhatsApp/1.${major}.${minor}`
        }

        return `Mozilla/5.0 (Linux; Android ${this.randomElement(versions)}; ${this.randomElement(
            deviceModels
        )} Build/${this.randomElement(
            buildVersions
        )}) AppleWebKit/537.36 (KHTML, like Gecko) ${randomChromeVersion()} Mobile Safari/537.36 ${randomWhatsAppVersion()}`
    }

    public generateRandomIP = (): string => {
        const randomByte = (): number => Math.floor(Math.random() * 256)
        return `${randomByte()}.${randomByte()}.${randomByte()}.${randomByte()}`
    }

    public heders = (): {
        'User-Agent': string
        'X-Forwarded-For': string
    } => {
        return {
            'User-Agent': this.generateRandomUserAgent(),
            'X-Forwarded-For': this.generateRandomIP()
        }
    }

    public fetch = async <T>(url: string, headers?: { [key: string]: string }): Promise<T> =>
        (await axios.get(url, { headers })).data

    public getBuffer = async (url: string): Promise<Buffer> =>
        (
            await axios.get<Buffer>(url, {
                responseType: 'arraybuffer'
            })
        ).data

    public log = (log: string, type: 'success' | 'error'): void =>
        console.log(`${type === 'error' ? '\x1b[31m' : '\x1b[32m'}${log}`)
}
