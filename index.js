function myEach(collection, alert){
    const newCollection = Object.values(collection).map(x => alert(x))
    return collection
}

function myMap(collection, cb){
    const newCollection = Object.values(collection)
    return newCollection.map(cb)
}

function myReduce(collection, cb, acc){
    const newCollection = Object.values(collection)
    if (acc){
        return newCollection.reduce(cb, acc)
    }else {
        return newCollection.reduce(cb)
    }
}

function myFind(collection, predicate){
    const newCollection = Object.values(collection)
    return newCollection.find(predicate)
}

function myFilter(collection, predicate){
    const newCollection = Object.values(collection)
    return newCollection.filter(predicate)
}

function mySize(collection){
    const newCollection = Object.values(collection)
    return newCollection.length
}

function myFirst(array, n){
    if (n){
        return array.slice(0, n)
    }else {
        return array[0]
    }
}

function myLast(array, n){
    if (n){
        return array.slice(-n)
    }else {
        return parseInt(array.slice(-1))
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}