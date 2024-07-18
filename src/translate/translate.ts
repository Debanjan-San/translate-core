import { utils } from '../Utils'
import { IResponce } from '../types/types'

export class Translate {
    public supportedLanguages: string[] = [
        'ar',
        'ur',
        'en',
        'fr',
        'de',
        'id',
        'gu',
        'hi',
        'it',
        'ja',
        'kn',
        'ta',
        'te',
        'bn',
        'ml',
        'mr',
        'ne',
        'pa',
        'es',
        'ru',
        'pt',
        'tr',
        'vi'
    ]

    private BASE_URL = 'https://translate.googleapis.com/translate_a/single'

    private constructURI = (text: string, targetLanguage: string): string => {
        const params = new URLSearchParams({
            client: 'gtx',
            sl: 'auto',
            tl: targetLanguage,
            ie: 'UTF-8',
            dt: 't',
            q: text
        })

        return `${this.BASE_URL}?${params.toString()}`
    }

    public getTranslate = async (langTo: string, text: string): Promise<IResponce | undefined> => {
        try {
            if (!this.supportedLanguages.includes(langTo))
                return void this.utils.log('This language is not supported', 'error')
            const url = this.constructURI(text, langTo)
            const [data]: string[][] = await this.utils.fetch(url, {
                Host: 'translate.google.com',
                ...this.utils.heders(),
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            })

            const translatedText = data.map((item: string) => item[0]).join('')
            if (!(translatedText.trim().length > 1)) return void this.utils.log('Invalid Input!!', 'error')
            return { langTo, translatedText }
        } catch (error) {
            this.utils.log(JSON.stringify(error), 'error')
        }
    }

    private utils = new utils()
}
