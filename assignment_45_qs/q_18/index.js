"use strict";
class TravelPlanner {
    constructor() {
        this.placesToVisit = [
            "Tokyo",
            "Paris",
            "New York",
            "Sydney",
            "Marrakech",
        ];
    }
    printOriginalOrder() {
        console.log("Original Order:", this.placesToVisit);
    }
    printAlphabeticalOrder() {
        const sortedList = [...this.placesToVisit].sort();
        console.log("Alphabetical Order:", sortedList);
    }
    printReverseAlphabeticalOrder() {
        const reverseSortedList = [...this.placesToVisit].sort().reverse();
        console.log("Reverse Alphabetical Order:", reverseSortedList);
    }
    reverseOrder() {
        this.placesToVisit.reverse();
        console.log("Reversed Order:", this.placesToVisit);
    }
    sortAlphabetically() {
        this.placesToVisit.sort();
        console.log("Sorted Alphabetically:", this.placesToVisit);
    }
    sortReverseAlphabetically() {
        this.placesToVisit.sort().reverse();
        console.log("Sorted Reverse Alphabetically:", this.placesToVisit);
    }
}
const travelPlanner = new TravelPlanner();
travelPlanner.printOriginalOrder();
travelPlanner.printAlphabeticalOrder();
travelPlanner.printOriginalOrder();
travelPlanner.printReverseAlphabeticalOrder();
travelPlanner.printOriginalOrder();
travelPlanner.reverseOrder();
travelPlanner.printOriginalOrder();
travelPlanner.reverseOrder();
travelPlanner.printOriginalOrder();
travelPlanner.sortAlphabetically();
travelPlanner.printOriginalOrder();
travelPlanner.sortReverseAlphabetically();
travelPlanner.printOriginalOrder();
