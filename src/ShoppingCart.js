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
        
    }

    total() {
        let total = this.items.map(item => item.quantity * item.pricePerUnit);
        const end = total.reduce((acc, item) => {
            return acc + item
        },0);
        return end

        //im a fucking beast!
    }
}
