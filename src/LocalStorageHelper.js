class LocalStorageHelper {

    //получение информации из LocalStorage
    getData() {
        return JSON.parse(localStorage.getItem('favorite')) || [];
    }

    //запись информации в LocalStorage
    setData(data) {
        localStorage.setItem('favorite', JSON.stringify(data));
    }
}

export default new LocalStorageHelper();