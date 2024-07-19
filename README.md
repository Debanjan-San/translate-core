<div align="center">
<a href="https://www.instagram.com/das_abae/">
  <img src="https://i.ibb.co/hcmC6tL/download-unscreen.gif">
</a>

## **Translate-core**

**A simple package to translate languages**
</div>

### **Installation**

```bash
> npm install translate-core
> yarn add translate-core
```
### **Methords**

- `supportedLanguages`: Returns an array containing all the languages supported by application
- `getTranslate`: Translates text from the application's current language to a specified target language

##### **Parameters**

- `langTo (string)`: The target language code to translate the text into. Examples include "en" (English), "es" (Spanish), "fr" (French), and so on. Ensure the language code is supported by your translation library.
- `text (string)`: The text to be translated.

##### **Returns**

An object with two properties:

- `langTo (string):` The same target language code passed as input.
- `translatedText (string):` The translated text in the specified target language.

##### **Example Usage**

You need to intialize the `Translate` Class before acessing the methods inside it.

```js
const { Translate } = require('translate-core');

(async () => {
    const { getTranslate } = new Translate()
    const text = await getTranslate('en', 'こんにちは！今日はどんなことをお話ししたいですか？')
    console.log(text)
    /*
    Output:
    {
  langTo: 'en',
  translatedText: 'Hello! What would you like to talk about today?'
}
     */
})()
```

### **Build with**
- [typescript](https://www.typescriptlang.org/)
