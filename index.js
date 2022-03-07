// Code your solution here

function findMatching(drivers, query){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === query.toLowerCase()
    })
}

function fuzzyMatch(drivers, query){
    return drivers.filter(function(driver){
        return driver.startsWith(query)
    })
}

function matchName(drivers, query){
    return drivers.filter(function(driver){
        return driver.name === query
    })
}
