module.exports = class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getItems() {
        return this.items;
    }

     addItem(itemName, quantity, price) {
        this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        });
    }
    
    clear() {
        while(this.items.length > 0) {
            this.items.pop();
        }
        // while it has stuff in it pop it until it's empty i tried item = [] before but didnt check out so i did it this way
    }

    total() {
        //get total price per order first and save it to total
        let total = this.items.map(item => item.quantity * item.pricePerUnit);
        //then add all items up and save it to end and return it
        const end = total.reduce((acc, item) => {
            return acc + item
        },0);
        return end

        //im a fucking beast!
        //i wrote this comment ^ after finishing this assigment after like half of my day and thought it was only gonna get easier
        //it didnt and i didnt remove this comment because peter can have a look at it and see the difference between finishing an assignment after a long day
        //and this comment after accepting my inevitable doom and acceptance that im not gonna finish it and its okay 
    }
}
