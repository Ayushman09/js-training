var restaurantMenu ={
    restuarantName: "Bawarchi Restaurant",
    items: {
        item1:{
            name:"Biryani",
            price:"$20"
        },
        item2:{
            name:"Paneer",
            price:"$30"
        },
        item3:{
            name:"Pasta",
            price:"$10"
        },
        item4:{
            name:"Burger",
            price:"$50"
        },
        item1:{
            name:"Chips",
            price:"$5"
        }
    },
    menulist:function(){
        alert(this.items.item1.name+" costs "+this.items.item1.price)
        alert(this.items.item2.name+" costs "+this.items.item2.price)

        alert(this.items.item3.name+" costs "+this.items.item3.price)

        alert(this.items.item4.name+" costs "+this.items.item4.price)


        alert(this.items.item5.name+" costs "+this.items.item5.price)

    },
    select: function(){
        var x=prompt("Select an item")
        alert("You ordered this "+x)
    }
}