class LocalStorageHelper {

    //получение информации из LocalStorage
    getData() {
        return JSON.parse(localStorage.getItem('lang')) || [];
    }

    //запись информации в LocalStorage
    setData(data) {
        localStorage.setItem('lang', JSON.stringify(data));
    }
}

export default new LocalStorageHelper();