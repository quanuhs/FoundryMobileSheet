// src/js/main.js
Hooks.once('init', async function() {
    console.log('Your Module | Initializing');
    // Register custom sheet and make default character sheet
    Actors.registerSheet('dnd5e', YourCustomCharacterSheet, { makeDefault: true });
});

class YourCustomCharacterSheet extends ActorSheet5eCharacter {
    /** @override */
    get template() {
        return "modules/mobile-sheet/templates/your-custom-sheet.html";
    }

    /** @override */
    async getData() {
        const data = await super.getData();
        // Modify data here if needed
        return data;
    }
}
