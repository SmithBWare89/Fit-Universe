export const addSets = (sets) => {
    return sets + 1
}

export const deleteSets = (sets) => {
    if (sets > 0) {
        return sets - 1;
    }

    return sets
}