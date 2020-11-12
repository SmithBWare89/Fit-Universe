let db;
const request = window.indexedDB.open('fit-universe', 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('new-workout', { autoIncrement: false });
};

request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.onLine) {
        uploadWorkout();
    };
};

request.onerror = function (event) {
    console.log(event.target.errorCode);
};

export function saveWorkout(workout) {
    const transaction = db.transaction(['new-workout'], 'readwrite');
    const workoutObjectStore = transaction.objectStore('new-workout');
    workoutObjectStore.put(workout, "workout")
};

export function uploadWorkout() {
    const transaction = db.transaction(['new-workout'], 'readwrite');
    const workoutObjectStore = transaction.objectStore('new-workout');
    const getAll = workoutObjectStore.getAll();
    getAll.onsuccess = function () {
        //save items to database
        console.log('Hello!');
    }
};

// window.addEventListener('online', uploadWorkout);