//Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items. 

function todo(){
    let items = []

    function addItem(item){
        items.push(item)
    }

    function removeItem(item){
        let index = items.indexOf(item.trim())
        if(index !== -1){
            items.splice(index,1)
        } else {
            console.log('not in collection')
        }
    }

    function getItems(){
        return items
    }

    return {
        addItem,
        removeItem,
        getItems
    }
}

const d = todo()

d.addItem('iron')
d.addItem('pop')
d.addItem('copper')
d.addItem('steel')
console.log(d.getItems())

d.removeItem('pop')
d.removeItem('copper')
console.log(d.getItems())
