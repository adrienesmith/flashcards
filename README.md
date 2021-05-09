# Flash Cards

Flash card app built as part of the Thinkful software engineering curriculum.

This app is designed to help the user study for upcoming exams. 

The user can:
- Create flash card decks
- Add cards to the decks
- Remove cards from the decks
- Study the decks, wherein the card will first display the front, and then the back
- Delete decks that are no longer needed
---
The app begins at the home page. 
From here, the user sees a list of all decks, and either create, study, view, or delete a deck.

![Alt text](/screenshots/flashcards-screenshot-home.png?raw=true "flashcards-screenshot-home")

When viewing a deck, all of the cards contained within that deck are listed.

![Alt text](/screenshots/flashcards-screenshot-view-deck.png?raw=true "flashcards-screenshot-view-deck")

When editing the deck, the user is brought to the "Edit Deck" form.  Upon form submission, the user is brought back to the deck view page.

![Alt text](/screenshots/flashcards-screenshot-edit-deck.png?raw=true "flashcards-screenshot-edit-deck")

When adding a card, the user is brought to the "Add Card" form.  Upon form submission, the user is brought back to the deck view page.

![Alt text](/screenshots/flashcards-screenshot-add-card.png?raw=true "flashcards-screenshot-add-card")

When editing a card, the user is brought to the "Edit Card" form, which is pre-filled with the card text.  Upon form submission, the user is brought back to the deck view page. 

![Alt text](/screenshots/flashcards-screenshot-edit-card.png?raw=true "flashcards-screenshot-edit-card")

When studying, the user first sees the front of the the card. Upon clicking "flip", the card flips around and displays the back of the card. The user can click "next" to see the next card in the deck. If at the end of the deck, the user will get the option to re-start the deck, or return home.
| Front of card      | Back of card |
| ----------- | ----------- |
| ![Alt text](/screenshots/flashcards-screenshot-study-front.png?raw=true "flashcards-screenshot-study-front")      | ![Alt text](/screenshots/flashcards-screenshot-study-back.png?raw=true "flashcards-screenshot-study-back")       |
---
This is the first Thinkful project where the app framework was not pre-built in the curriculum. I built this flash card app using React, and styled it using Bootstrap. The app routing utilizes React Router, and all interactivity is written with JavaScript. This app is my first implementation of the useEffect() hook, which is responsible for the API fetches throughout the app.  



