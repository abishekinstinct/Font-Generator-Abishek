// ========================================
// GET HTML ELEMENTS
// ========================================

const textInput =
    document.getElementById("textInput");

const fontContainer =
    document.getElementById("fontContainer");


// ========================================
// UNICODE FONT STYLES
// ========================================

const styles = [

    // 1. Bold
    {
        name: "Bold",

        map: {
            upper: 0x1D400,
            lower: 0x1D41A,
            number: 0x1D7CE
        }
    },


    // 2. Italic
    {
        name: "Italic",

        map: {
            upper: 0x1D434,
            lower: 0x1D44E
        }
    },


    // 3. Bold Italic
    {
        name: "Bold Italic",

        map: {
            upper: 0x1D468,
            lower: 0x1D482
        }
    },


    // 4. Monospace
    {
        name: "Monospace",

        map: {
            upper: 0x1D670,
            lower: 0x1D68A,
            number: 0x1D7F6
        }
    },


    // 5. Bold Sans
    {
        name: "Bold Sans",

        map: {
            upper: 0x1D5D4,
            lower: 0x1D5EE,
            number: 0x1D7EC
        }
    },


    // 6. Sans Italic
    {
        name: "Sans Italic",

        map: {
            upper: 0x1D608,
            lower: 0x1D622
        }
    },


    // 7. Sans Bold Italic
    {
        name: "Sans Bold Italic",

        map: {
            upper: 0x1D63C,
            lower: 0x1D656
        }
    }

];


// ========================================
// CONVERT TEXT TO UNICODE
// ========================================

function convertText(text, map) {

    return [...text].map(char => {

        const code =
            char.charCodeAt(0);


        // Uppercase A-Z

        if (
            code >= 65 &&
            code <= 90 &&
            map.upper
        ) {

            return String.fromCodePoint(
                map.upper + (code - 65)
            );

        }


        // Lowercase a-z

        if (
            code >= 97 &&
            code <= 122 &&
            map.lower
        ) {

            return String.fromCodePoint(
                map.lower + (code - 97)
            );

        }


        // Numbers 0-9

        if (
            code >= 48 &&
            code <= 57 &&
            map.number
        ) {

            return String.fromCodePoint(
                map.number + (code - 48)
            );

        }


        // Keep other characters

        return char;

    }).join("");

}


// ========================================
// EXTRA STYLES
// ========================================

function addExtraStyles(text) {

    return [

        // 8. Circled
        {
            name: "Circled",

            text: [...text].map(c => {

                const code =
                    c.toUpperCase().charCodeAt(0);

                if (
                    code >= 65 &&
                    code <= 90
                ) {

                    return String.fromCodePoint(
                        0x24B6 +
                        (code - 65)
                    );

                }

                return c;

            }).join("")
        },


        // 9. Fullwidth
        {
            name: "Fullwidth",

            text: [...text].map(c => {

                const code =
                    c.charCodeAt(0);

                if (
                    code >= 33 &&
                    code <= 126
                ) {

                    return String.fromCharCode(
                        code + 0xFEE0
                    );

                }

                return c;

            }).join("")
        },


        // 10. Small Caps
        {
            name: "Small Caps",

            text: text
                .toLowerCase()

                .replace(/a/g, "ᴀ")
                .replace(/b/g, "ʙ")
                .replace(/c/g, "ᴄ")
                .replace(/d/g, "ᴅ")
                .replace(/e/g, "ᴇ")
                .replace(/f/g, "ꜰ")
                .replace(/g/g, "ɢ")
                .replace(/h/g, "ʜ")
                .replace(/i/g, "ɪ")
                .replace(/j/g, "ᴊ")
                .replace(/k/g, "ᴋ")
                .replace(/l/g, "ʟ")
                .replace(/m/g, "ᴍ")
                .replace(/n/g, "ɴ")
                .replace(/o/g, "ᴏ")
                .replace(/p/g, "ᴘ")
                .replace(/q/g, "ǫ")
                .replace(/r/g, "ʀ")
                .replace(/s/g, "s")
                .replace(/t/g, "ᴛ")
                .replace(/u/g, "ᴜ")
                .replace(/v/g, "ᴠ")
                .replace(/w/g, "ᴡ")
                .replace(/x/g, "x")
                .replace(/y/g, "ʏ")
                .replace(/z/g, "ᴢ")
        },


        // 11. Strikethrough
        {
            name: "Strikethrough",

            text: [...text]
                .map(c => c + "̶")
                .join("")
        },


        // 12. Underline
        {
            name: "Underline",

            text: [...text]
                .map(c => c + "̲")
                .join("")
        },


        // 13. Double Underline
        {
            name: "Double Underline",

            text: [...text]
                .map(c => c + "̳")
                .join("")
        },


        // 14. Slash
        {
            name: "Slash",

            text: [...text]
                .map(c => c + "̷")
                .join("")
        },


        // 15. Dotted
        {
            name: "Dotted",

            text: [...text]
                .map(c => c + "̇")
                .join("")
        },


        // 16. Overline
        {
            name: "Overline",

            text: [...text]
                .map(c => c + "̅")
                .join("")
        },


        // 17. Tilde
        {
            name: "Tilde",

            text: [...text]
                .map(c => c + "̃")
                .join("")
        },


        // ========================================
        // DECORATIVE STYLES
        // ========================================


        // 18. Royal
        {
            name: "Royal",

            text:
                "꧁༺ " +
                text +
                " ༻꧂"
        },


        // 19. Stars
        {
            name: "Stars",

            text:
                "★彡 " +
                text +
                " 彡★"
        },


        // 20. Fancy Dots
        {
            name: "Fancy Dots",

            text:
                "•°¯°• " +
                text +
                " •°¯°•"
        },


        // 21. Diamonds
        {
            name: "Diamonds",

            text:
                "◆◇ " +
                text +
                " ◇◆"
        },


        // 22. Fancy Brackets
        {
            name: "Fancy Brackets",

            text:
                "『 " +
                text +
                " 』"
        },


        // 23. Japanese Style
        {
            name: "Japanese Style",

            text:
                "【 " +
                text +
                " 】"
        },


        // 24. Flowers
        {
            name: "Flowers",

            text:
                "ꕥ " +
                text +
                " ꕥ"
        },


        // 25. Hearts
        {
            name: "Hearts",

            text:
                "♡ " +
                text +
                " ♡"
        },


        // 26. Sparkles
        {
            name: "Sparkles",

            text:
                "✧･ﾟ: *✧ " +
                text +
                " ✧* :ﾟ･✧"
        },


        // 27. Arrows
        {
            name: "Arrows",

            text:
                "➳ " +
                text +
                " ࿐"
        },


        // 28. Wings
        {
            name: "Wings",

            text:
                "ʚ♡ɞ " +
                text +
                " ʚ♡ɞ"
        },


        // 29. Cross
        {
            name: "Cross",

            text:
                "✞ " +
                text +
                " ✞"
        },


        // 30. Fire
        {
            name: "Fire",

            text:
                "🔥 " +
                text +
                " 🔥"
        },


        // 31. Crown
        {
            name: "Crown",

            text:
                "♛ " +
                text +
                " ♛"
        },


        // 32. Music
        {
            name: "Music",

            text:
                "♫ " +
                text +
                " ♫"
        },


        // 33. Infinity
        {
            name: "Infinity",

            text:
                "∞ " +
                text +
                " ∞"
        },


        // 34. Cool
        {
            name: "Cool",

            text:
                "×͜× " +
                text +
                " ×͜×"
        },


        // 35. Wave
        {
            name: "Wave",

            text:
                "〰 " +
                text +
                " 〰"
        },


        // 36. Lightning
        {
            name: "Lightning",

            text:
                "⚡ " +
                text +
                " ⚡"
        },


        // 37. Moon
        {
            name: "Moon",

            text:
                "☾ " +
                text +
                " ☽"
        }

    ];

}


// ========================================
// CREATE FONT CARD
// ========================================

function createCard(name, text) {

    const card =
        document.createElement("div");

    card.className =
        "font-card";


    const textElement =
        document.createElement("div");

    textElement.className =
        "font-text";

    textElement.textContent =
        text;


    const button =
        document.createElement("button");

    button.className =
        "copy-btn";

    button.textContent =
        "📋 Copy";


    // COPY BUTTON

    button.addEventListener(
        "click",
        async () => {

            try {

                await navigator
                    .clipboard
                    .writeText(text);


                button.textContent =
                    "✓ Copied!";


                setTimeout(() => {

                    button.textContent =
                        "📋 Copy";

                }, 1500);


            } catch (error) {

                alert(
                    "Unable to copy text"
                );

            }

        }
    );


    card.appendChild(
        textElement
    );


    card.appendChild(
        button
    );


    fontContainer.appendChild(
        card
    );

}


// ========================================
// GENERATE ALL FONTS
// ========================================

function generateFonts() {

    const text =
        textInput.value;


    // Remove old results

    fontContainer.innerHTML =
        "";


    // Generate Unicode fonts

    styles.forEach(style => {

        const styledText =
            convertText(
                text,
                style.map
            );


        createCard(
            style.name,
            styledText
        );

    });


    // Generate decorative fonts

    const extras =
        addExtraStyles(text);


    extras.forEach(style => {

        createCard(
            style.name,
            style.text
        );

    });

}


// ========================================
// LIVE GENERATION
// ========================================

textInput.addEventListener(
    "input",
    generateFonts
);


// ========================================
// INITIAL GENERATION
// ========================================

generateFonts();