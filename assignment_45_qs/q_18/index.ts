
class TravelPlanner {
    private placesToVisit: string[] = [
      "Tokyo",
      "Paris",
      "New York",
      "Sydney",
      "Marrakech",
    ];
  
    printOriginalOrder(): void {
      console.log("Original Order:", this.placesToVisit);
    }
  
    printAlphabeticalOrder(): void {
      const sortedList = [...this.placesToVisit].sort();
      console.log("Alphabetical Order:", sortedList);
    }
  
    printReverseAlphabeticalOrder(): void {
      const reverseSortedList = [...this.placesToVisit].sort().reverse();
      console.log("Reverse Alphabetical Order:", reverseSortedList);
    }
  
    reverseOrder(): void {
      this.placesToVisit.reverse();
      console.log("Reversed Order:", this.placesToVisit);
    }
  
    sortAlphabetically(): void {
      this.placesToVisit.sort();
      console.log("Sorted Alphabetically:", this.placesToVisit);
    }
  
    sortReverseAlphabetically(): void {
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