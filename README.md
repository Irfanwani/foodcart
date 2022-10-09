# FOODCART
A simple app created with react native (with expo) to store the name of a food item with its price.

## Getting Started
```
git clone https://github.com/irfanwani/foodcart

cd foodcart

npm install

npx expo start

```
You need to have expo app installed on your android device to test this app.

All the requirements as per <a href='https://snapdragon-screw-a47.notion.site/React-Native-Challenge-19b8696948d549de84b75122ab8f951e'>this</a> page are satisfied.

## Features
1) On main page, we can simply click the  `Add Item` button to add new items. Each item will have two action buttons on the right side to `edit` or `delete` the item. On left side, each item has also two icons, one is `info` icon to show the information about the item, second icon is just to represent that the component is draggable.

2) To drag and shuffle any item, Long press the item and drag to the new position. This will update the order of items globally.

3) At the bottom of the main page, there is another button, `Show All Items`, which takes us to another page which shows all the items in JSON format (as per requirements).

4) I also implemented `redux-toolkit` with `react-redux` and `redux-persist` to persist the state across different app refreshes.

5) To show an alert before deleting an item, I created a custom `Dialog` component to show as alert before deleting an item when the delete icon is pressed.