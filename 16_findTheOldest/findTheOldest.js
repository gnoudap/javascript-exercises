const findTheOldest = function(persons) {
    const currentYear = new Date().getFullYear();
    return persons.reduce((oldest, person) => {
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        if (!oldest || age > (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth) {
            return person;
        }
        return oldest;
    }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
