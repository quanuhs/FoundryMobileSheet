// Ensure the game system is ready before defining the custom sheet
Hooks.once('ready', async function() {
    // Define the custom character sheet class
    class YourCustomCharacterSheet extends game.dnd5e.applications.actor.ActorSheet5eCharacter {
        /** @override */
        get template() {
            return "modules/dnd5e-mobile-sheet/src/templates/sheet.html";
        }

        /** @override */
        async getData() {
            const data = await super.getData();
            // Modify data here if needed
            return data;
        }
    }

    // Register custom sheet and make it the default character sheet
    Actors.registerSheet('dnd5e', YourCustomCharacterSheet, { makeDefault: true });
});
