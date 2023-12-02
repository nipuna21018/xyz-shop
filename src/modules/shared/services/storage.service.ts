const StorageService = {

    /** store an item in local storage */
    setItem: (key: string, value: any): void => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    /** read an item in local storage using the given key*/
    getItem: <T>(key: string): T | null => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            try {
                return JSON.parse(storedValue) as T;
            } catch (error) {
                // @todo: improve logs. need to properly handle logs 
                console.error(`Error parsing stored value for key ${key}:`, error);
            }
        }
        return null;
    },

    /** delete an item from local storage */
    removeItem: (key: string): void => {
        localStorage.removeItem(key);
    }
};

export default StorageService;